import { Season } from "@/data/seasons";

export const getCurrentSeason = (seasons: Season[], time: string): Season | null => {
  const now = new Date(time);
  return (
    seasons.find((season) => {
      const startDate = new Date(season.startDate);
      const endDate = new Date(season.endDate);
      return now >= startDate && now <= endDate;
    }) || null
  ); // Default to latest season if no current season found
};

export const getQuizzesBySeason = (quizzes: any[], seasonId: number) => {
  return quizzes.filter((quiz) => quiz.seasonId === seasonId);
};
