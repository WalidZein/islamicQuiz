import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { LeaderboardEntry } from "@/types/leaderboard";

const LEADERBOARD_PATH = path.join(process.cwd(), "src/app/leaderboard.json");

// Ensure leaderboard file exists
async function ensureLeaderboardFile() {
  try {
    await fs.access(LEADERBOARD_PATH);
  } catch {
    // Create directory if it doesn't exist
    await fs.mkdir(path.dirname(LEADERBOARD_PATH), { recursive: true });
    // Create empty leaderboard file
    await fs.writeFile(LEADERBOARD_PATH, "[]");
  }
}

export async function POST(request: Request) {
  try {
    const { uuid, name, score, optIn } = await request.json();

    // Ensure file exists before reading
    await ensureLeaderboardFile();

    // Read current leaderboard
    let leaderboard: LeaderboardEntry[] = [];
    try {
      const fileContent = await fs.readFile(LEADERBOARD_PATH, "utf-8");
      leaderboard = JSON.parse(fileContent);
    } catch (error) {
      console.error("Error reading leaderboard:", error);
      // Start with empty array if file is corrupted
    }

    // Update or add entry
    const existingEntryIndex = leaderboard.findIndex((entry) => entry.uuid === uuid);

    if (existingEntryIndex !== -1) {
      leaderboard[existingEntryIndex] = {
        ...leaderboard[existingEntryIndex],
        name,
        totalScore: leaderboard[existingEntryIndex].totalScore + score,
        optIn,
      };
    } else {
      leaderboard.push({
        uuid,
        name,
        totalScore: score,
        optIn,
      });
    }

    // Sort by score (highest first)
    leaderboard.sort((a, b) => b.totalScore - a.totalScore);

    // Save updated leaderboard
    await fs.writeFile(LEADERBOARD_PATH, JSON.stringify(leaderboard, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating leaderboard:", error);
    return NextResponse.json({ error: "Failed to update leaderboard" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Ensure file exists before reading
    await ensureLeaderboardFile();

    const fileContent = await fs.readFile(LEADERBOARD_PATH, "utf-8");
    const leaderboard: LeaderboardEntry[] = JSON.parse(fileContent);
    return NextResponse.json(leaderboard.filter((entry) => entry.optIn));
  } catch (error) {
    console.error("Error reading leaderboard:", error);
    return NextResponse.json([], { status: 200 });
  }
}
