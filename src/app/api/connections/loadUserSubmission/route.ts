import { NextResponse } from "next/server";
import { getConnectionsGameSubmission } from "@/db/database";

/**
 * GET /api/connections/loadUserSubmission
 * Returns a user's submission for a specific game
 * Query parameters:
 * - userId: string
 * - gameId: string
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const gameId = searchParams.get("gameId");

    if (!userId || !gameId) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const submission = await getConnectionsGameSubmission(userId, gameId);

    if (!submission) {
      return NextResponse.json({ error: "No submission found" }, { status: 404 });
    }

    return NextResponse.json(submission);
  } catch (error) {
    console.error("Error loading user submission:", error);
    return NextResponse.json({ error: "Failed to load user submission" }, { status: 500 });
  }
}
