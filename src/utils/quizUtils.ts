import quizzes from "@/data/quizzes";

export const isQuizAvailable = (quizId: number): boolean => {
  const quiz = quizzes.find((q) => q.id === quizId);
  if (!quiz || !quiz.released) return false;

  const currentTime = new Date();
  const releaseTime = new Date(quiz.timeOfRelease);
  return currentTime >= releaseTime;
};
