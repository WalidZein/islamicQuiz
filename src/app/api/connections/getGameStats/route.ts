import { NextResponse } from "next/server";
import { getConnectionsGameStats } from "@/db/database";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameId = searchParams.get("gameId");

  if (!gameId) {
    return NextResponse.json({ error: "Game ID is required" }, { status: 400 });
  }

  try {
    const stats = await getConnectionsGameStats(gameId);
    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching game stats:", error);
    return NextResponse.json({ error: "Failed to fetch game statistics" }, { status: 500 });
  }
}
