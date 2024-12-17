import { Database, open } from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";
import fs from "fs/promises";
import { User } from "@/types/leaderboard";

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
  await db.exec(schema);

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

  let currentStreak = 0;
  let highestStreak = 0;
  let lastDate: Date | null = null;
  let tempStreak = 0;
  const today = new Date();

  // First pass - calculate highest streak from all submissions
  for (let i = 0; i < submissions.length - 1; i++) {
    const currentDate = new Date(submissions[i].submission_date);
    const nextDate = new Date(submissions[i + 1].submission_date);

    const dayDiff = Math.floor((currentDate.getTime() - nextDate.getTime()) / (1000 * 60 * 60 * 24));

    if (dayDiff === 1) {
      tempStreak++;
      highestStreak = Math.max(highestStreak, tempStreak + 1);
    } else {
      tempStreak = 0;
    }
  }

  // Second pass - calculate current streak
  lastDate = null;
  for (const submission of submissions) {
    const submissionDate = new Date(submission.submission_date);

    if (!lastDate) {
      // Check if first submission is from today or yesterday
      const daysSinceLastQuiz = Math.floor((today.getTime() - submissionDate.getTime()) / (1000 * 60 * 60 * 24));
      if (daysSinceLastQuiz <= 1) {
        currentStreak = 1;
      }
      lastDate = submissionDate;
      continue;
    }

    const dayDiff = Math.floor((lastDate.getTime() - submissionDate.getTime()) / (1000 * 60 * 60 * 24));

    if (dayDiff === 1) {
      currentStreak++;
    } else {
      break;
    }

    lastDate = submissionDate;
  }

  // Reset current streak if more than 1 day since last quiz
  if (lastDate) {
    const daysSinceLastQuiz = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
    if (daysSinceLastQuiz > 1) {
      currentStreak = 0;
    }
  }

  // Ensure highest streak is at least equal to current streak
  highestStreak = Math.max(highestStreak, currentStreak);

  // Update user stats
  await updateUser(userId, {
    totalScore,
    currentStreak,
    highestStreak,
    lastQuizDate: new Date().toISOString().split("T")[0],
  });
}

// Leaderboard operations
export async function getLeaderboard() {
  const db = await getDatabase();

  // Get all opted-in users
  const users = await db.all(`SELECT user_id FROM users WHERE opt_in = true`);

  // Update stats for all users
  for (const user of users) {
    await updateUserStats(user.user_id);
  }

  // Return updated leaderboard
  return db.all(
    `SELECT user_id as uuid, user_name as name, total_score as totalScore, current_streak as currentStreak, highest_streak as highestStreak
         FROM users 
         WHERE opt_in = true 
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
export async function getQuizSubmissions(userId: string, quizId?: number) {
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
    selections: submission.selected_options ? submission.selected_options.split(",").map(Number) : [],
    submissionDate: submission.submission_date,
  }));
}
