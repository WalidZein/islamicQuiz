import { getAllConnectionsGameSubmissions } from "@/db/database";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/connections/loadAllUserSubmissions?userId=<userId>
 * Returns all connections game submissions for a specific user
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const submissions = await getAllConnectionsGameSubmissions(userId);
    return NextResponse.json(submissions);
  } catch (error) {
    console.error("Error loading user submissions:", error);
    return NextResponse.json({ error: "Failed to load user submissions" }, { status: 500 });
  }
}
