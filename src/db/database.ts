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
  await db.exec(schema);

  // Ensure the 'elapsed_time' column exists in the 'connection_game_submissions' table
  const columnAdded = await ensureColumnExists(
    "connection_game_submissions", // Table name
    "elapsed_time", // Column name
    "INTEGER" // Column type
  );

  console.log(`Column 'elapsed_time' added to 'connection_game_submissions' table: ${columnAdded}`);

  return db;
}

/**
 * Checks if a column exists in a table, creates it if it doesn't
 * @param tableName - Name of the table to check
 * @param columnName - Name of the column to check/create
 * @param columnType - SQLite type for the new column (e.g. 'TEXT', 'INTEGER')
 * @returns Promise resolving to true if column was created, false if it already existed
 */
export async function ensureColumnExists(tableName: string, columnName: string, columnType: string): Promise<boolean> {
  const db = await getDatabase();

  // Check if column exists
  const result = await db.get(`SELECT COUNT(*) as count FROM pragma_table_info(?) WHERE name = ?`, [tableName, columnName]);

  if (result.count === 0) {
    // Column doesn't exist, create it
    await db.run(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnType}`);
    return true;
  }

  return false;
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

/**
 * Retrieves a user's submission for a specific connections game
 * @param userId - The user's unique identifier
 * @param gameId - The game's unique identifier
 * @returns The user's submission data or null if not found
 */
export async function getConnectionsGameSubmission(userId: string, gameId: string) {
  const db = await getDatabase();
  const submission = await db.get(
    `SELECT user_selections, submission_time, elapsed_time, game_completed, strikes
         FROM connection_game_submissions
         WHERE user_id = ? AND game_id = ?`,
    [userId, gameId]
  );

  if (!submission) return null;

  return {
    attempts: JSON.parse(submission.user_selections),
    submissionTime: submission.submission_time,
    elapsedTime: submission.elapsed_time,
    completed: submission.game_completed === 1,
    strikes: submission.strikes,
  };
}

/**
 * Creates or updates a user's submission for a connections game
 * @param data - The submission data
 * @returns True if the operation was successful
 */
export async function saveConnectionsGameSubmission(data: { userId: string; gameId: string; attempts: string[][]; completed: boolean; strikes: number; elapsedTime?: number }) {
  const db = await getDatabase();
  const submissionTime = new Date().toISOString();

  try {
    // Check if submission exists
    const existing = await getConnectionsGameSubmission(data.userId, data.gameId);

    if (existing) {
      // Update existing submission
      await db.run(
        `UPDATE connection_game_submissions
                 SET user_selections = ?,
                     submission_time = ?,
                     game_completed = ?,
                     strikes = ?,
                     elapsed_time = ?
                 WHERE user_id = ? AND game_id = ?`,
        [JSON.stringify(data.attempts), submissionTime, data.completed ? 1 : 0, data.strikes, data.elapsedTime, data.userId, data.gameId]
      );
    } else {
      // Create new submission
      await db.run(
        `INSERT INTO connection_game_submissions
                 (user_id, game_id, user_selections, submission_time, elapsed_time, game_completed, strikes)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [data.userId, data.gameId, JSON.stringify(data.attempts), submissionTime, data.elapsedTime, data.completed ? 1 : 0, data.strikes]
      );
    }

    return true;
  } catch (error) {
    console.error("Error saving connections game submission:", error);
    return false;
  }
}

/**
 * Gets statistics for a specific connections game
 * @param gameId - The game's unique identifier
 * @returns Statistics about the game including strike distribution
 */
export async function getConnectionsGameStats(gameId: string) {
  const db = await getDatabase();

  // Get total submissions and completed games
  const totals = await db.get(
    `SELECT 
      COUNT(*) as total_submissions,
      SUM(CASE WHEN game_completed = 1 THEN 1 ELSE 0 END) as completed_games
     FROM connection_game_submissions
     WHERE game_id = ?`,
    [gameId]
  );

  // Get strike distribution
  const strikeDistribution = await db.all(
    `SELECT 
      strikes,
      COUNT(*) as count
     FROM connection_game_submissions
     WHERE game_id = ? AND game_completed = 1
     GROUP BY strikes
     ORDER BY strikes ASC`,
    [gameId]
  );

  return {
    totalSubmissions: totals.total_submissions,
    completedGames: totals.completed_games,
    strikeDistribution: strikeDistribution,
  };
}

/**
 * Gets all connections game submissions for a specific user
 * @param userId - The user's unique identifier
 * @returns Array of all the user's submissions for connections games
 */
export async function getAllConnectionsGameSubmissions(userId: string) {
  const db = await getDatabase();
  const submissions = await db.all(
    `SELECT 
      game_id as gameId,
      user_selections as userSelections,
      submission_time as submissionTime,
      elapsed_time as elapsedTime,
      game_completed as gameCompleted,
      strikes
     FROM connection_game_submissions
     WHERE user_id = ?`,
    [userId]
  );

  return submissions.map((sub) => ({
    gameId: sub.gameId,
    attempts: JSON.parse(sub.userSelections),
    submissionTime: sub.submissionTime,
    elapsedTime: sub.elapsedTime,
    completed: sub.gameCompleted === 1,
    strikes: sub.strikes,
  }));
}

/**
 * Subscribes a user's email to the mailing list
 * @param userId - The user's unique identifier
 * @param email - The email address to subscribe
 * @returns True if the operation was successful, false otherwise
 */
export async function subscribeEmail(userId: string, email: string): Promise<boolean> {
  const db = await getDatabase();
  const now = new Date().toISOString();

  try {
    // Check if email already exists
    const existingEmail = await db.get(`SELECT email_id, user_id, subscribed FROM emails WHERE email = ?`, [email]);

    if (existingEmail) {
      // Update existing email if it belongs to this user or is unsubscribed
      if (existingEmail.user_id === userId || !existingEmail.subscribed) {
        await db.run(
          `UPDATE emails 
           SET user_id = ?, subscribed = true, updated_at = ? 
           WHERE email_id = ?`,
          [userId, now, existingEmail.email_id]
        );
      } else {
        // Email belongs to another user and is subscribed
        return false;
      }
    } else {
      // Create new email subscription
      await db.run(
        `INSERT INTO emails (user_id, email, created_at) 
         VALUES (?, ?, ?)`,
        [userId, email, now]
      );
    }

    return true;
  } catch (error) {
    console.error("Error subscribing email:", error);
    return false;
  }
}

/**
 * Unsubscribes an email from the mailing list
 * @param email - The email address to unsubscribe
 * @returns True if the operation was successful, false otherwise
 */
export async function unsubscribeEmail(email: string): Promise<boolean> {
  const db = await getDatabase();
  const now = new Date().toISOString();

  try {
    const result = await db.run(
      `UPDATE emails 
       SET subscribed = false, updated_at = ? 
       WHERE email = ?`,
      [now, email]
    );

    return result && result.changes ? result.changes > 0 : false;
  } catch (error) {
    console.error("Error unsubscribing email:", error);
    return false;
  }
}

/**
 * Checks if a user is subscribed to the mailing list
 * @param userId - The user's unique identifier
 * @returns True if the user has a subscribed email, false otherwise
 */
export async function isUserSubscribed(userId: string): Promise<boolean> {
  const db = await getDatabase();

  try {
    const result = await db.get(
      `SELECT COUNT(*) as count 
       FROM emails 
       WHERE user_id = ? AND subscribed = true`,
      [userId]
    );

    return result.count > 0;
  } catch (error) {
    console.error("Error checking user subscription:", error);
    return false;
  }
}

/**
 * Gets a user's subscribed email
 * @param userId - The user's unique identifier
 * @returns The user's subscribed email address or null if not found
 */
export async function getUserEmail(userId: string): Promise<string | null> {
  const db = await getDatabase();

  try {
    const result = await db.get(
      `SELECT email 
       FROM emails 
       WHERE user_id = ? AND subscribed = true 
       ORDER BY created_at DESC LIMIT 1`,
      [userId]
    );

    return result ? result.email : null;
  } catch (error) {
    console.error("Error getting user email:", error);
    return null;
  }
}
