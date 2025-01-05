export interface LeaderboardEntry {
  uuid: string;
  name: string;
  totalScore: number;
  currentStreak: number;
  highestStreak: number;
  optIn: boolean;
  lastQuizDate?: string;
  lastUpdated: string;
  hasSyncedCachedScores?: boolean;
}

export interface User {
  uuid: string;
  name: string | null;
  totalScore: number;
  currentStreak: number;
  highestStreak: number;
  optIn: boolean;
  lastQuizDate?: string;
  lastUpdated: string;
  shareClicks: number;
  inviteCount: number;
  quizScore?: number;
  hasSyncedCachedScores?: boolean;
}

export interface UserSettings {
  uuid: string;
  hasSyncedCachedScores?: boolean;
}
