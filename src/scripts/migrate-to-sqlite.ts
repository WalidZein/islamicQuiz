import fs from "fs/promises";
import path from "path";
import { initializeDatabase, createUser, updateUser } from "../db/database";

interface LeaderboardEntry {
  uuid: string;
  name: string;
  totalScore: number;
  currentStreak: number;
  highestStreak: number;
  optIn: boolean;
  lastQuizDate?: string;
  lastUpdated?: string;
}

interface UserData {
  [uuid: string]: {
    shareClicks?: number;
    inviteCount?: number;
  };
}

async function migrateData() {
  try {
    // Initialize database
    await initializeDatabase();

    // Read JSON files
    const leaderboardPath = path.join(process.cwd(), "src/data/leaderboard.json");
    const userDataPath = path.join(process.cwd(), "src/data/userData.json");

    const leaderboardContent = await fs.readFile(leaderboardPath, "utf-8");
    const userDataContent = await fs.readFile(userDataPath, "utf-8");

    const leaderboard: LeaderboardEntry[] = JSON.parse(leaderboardContent);
    const userData: UserData = JSON.parse(userDataContent);

    // Migrate each user
    for (const entry of leaderboard) {
      try {
        if (entry.name == "Anonymous") {
          entry.name = "";
        }
        // Try to create user, if it fails (already exists), just continue
        await createUser(entry.uuid, entry.name, entry.optIn);
      } catch (error) {
        console.log(`User ${entry.uuid} already exists, updating stats only...`);
      }

      // Update user stats regardless
      const userStats = userData[entry.uuid] || {};
      await updateUser(entry.uuid, {
        totalScore: entry.totalScore,
        currentStreak: entry.currentStreak,
        highestStreak: entry.highestStreak,
        lastQuizDate: entry.lastQuizDate,
        shareClicks: userStats.shareClicks || 0,
        inviteCount: userStats.inviteCount || 0,
      });
    }

    console.log("Migration completed successfully!");

    // Backup old JSON files
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    await fs.rename(leaderboardPath, path.join(process.cwd(), `src/data/leaderboard.backup.${timestamp}.json`));
    await fs.rename(userDataPath, path.join(process.cwd(), `src/data/userData.backup.${timestamp}.json`));

    console.log("Old JSON files backed up with timestamp:", timestamp);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

// Run migration
migrateData();
