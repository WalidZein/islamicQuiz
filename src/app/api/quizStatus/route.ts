import { NextResponse } from "next/server";
import { getQuizSubmissions } from "@/db/database";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const uuid = searchParams.get("uuid");
    const quizId = searchParams.get("quizId");

    if (!uuid) {
      return NextResponse.json({ error: "Missing required field: uuid" }, { status: 400 });
    }

    // Get quiz submissions
    const submissions = await getQuizSubmissions(uuid, quizId ? parseInt(quizId) : undefined);

    // Transform submissions into a map of quiz statuses
    const quizStatuses = submissions.reduce((acc, submission) => {
      acc[submission.quizId] = {
        completed: submission.completed,
        score: submission.score,
        selections: submission.selections,
        submissionDate: submission.submissionDate,
      };
      return acc;
    }, {} as { [key: number]: any });

    return NextResponse.json(quizStatuses);
  } catch (error) {
    console.error("Error fetching quiz status:", error);
    return NextResponse.json({ error: "Failed to fetch quiz status" }, { status: 500 });
  }
}
