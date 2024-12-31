import { Database, open } from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";
import fs from "fs/promises";
import { User } from "@/types/leaderboard";
import { QuizSubmission } from "@/app/components/QuizPageClient";

let db: Database | null = null;

export async function initializeDatabase() {
  if (db) return db;

  const dbPath = path.join(process.cwd(), "quiz.db");
  const schemaPath = path.join(process.cwd(), "src/db/schema.sql");

  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // Execute schema
  const schema = await fs.readFile(schemaPath, "utf-8");

  // Split schema into individual statements and execute them
  const statements = schema.split(";").filter((stmt) => stmt.trim());
  for (const statement of statements) {
    if (statement.trim()) {
      try {
        await db.exec(statement);
      } catch (error) {
        console.error("Error executing statement:", error);
        // Continue executing other statements even if one fails
      }
    }
  }

  // Check if we need to add the invite_code column
  const result = await db.get(
    "SELECT sql_command FROM (SELECT CASE WHEN NOT EXISTS(SELECT 1 FROM pragma_table_info('users') WHERE name='invite_code') THEN 'ALTER TABLE users ADD COLUMN invite_code TEXT UNIQUE' END AS sql_command) WHERE sql_command IS NOT NULL"
  );

  if (result?.sql_command) {
    try {
      await db.exec(result.sql_command);
      console.log("Added invite_code column to users table");
    } catch (error) {
      console.error("Error adding invite_code column:", error);
    }
  }

  return db;
}

export async function getDatabase() {
  if (!db) {
    db = await initializeDatabase();
  }
  return db;
}

// User operations
export async function getUser(userId: string): Promise<User | null> {
  const db = await getDatabase();
  const result = await db.get("SELECT * FROM users WHERE user_id = ?", userId);

  if (!result) {
    return null;
  }

  return {
    uuid: result.user_id,
    name: result.user_name,
    totalScore: result.total_score,
    currentStreak: result.current_streak,
    highestStreak: result.highest_streak,
    optIn: result.opt_in === 1, // SQLite stores booleans as 0/1
    lastQuizDate: result.last_quiz_date,
    lastUpdated: result.last_updated,
    shareClicks: result.share_clicks,
    inviteCount: result.invite_count,
  };
}

export async function createUser(userId: string, userName: string, optIn: boolean = false) {
  const db = await getDatabase();
  const now = new Date().toISOString();

  await db.run(
    `INSERT INTO users (user_id, user_name, opt_in, last_updated) 
         VALUES (?, ?, ?, ?)`,
    userId,
    userName,
    optIn,
    now
  );
}

export async function updateUser(userId: string, data: Partial<User>) {
  const db = await getDatabase();
  const now = new Date().toISOString();

  const updates = [];
  const values = [];

  if (data.name !== undefined) {
    updates.push("user_name = ?");
    values.push(data.name);
  }
  if (data.totalScore !== undefined) {
    updates.push("total_score = ?");
    values.push(data.totalScore);
  }
  if (data.currentStreak !== undefined) {
    updates.push("current_streak = ?");
    values.push(data.currentStreak);
  }
  if (data.highestStreak !== undefined) {
    updates.push("highest_streak = ?");
    values.push(data.highestStreak);
  }
  if (data.optIn !== undefined) {
    updates.push("opt_in = ?");
    values.push(data.optIn);
  }
  if (data.lastQuizDate !== undefined) {
    updates.push("last_quiz_date = ?");
    values.push(data.lastQuizDate);
  }
  if (data.shareClicks !== undefined) {
    updates.push("share_clicks = ?");
    values.push(data.shareClicks);
  }
  if (data.inviteCount !== undefined) {
    updates.push("invite_count = ?");
    values.push(data.inviteCount);
  }

  updates.push("last_updated = ?");
  values.push(now);

  values.push(userId);

  await db.run(`UPDATE users SET ${updates.join(", ")} WHERE user_id = ?`, ...values);
}

// Quiz submission operations
export async function createQuizSubmission(userId: string, quizId: number, score: number, selectedOptions: string) {
  const db = await getDatabase();
  const submissionDate = new Date().toISOString();

  await db.run(
    `INSERT INTO quiz_submissions (user_id, quiz_id, quiz_score, selected_options, submission_date)
         VALUES (?, ?, ?, ?, ?)`,
    userId,
    quizId,
    score,
    selectedOptions,
    submissionDate
  );

  // Update user's total score and last quiz date
  await updateUserStats(userId);
}

async function updateUserStats(userId: string) {
  const db = await getDatabase();

  // Get total score
  const { totalScore } = await db.get("SELECT SUM(quiz_score) as totalScore FROM quiz_submissions WHERE user_id = ?", userId);

  // Calculate streak
  const submissions = await db.all(
    `SELECT submission_date FROM quiz_submissions 
         WHERE user_id = ? 
         ORDER BY submission_date DESC`,
    userId
  );
  // Helper function to get quiz date - considering a quiz day starts at 13:00 UTC
  const getQuizDate = (date: Date, dayOffset: number = 0) => {
    const utcDate = new Date(date.getTime());

    if (dayOffset !== 0) {
      utcDate.setDate(utcDate.getDate() + dayOffset);
    }
    // If the time is before 13:00 UTC, consider it part of the previous day
    if (utcDate.getUTCHours() < 13) {
      utcDate.setUTCDate(utcDate.getUTCDate() - 1);
    }

    return utcDate.toISOString().split("T")[0];
  };

  let currentStreak = 0;
  let highestStreak = 0;
  let lastDate: Date | null = null;

  // calculate current streak
  lastDate = null;
  let streakStart = null;
  for (const submission of submissions) {
    const submissionDate = new Date(submission.submission_date);

    if (!lastDate) {
      // Check if first submission is from today or yesterday
      currentStreak = 1;
      streakStart = submissionDate;
      lastDate = submissionDate;

      continue;
    }

    const lastDateStr = getQuizDate(lastDate);
    const submissionStr = getQuizDate(submissionDate);
    const dayDiff = Math.floor((new Date(lastDateStr).getTime() - new Date(submissionStr).getTime()) / 86400000);

    if (dayDiff !== 0) {
      currentStreak++;
    }

    lastDate = submissionDate;
  }

  // Ensure highest streak is at least equal to current streak
  highestStreak = Math.max(highestStreak, currentStreak);

  // Update user stats
  await updateUser(userId, {
    totalScore,
    currentStreak,
    highestStreak,
    lastQuizDate: streakStart ? streakStart.toISOString().split("T")[0] : undefined,
  });
}

// Leaderboard operations
export async function getLeaderboard() {
  const db = await getDatabase();

  // Get all opted-in users
  const users = await db.all(`SELECT user_id FROM users`);

  // Update stats for all users
  for (const user of users) {
    await updateUserStats(user.user_id);
  }

  // Return updated leaderboard
  return db.all(
    `SELECT user_id as uuid, opt_in as optIn, user_name as name, total_score as totalScore, current_streak as currentStreak, highest_streak as highestStreak
         FROM users
         WHERE current_streak > 0
         ORDER BY current_streak DESC, total_score DESC`
  );
}

export async function getOrCreateUser(userId: string, userName: string | null = "", optIn: boolean = false) {
  const db = await getDatabase();

  // Try to get existing user
  const existingUser = await getUser(userId);
  if (existingUser) {
    return existingUser;
  }

  // Create new user if doesn't exist
  await createUser(userId, userName || "", optIn);
  return getUser(userId);
}

/**
 * Fetches quiz submissions for a user
 * @param userId - The user's UUID
 * @param quizId - Optional quiz ID to filter submissions for a specific quiz
 * @returns Array of quiz submissions with their status
 */
export async function getQuizSubmissions(userId: string, quizId?: number): Promise<QuizSubmission[]> {
  const db = await getDatabase();

  const query =
    quizId !== undefined
      ? `SELECT quiz_id, quiz_score, selected_options, submission_date 
       FROM quiz_submissions 
       WHERE user_id = ? AND quiz_id = ?
       ORDER BY submission_date DESC`
      : `SELECT quiz_id, quiz_score, selected_options, submission_date 
       FROM quiz_submissions 
       WHERE user_id = ?
       ORDER BY submission_date DESC`;

  const params = quizId !== undefined ? [userId, quizId] : [userId];
  const submissions = await db.all(query, ...params);

  // Transform the submissions into the expected format
  return submissions.map((submission) => ({
    quizId: submission.quiz_id,
    completed: true,
    score: submission.quiz_score,
    selections: submission.selected_options ? submission.selected_options.split(",").map((str: string) => str.split(";").map(Number)) : [],
    submissionDate: submission.submission_date,
  }));
}

// Friend system operations
export async function getInviteCode(userId: string): Promise<string | null> {
  const db = await getDatabase();
  const result = await db.get("SELECT invite_code FROM users WHERE user_id = ?", userId);
  return result?.invite_code || null;
}

export async function generateInviteCode(userId: string): Promise<string> {
  const db = await getDatabase();

  // First check if user already has an invite code
  const existingCode = await getInviteCode(userId);
  if (existingCode) {
    return existingCode;
  }

  // Generate new code only if one doesn't exist
  const inviteCode = Math.random().toString(36).substring(2, 15);
  await db.run("UPDATE users SET invite_code = ? WHERE user_id = ?", inviteCode, userId);

  return inviteCode;
}

export async function getUserByInviteCode(inviteCode: string): Promise<User | null> {
  const db = await getDatabase();
  const result = await db.get("SELECT * FROM users WHERE invite_code = ?", inviteCode);

  if (!result) return null;

  return {
    uuid: result.user_id,
    name: result.user_name,
    totalScore: result.total_score,
    currentStreak: result.current_streak,
    highestStreak: result.highest_streak,
    optIn: result.opt_in === 1,
    lastQuizDate: result.last_quiz_date,
    lastUpdated: result.last_updated,
    shareClicks: result.share_clicks,
    inviteCount: result.invite_count,
  };
}

export async function areFriends(userId1: string, userId2: string): Promise<boolean> {
  const db = await getDatabase();
  const friendship = await db.get(
    `SELECT 1 FROM friendships 
     WHERE (user_id_1 = ? AND user_id_2 = ?)
     OR (user_id_1 = ? AND user_id_2 = ?)`,
    userId1,
    userId2,
    userId2,
    userId1
  );
  return !!friendship;
}

export async function addFriendship(userId1: string, userId2: string): Promise<boolean> {
  const db = await getDatabase();
  const now = new Date().toISOString();

  try {
    // Check if friendship already exists
    const alreadyFriends = await areFriends(userId1, userId2);
    if (alreadyFriends) {
      return false;
    }

    await db.run(
      `INSERT INTO friendships (user_id_1, user_id_2, created_at)
       VALUES (?, ?, ?)`,
      userId1,
      userId2,
      now
    );
    return true;
  } catch (error) {
    console.error("Error adding friendship:", error);
    return false;
  }
}

export async function getFriends(userId: string): Promise<User[]> {
  const db = await getDatabase();

  const friends = await db.all(
    `SELECT u.* FROM users u
     INNER JOIN friendships f 
     ON (f.user_id_1 = ? AND f.user_id_2 = u.user_id)
     OR (f.user_id_2 = ? AND f.user_id_1 = u.user_id)`,
    userId,
    userId
  );

  return friends.map((friend) => ({
    uuid: friend.user_id,
    name: friend.user_name,
    totalScore: friend.total_score,
    currentStreak: friend.current_streak,
    highestStreak: friend.highest_streak,
    optIn: friend.opt_in === 1,
    lastQuizDate: friend.last_quiz_date,
    lastUpdated: friend.last_updated,
    shareClicks: friend.share_clicks,
    inviteCount: friend.invite_count,
  }));
}

export async function getFriendsLeaderboard(userId: string): Promise<User[]> {
  const db = await getDatabase();

  // First update stats for friends
  const friends = await getFriends(userId);
  for (const friend of friends) {
    await updateUserStats(friend.uuid);
  }

  // Get the updated leaderboard including the user and their friends
  const leaderboard = await db.all(
    `SELECT u.* FROM users u
     WHERE u.user_id = ?
     OR u.user_id IN (
       SELECT CASE 
         WHEN f.user_id_1 = ? THEN f.user_id_2
         ELSE f.user_id_1
       END
       FROM friendships f
       WHERE f.user_id_1 = ? OR f.user_id_2 = ?
     )
     ORDER BY u.current_streak DESC, u.total_score DESC`,
    userId,
    userId,
    userId,
    userId
  );

  return leaderboard.map((entry) => ({
    uuid: entry.user_id,
    name: entry.user_name,
    totalScore: entry.total_score,
    currentStreak: entry.current_streak,
    highestStreak: entry.highest_streak,
    optIn: entry.opt_in === 1,
    lastQuizDate: entry.last_quiz_date,
    lastUpdated: entry.last_updated,
    shareClicks: entry.share_clicks,
    inviteCount: entry.invite_count,
  }));
}
