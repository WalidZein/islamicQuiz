import { QuestionType, Quiz, QuizStatus } from "@/types/quiz";
import { getUserSettings } from "./userManager";
import quizzes from "@/data/quizzes";
import { User } from "@/types/leaderboard";

export const isQuizAvailable = (quizId: number): boolean => {
  const quiz = quizzes.find((q) => q.id === quizId);
  if (!quiz || !quiz.released) return false;

  const currentTime = new Date();
  const releaseTime = new Date(quiz.timeOfRelease);
  return currentTime >= releaseTime;
};

export function isQuizLocked(quiz: Quiz, quizzes: Quiz[], completed?: boolean, userData?: User | null, forceLock: boolean = false): boolean {
  return false; // leaving all quizzes unlocked for now
  if (forceLock) return true;

  const inviteCount = userData?.inviteCount || 0;

  // Quiz is unlocked if:
  // 1. It's the latest quiz
  // 2. It's already completed
  // 3. User has invited 3+ friends
  return !(quiz.id === quizzes[quizzes.length - 1].id || completed || inviteCount >= 1);
}

export function calculateQuizPercentage(quiz: Quiz, status: QuizStatus): number {
  let totalPoints = 0;
  let earnedPoints = 0;

  quiz.questions.forEach((question, index) => {
    const isMultiSelect = question.type === QuestionType.MULTI;
    const userSelection = status.selections[index] || [];

    if (isMultiSelect) {
      // For multi-select: +1 for each correct, -1 for each incorrect, minimum 0
      let questionPoints = 0;

      // Add points for correct selections
      userSelection.forEach((selected) => {
        if (question.correctAnswerIndex.includes(selected)) {
          questionPoints++;
        } else {
          questionPoints--;
        }
      });

      // Cap at minimum of 0
      earnedPoints += Math.max(0, questionPoints);
      // Total possible points is the number of correct answers
      totalPoints += question.correctAnswerIndex.length;
    } else {
      // For single-select: 1 point if correct
      const isCorrect = userSelection.length === 1 && question.correctAnswerIndex.includes(userSelection[0]);
      earnedPoints += isCorrect ? 1 : 0;
      totalPoints += 1;
    }
  });

  // Calculate percentage, handle division by zero
  return totalPoints === 0 ? 0 : (earnedPoints / totalPoints) * 100;
}
