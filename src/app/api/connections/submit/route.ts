import { NextResponse } from "next/server";
import { getOrCreateUser, saveConnectionsGameSubmission } from "@/db/database";

/**
 * POST /api/connections/submit
 * Saves a user's connections game submission
 * Body parameters:
 * - userId: string
 * - gameId: string
 * - completed: boolean
 * - strikes: number
 * - attempts: string[][]
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, gameId, completed, strikes, attempts, elapsedTime } = body;

    if (!userId || !gameId || completed === undefined || strikes === undefined || !attempts) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }
    await getOrCreateUser(userId);

    const success = await saveConnectionsGameSubmission({
      userId,
      gameId,
      attempts,
      completed,
      strikes,
      elapsedTime,
    });

    if (!success) {
      return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting connections game:", error);
    return NextResponse.json({ error: "Failed to submit connections game" }, { status: 500 });
  }
}
