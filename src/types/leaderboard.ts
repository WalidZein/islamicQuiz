export interface LeaderboardEntry {
  uuid: string;
  name: string;
  totalScore: number;
  optIn: boolean;
}

export interface UserSettings {
  uuid: string;
  name: string | null;
  optIn: boolean;
}
