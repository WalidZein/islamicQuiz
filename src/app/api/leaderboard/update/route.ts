import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { LeaderboardEntry } from "@/types/leaderboard";
import { setTimeout } from "timers/promises";

const LEADERBOARD_PATH = path.join(process.cwd(), "src/data/leaderboard.json");
// Create a simple lock mechanism
let isWriting = false;
/**
 * Ensures the leaderboard.json file exists, creates it if it doesn't
 * @returns {Promise<void>}
 */
async function ensureLeaderboardFile() {
  try {
    await fs.access(LEADERBOARD_PATH);
  } catch {
    await fs.mkdir(path.dirname(LEADERBOARD_PATH), { recursive: true });
    await fs.writeFile(LEADERBOARD_PATH, "[]");
  }
}

/**
 * Checks if a streak has expired and should be reset
 * @param {LeaderboardEntry} entry - The user's leaderboard entry
 * @returns {number} The current streak (0 if expired)
 */
function checkStreakExpiry(entry: LeaderboardEntry): number {
  if (!entry.lastQuizDate) return 0;

  const lastDate = new Date(entry.lastQuizDate);
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  // If last quiz was more than 2 days ago, streak is expired
  return lastDate < twoDaysAgo ? 0 : entry.currentStreak;
}

/**
 * Updates streak when a quiz is completed
 * @param {LeaderboardEntry} entry - The user's leaderboard entry
 * @returns {{ currentStreak: number; highestStreak: number }}
 */
function updateStreak(entry: LeaderboardEntry): { currentStreak: number; highestStreak: number } {
  const today = new Date().toISOString().split("T")[0];
  const lastQuizDate = entry.lastQuizDate;
  let { currentStreak, highestStreak } = entry;

  if (!lastQuizDate) {
    return { currentStreak: 1, highestStreak: 1 };
  }

  if (lastQuizDate === today) {
    // Already completed a quiz today
    return { currentStreak, highestStreak };
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  if (lastQuizDate === yesterdayStr) {
    // Completed yesterday, increment streak
    currentStreak++;
    highestStreak = Math.max(currentStreak, highestStreak);
  } else {
    // Streak broken
    currentStreak = 1;
  }

  return { currentStreak, highestStreak };
}

// Create a helper function for safe file writing
async function safeWriteFile(data: LeaderboardEntry[]) {
  while (isWriting) {
    await setTimeout(100); // Wait 100ms if another write is in progress
  }

  isWriting = true;
  try {
    await fs.writeFile(LEADERBOARD_PATH, JSON.stringify(data, null, 2));
  } finally {
    isWriting = false;
  }
}

/**
 * Handles POST requests to update user's leaderboard entry
 * @param {Request} request - The incoming request object
 * @returns {Promise<NextResponse>} JSON response with updated user entry
 */
export async function POST(request: Request) {
  try {
    const { uuid, name, score, optIn, isQuizSubmission } = await request.json();

    await ensureLeaderboardFile();

    let leaderboard: LeaderboardEntry[] = [];
    try {
      const fileContent = await fs.readFile(LEADERBOARD_PATH, "utf-8");
      leaderboard = JSON.parse(fileContent);
    } catch (error) {
      console.error("Error reading leaderboard:", error);
    }

    const existingEntryIndex = leaderboard.findIndex((entry) => entry.uuid === uuid);
    const now = new Date().toISOString();

    if (existingEntryIndex !== -1) {
      const existingEntry = leaderboard[existingEntryIndex];

      // Only update streak and lastQuizDate if this is a quiz submission
      const streakInfo = isQuizSubmission ? updateStreak(existingEntry) : { currentStreak: existingEntry.currentStreak, highestStreak: existingEntry.highestStreak };

      leaderboard[existingEntryIndex] = {
        ...existingEntry,
        name: name || existingEntry.name,
        totalScore: existingEntry.totalScore + (score || 0),
        currentStreak: streakInfo.currentStreak,
        highestStreak: streakInfo.highestStreak,
        optIn,
        ...(isQuizSubmission && { lastQuizDate: now.split("T")[0] }),
        lastUpdated: now,
      };
    } else {
      leaderboard.push({
        uuid,
        name: name || "Anonymous",
        totalScore: score || 0,
        currentStreak: isQuizSubmission ? 1 : 0,
        highestStreak: isQuizSubmission ? 1 : 0,
        optIn,
        ...(isQuizSubmission && { lastQuizDate: now.split("T")[0] }),
        lastUpdated: now,
      });
    }

    // Sort by current streak first, then by highest streak, then by total score
    leaderboard.sort((a, b) => {
      if (b.currentStreak !== a.currentStreak) {
        return b.currentStreak - a.currentStreak;
      }
      if (b.highestStreak !== a.highestStreak) {
        return b.highestStreak - a.highestStreak;
      }
      return b.totalScore - a.totalScore;
    });

    await safeWriteFile(leaderboard);
    return NextResponse.json(leaderboard.find((entry) => entry.uuid === uuid) || null);
  } catch (error) {
    console.error("Error updating leaderboard:", error);
    return NextResponse.json({ error: "Failed to update leaderboard" }, { status: 500 });
  }
}

/**
 * Handles GET requests to fetch leaderboard data
 * @param {Request} request - The incoming request object
 * @returns {Promise<NextResponse>} JSON response with leaderboard data
 */
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const uuid = url.searchParams.get("uuid");

    await ensureLeaderboardFile();
    const fileContent = await fs.readFile(LEADERBOARD_PATH, "utf-8");
    let leaderboard: LeaderboardEntry[] = JSON.parse(fileContent);

    // Check and update streaks for all entries
    let needsUpdate = false;
    leaderboard = leaderboard.map((entry) => {
      const currentStreak = checkStreakExpiry(entry);
      if (currentStreak !== entry.currentStreak) {
        needsUpdate = true;
        return { ...entry, currentStreak };
      }
      return entry;
    });

    // Save if any streaks were updated
    if (needsUpdate) {
      await safeWriteFile(leaderboard);
    }

    if (uuid) {
      // Return specific user's entry
      return NextResponse.json(leaderboard.find((entry) => entry.uuid === uuid) || null);
    }

    // Return only opted-in entries for leaderboard display
    return NextResponse.json(leaderboard.filter((entry) => entry.optIn));
  } catch (error) {
    console.error("Error reading leaderboard:", error);
    return NextResponse.json([], { status: 200 });
  }
}
