import { NextRequest, NextResponse } from "next/server";
import { subscribeEmail } from "@/db/database";

export async function POST(request: NextRequest) {
  try {
    const { userId, email } = await request.json();

    if (!userId || !email) {
      return NextResponse.json({ success: false, message: "User ID and email are required" }, { status: 400 });
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Invalid email format" }, { status: 400 });
    }

    const success = await subscribeEmail(userId, email);

    if (success) {
      return NextResponse.json({ success: true, message: "Email subscribed successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Email is already subscribed with another account" }, { status: 409 });
    }
  } catch (error) {
    console.error("Error subscribing email:", error);
    return NextResponse.json({ success: false, message: "An error occurred while subscribing" }, { status: 500 });
  }
}
