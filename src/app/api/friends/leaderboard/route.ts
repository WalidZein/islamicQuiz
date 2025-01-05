import { NextResponse } from "next/server";
import { getFriendsLeaderboard } from "@/db/database";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const uuid = searchParams.get("uuid");
  const quizId = searchParams.get("quizId");

  if (!uuid) {
    return NextResponse.json({ error: "UUID is required" }, { status: 400 });
  }

  try {
    const leaderboard = await getFriendsLeaderboard(uuid, quizId ? parseInt(quizId) : undefined);
    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error("Error fetching friends leaderboard:", error);
    return NextResponse.json({ error: "Failed to fetch friends leaderboard" }, { status: 500 });
  }
}
