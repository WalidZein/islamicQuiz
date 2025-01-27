export interface ConnectionsGroupData {
  category: string;
  words: string[];
  difficulty: "Easy" | "Medium" | "Hard" | "Very Hard";
}

export interface ConnectionsGameData {
  id: string;
  date: string;
  groups: ConnectionsGroupData[];
}

export interface ConnectionsGameState {
  selectedWords: string[];
  solvedGroups: ConnectionsGroupData[];
  remainingWords: string[];
  strikes: number;
  gameCompleted: boolean;
  isWon: boolean;
  attempts: string[][];
}

export interface ConnectionsGameSubmission {
  puzzleId: string;
  completed: boolean;
  strikes: number;
  solvedGroups: string[];
  submissionDate: string;
  isWon: boolean;
  attempts: string[][];
}

export interface ConnectionsGameConfig {
  id: string;
  releaseTime: string;
  groups: ConnectionsGroupData[];
  title?: string;
  description?: string;
}

export interface ConnectionsUserGameState {
  gameId: string;
  attempts: string[][];
  lastUpdated: Date;
  completed: boolean;
  strikes: number;
}

export interface ConnectionsGameSubmissionData {
  userId: string;
  gameId: string;
  attempts: string[][];
  submissionTime: Date;
  completed: boolean;
  strikes: number;
  elapsedTime: number;
}
