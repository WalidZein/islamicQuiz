export interface LeaderboardEntry {
  uuid: string;
  name: string;
  totalScore: number;
  currentStreak: number;
  highestStreak: number;
  optIn: boolean;
  lastQuizDate?: string;
  lastUpdated: string;
}

export interface UserSettings {
  uuid: string;
  name: string | null;
  optIn: boolean;
}
