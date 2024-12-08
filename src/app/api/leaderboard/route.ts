import { NextResponse } from "next/server";
import { getLeaderboard, getUser } from "@/db/database";

export async function GET(request: Request) {
  try {
    // Get UUID from query params if provided
    const { searchParams } = new URL(request.url);
    const uuid = searchParams.get("uuid");

    if (uuid) {
      // If UUID is provided, return specific user data
      const user = await getUser(uuid);
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      return NextResponse.json(user);
    }

    // Otherwise return full leaderboard
    const leaderboard = await getLeaderboard();
    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 });
  }
}
