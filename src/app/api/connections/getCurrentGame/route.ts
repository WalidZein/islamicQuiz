import { NextResponse } from "next/server";
import { getCurrentGame } from "@/data/gameData";

/**
 * GET /api/connections/getCurrentGame
 * Returns the current active connections game
 */
export async function GET() {
  try {
    const game = getCurrentGame();

    if (!game) {
      return NextResponse.json({ error: "No active game found" }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error("Error fetching current game:", error);
    return NextResponse.json({ error: "Failed to fetch current game" }, { status: 500 });
  }
}
