import { useEffect, useReducer } from "react";
import { Quiz, QuizStatus } from "../types/quiz";

interface QuizState {
  currentQuestionIndex: number;
  selectedOptionIndex: number | null;
  showExplanation: boolean;
  score: number;
  quizCompleted: boolean;
  selections: number[];
  finalQuestion: boolean;
}

type QuizAction =
  | { type: "SELECT_OPTION"; payload: number }
  | { type: "SHOW_EXPLANATION" }
  | { type: "NEXT_QUESTION" }
  | { type: "COMPLETE_QUIZ" }
  | { type: "LOAD_SAVED_STATUS"; payload: QuizStatus }
  | { type: "INCREMENT_SCORE" }
  | { type: "FINAL_QUESTION" };

const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedOptionIndex: null,
  showExplanation: false,
  score: 0,
  quizCompleted: false,
  selections: [],
  finalQuestion: false,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SELECT_OPTION":
      return {
        ...state,
        selectedOptionIndex: action.payload,
        selections: [...state.selections, action.payload],
        showExplanation: true,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedOptionIndex: null,
        showExplanation: false,
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
    case "LOAD_SAVED_STATUS":
      return {
        ...state,
        score: action.payload.score,
        selections: action.payload.selections,
        quizCompleted: action.payload.completed,
      };
    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return state;
  }
}

export function useQuizStatus(quiz: Quiz) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("quizStatus") || "{}") as {
      [key: number]: QuizStatus;
    };
    const quizStatus = storedData[quiz.id];

    if (quizStatus?.completed) {
      dispatch({ type: "LOAD_SAVED_STATUS", payload: quizStatus });
    }
  }, [quiz.id]);

  useEffect(() => {
    if (state.quizCompleted) {
      const storedData = JSON.parse(localStorage.getItem("quizStatus") || "{}") as {
        [key: number]: QuizStatus;
      };
      storedData[quiz.id] = {
        completed: true,
        score: state.score,
        selections: state.selections,
      };
      localStorage.setItem("quizStatus", JSON.stringify(storedData));
    }
  }, [state.quizCompleted, quiz.id, state.score, state.selections]);

  return { state, dispatch };
}
