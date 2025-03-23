import { NextRequest, NextResponse } from "next/server";
import { isUserSubscribed, getUserEmail } from "@/db/database";

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });
    }

    const isSubscribed = await isUserSubscribed(userId);
    let email = null;

    if (isSubscribed) {
      // If the user is subscribed, also fetch the email
      email = await getUserEmail(userId);
    }

    return NextResponse.json({
      success: true,
      isSubscribed,
      email,
    });
  } catch (error) {
    console.error("Error checking subscription status:", error);
    return NextResponse.json({ success: false, message: "An error occurred while checking subscription status" }, { status: 500 });
  }
}
