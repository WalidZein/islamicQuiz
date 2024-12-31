import { NextResponse } from "next/server";
import { createQuizSubmission, getOrCreateUser } from "@/db/database";

export async function POST(request: Request) {
  try {
    const { uuid, quizId, score, selectedOptions } = await request.json();

    if (!uuid || quizId === undefined || score === undefined) {
      return NextResponse.json({ error: "Missing required fields: uuid, quizId, score" }, { status: 400 });
    }

    // Convert selectedOptions array to comma-separated string if provided. MultiSelect options are seperated by ;
    const selectedOptionsString = selectedOptions ? selectedOptions.map((arr: number[]) => arr.join(";")).join(",") : "";

    // Get or create user before submitting quiz
    const user = await getOrCreateUser(uuid);

    // Create quiz submission
    await createQuizSubmission(uuid, quizId, score, selectedOptionsString);

    // Return updated user data
    const updatedUser = await getOrCreateUser(uuid);
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error submitting quiz:", error);
    return NextResponse.json({ error: "Failed to submit quiz" }, { status: 500 });
  }
}
