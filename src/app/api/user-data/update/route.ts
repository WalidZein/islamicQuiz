import { NextResponse } from "next/server";
import { getUser, updateUser } from "@/db/database";

export async function POST(request: Request) {
  try {
    const { uuid } = await request.json();

    if (!uuid) {
      return NextResponse.json({ error: "UUID is required" }, { status: 400 });
    }

    const user = await getUser(uuid);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Increment share clicks
    await updateUser(uuid, {
      shareClicks: (user.shareClicks || 0) + 1,
    });

    const updatedUser = await getUser(uuid);
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating user data:", error);
    return NextResponse.json({ error: "Failed to update user data" }, { status: 500 });
  }
}
