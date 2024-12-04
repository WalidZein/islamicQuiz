import { Quiz } from "@/types/quiz";
import { getUserSettings } from "./userManager";
import quizzes from "@/data/quizzes";
import { UserStats } from "./userDataStore";

export const isQuizAvailable = (quizId: number): boolean => {
  const quiz = quizzes.find((q) => q.id === quizId);
  if (!quiz || !quiz.released) return false;

  const currentTime = new Date();
  const releaseTime = new Date(quiz.timeOfRelease);
  return currentTime >= releaseTime;
};

export function isQuizLocked(quiz: Quiz, completed?: boolean, userData?: UserStats | null, forceLock: boolean = false): boolean {
  if (forceLock) return true;

  const inviteCount = userData?.inviteCount || 0;

  // Quiz is unlocked if:
  // 1. It's the latest quiz
  // 2. It's already completed
  // 3. User has invited 3+ friends
  return !(quiz.id === quizzes[quizzes.length - 1].id || completed || inviteCount >= 3);
}
