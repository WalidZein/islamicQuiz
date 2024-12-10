import { NextResponse } from "next/server";
import { getOrCreateUser, updateUser } from "@/db/database";

export async function POST(request: Request) {
  try {
    const { uuid, name, optIn, inviteCount, shareClicks } = await request.json();

    if (!uuid) {
      return NextResponse.json({ error: "UUID is required" }, { status: 400 });
    }

    // Get or create user first
    const user = await getOrCreateUser(uuid);

    // Update user data
    await updateUser(uuid, {
      ...(name && { name: name }),
      ...(optIn !== undefined && { optIn }),
      ...(shareClicks && { shareClicks: (user?.shareClicks || 0) + 1 }),
      ...(inviteCount && { inviteCount: (user?.inviteCount || 0) + 1 }),
    });

    // Return updated user data
    const updatedUser = await getOrCreateUser(uuid);
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}
