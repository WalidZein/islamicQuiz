import { useEffect, useReducer } from "react";
import { Quiz, QuizStatus } from "../types/quiz";

interface QuizState {
  currentQuestionIndex: number;
  selectedOptionIndex: number[];
  showExplanation: boolean;
  score: number;
  quizCompleted: boolean;
  selections: number[][];
  finalQuestion: boolean;
  existingSubmission?: boolean;
  questionSubmitted: boolean;
}

type QuizAction =
  | { type: "SELECT_OPTION"; payload: number[] }
  | { type: "TOGGLE_OPTION"; payload: number }
  | { type: "TOGGLE_MULTI_OPTION"; payload: number }
  | { type: "SHOW_EXPLANATION" }
  | { type: "NEXT_QUESTION" }
  | { type: "COMPLETE_QUIZ" }
  | { type: "LOAD_SUBMISSION"; payload: QuizStatus }
  | { type: "INCREMENT_SCORE"; payload?: number }
  | { type: "FINAL_QUESTION" }
  | { type: "QUESTION_SUBMIT" };

const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedOptionIndex: [],
  showExplanation: false,
  score: 0,
  quizCompleted: false,
  selections: [],
  finalQuestion: false,
  questionSubmitted: false,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SELECT_OPTION":
      return {
        ...state,
        selectedOptionIndex: action.payload,
        selections: [...state.selections, action.payload],
        showExplanation: false,
      };
    case "TOGGLE_OPTION":
      return {
        ...state,
        selectedOptionIndex: state.selectedOptionIndex.includes(action.payload) ? state.selectedOptionIndex.filter((i) => i !== action.payload) : [action.payload],
      };
    case "TOGGLE_MULTI_OPTION":
      const currentSelection = (state.selectedOptionIndex as number[]) || [];
      const newSelection = currentSelection.includes(action.payload) ? currentSelection.filter((i) => i !== action.payload) : [...currentSelection, action.payload].sort();
      return {
        ...state,
        selectedOptionIndex: newSelection,
      };
    case "QUESTION_SUBMIT":
      return {
        ...state,
        questionSubmitted: true,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedOptionIndex: [],
        showExplanation: false,
        questionSubmitted: false,
      };
    case "FINAL_QUESTION":
      return {
        ...state,
        finalQuestion: true,
      };
    case "COMPLETE_QUIZ":
      return {
        ...state,
        quizCompleted: true,
      };
    case "LOAD_SUBMISSION":
      return {
        ...state,
        score: action.payload.score,
        selections: action.payload.selections,
        quizCompleted: action.payload.completed,
        currentQuestionIndex: action.payload.selections.length - 1,
        existingSubmission: true,
      };
    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + (action.payload || 1),
      };
    case "SHOW_EXPLANATION":
      return {
        ...state,
        showExplanation: true,
      };
    default:
      return state;
  }
}

export function useQuizStatus(quiz: Quiz) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return { state, dispatch };
}
