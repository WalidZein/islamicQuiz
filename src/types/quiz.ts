export interface Question {
  question: string;
  options: string[];
  type?: QuestionType;
  correctAnswerIndex: number[];
  explanation: string;
}

export enum QuestionType {
  SINGLE = 0,
  MULTI = 1,
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
  selections: number[][];
}
