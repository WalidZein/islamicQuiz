import { NextResponse } from "next/server";
import { generateInviteCode, getInviteCode } from "@/db/database";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const uuid = searchParams.get("uuid");

  if (!uuid) {
    return NextResponse.json({ error: "UUID is required" }, { status: 400 });
  }

  try {
    // First try to get existing code
    const existingCode = await getInviteCode(uuid);
    if (existingCode) {
      return NextResponse.json({ inviteCode: existingCode, isNew: false });
    }

    // Generate new code if none exists
    const newCode = await generateInviteCode(uuid);
    return NextResponse.json({ inviteCode: newCode, isNew: true });
  } catch (error) {
    console.error("Error with invite code:", error);
    return NextResponse.json({ error: "Failed to handle invite code" }, { status: 500 });
  }
}
