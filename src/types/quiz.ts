export interface Quiz {
  id: number;
  title?: string;
  questions: Question[];
}

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuizStatus {
  completed: boolean;
  score: number;
  selections: number[];
}
