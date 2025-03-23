import { getGameById } from "@/data/gameData";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/connections/getGame?id=<id>
 * Returns a specific Connections game by ID
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Game ID is required" }, { status: 400 });
  }

  const game = getGameById(id);

  if (!game) {
    return NextResponse.json({ error: "Game not found" }, { status: 404 });
  }

  return NextResponse.json(game);
}
