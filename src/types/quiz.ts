export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: number;
  seasonId: number;
  released: boolean;
  timeOfRelease: string;
  questions: Question[];
}

export interface QuizStatus {
  completed: boolean;
  score: number;
  selections: number[];
}
