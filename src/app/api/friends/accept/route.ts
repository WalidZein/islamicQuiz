import { NextResponse } from "next/server";
import { getUserByInviteCode, addFriendship, areFriends } from "@/db/database";

export async function POST(request: Request) {
  try {
    const { inviteCode, userId } = await request.json();

    if (!inviteCode || !userId) {
      return NextResponse.json({ error: "Invite code and user ID are required" }, { status: 400 });
    }

    const invitingUser = await getUserByInviteCode(inviteCode);
    if (!invitingUser) {
      return NextResponse.json({ error: "Invalid invite code" }, { status: 404 });
    }

    // Don't allow self-friending
    if (invitingUser.uuid === userId) {
      return NextResponse.json({ error: "Cannot add yourself as a friend" }, { status: 400 });
    }

    // Check if already friends
    const alreadyFriends = await areFriends(invitingUser.uuid, userId);
    if (alreadyFriends) {
      return NextResponse.json({ error: "You are already friends with this user" }, { status: 400 });
    }

    const success = await addFriendship(invitingUser.uuid, userId);
    if (!success) {
      return NextResponse.json({ error: "Failed to add friendship" }, { status: 500 });
    }

    return NextResponse.json({ success: true, friend: invitingUser });
  } catch (error) {
    console.error("Error accepting friend invite:", error);
    return NextResponse.json({ error: "Failed to accept friend invite" }, { status: 500 });
  }
}
