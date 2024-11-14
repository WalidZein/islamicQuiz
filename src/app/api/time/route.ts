import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    currentTime: new Date().toISOString(),
  });
}
