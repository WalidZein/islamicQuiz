import { getAllReleasedGames } from "@/data/gameData";
import { NextResponse } from "next/server";

/**
 * GET /api/connections/getAllGames
 * Returns all released connections games
 */
export async function GET() {
  const games = getAllReleasedGames();
  return NextResponse.json(games);
}
