import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { setTimeout } from "timers/promises";
//TODO:: Create a file reading and writing class to consolidate the read/write
//functions from share-stats route and this route. Or move to sql :)
const STATS_PATH = path.join(process.cwd(), "src/data/userData.json");

// Share the same lock mechanisms pattern from leaderboard
let isWriting = false;
let readCount = 0;

interface ShareStats {
  [uuid: string]: {
    shareClicks: number;
  };
}

async function ensureStatsFile() {
  try {
    await fs.access(STATS_PATH);
  } catch {
    await fs.mkdir(path.dirname(STATS_PATH), { recursive: true });
    await fs.writeFile(STATS_PATH, "{}");
  }
}

async function safeWriteFile(data: ShareStats) {
  while (isWriting || readCount > 0) {
    await setTimeout(100);
  }

  isWriting = true;
  try {
    await fs.writeFile(STATS_PATH, JSON.stringify(data, null, 2));
  } finally {
    isWriting = false;
  }
}

async function safeReadFile(): Promise<ShareStats> {
  while (isWriting) {
    await setTimeout(100);
  }

  readCount++;
  try {
    const fileContent = await fs.readFile(STATS_PATH, "utf-8");
    return JSON.parse(fileContent);
  } finally {
    readCount--;
  }
}

export async function POST(request: Request) {
  try {
    const { uuid } = await request.json();

    if (!uuid) {
      return NextResponse.json({ error: "UUID is required" }, { status: 400 });
    }

    await ensureStatsFile();
    const stats = await safeReadFile();

    // Initialize or increment share clicks
    if (!stats[uuid]) {
      stats[uuid] = { shareClicks: 1 };
    } else {
      stats[uuid].shareClicks++;
    }

    await safeWriteFile(stats);
    return NextResponse.json(stats[uuid]);
  } catch (error) {
    console.error("Error updating share stats:", error);
    return NextResponse.json({ error: "Failed to update share stats" }, { status: 500 });
  }
}
