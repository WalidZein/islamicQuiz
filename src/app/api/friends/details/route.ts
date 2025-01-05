import { NextRequest, NextResponse } from "next/server";
import { getUserByInviteCode } from "@/db/database";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const inviteCode = searchParams.get("code");

    if (!inviteCode) {
      return NextResponse.json({ error: "Invite code is required" }, { status: 400 });
    }

    // Get the user who created the invite
    const invitingUser = await getUserByInviteCode(inviteCode);

    if (!invitingUser) {
      return NextResponse.json({ error: "Invalid invite code" }, { status: 404 });
    }

    return NextResponse.json({ friend: invitingUser });
  } catch (error) {
    console.error("Error getting invite details:", error);
    return NextResponse.json({ error: "Failed to get invite details" }, { status: 500 });
  }
}
