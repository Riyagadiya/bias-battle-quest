
import { Dispatch, SetStateAction } from "react";
import { Question, QuizStatus, QuizAnswer, QuestionResponse } from "../types/quiz";

// Define the type for the QuizContext
export type QuizContextType = {
  questions: Question[];
  currentQuestion: number;
  answers: QuizAnswer[];
  score: number;
  status: QuizStatus;
  percentCorrect: number;
  startQuiz: () => void;
  resetQuiz: () => void;
  handleAnswer: (answer: string, isCorrect: boolean) => void;
  goToNextQuestion: () => void;
  timePerQuestion: number;
  setSelectedOption: Dispatch<SetStateAction<string | null>>;
  quizStarted: boolean;
  quizCompleted: boolean;
  setQuizCompleted: Dispatch<SetStateAction<boolean>>;
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
  setAnswers: Dispatch<SetStateAction<QuizAnswer[]>>;
  restartQuiz: () => void;
  responses: QuestionResponse[];
};

// Default context values for safety
export const defaultContextValue: QuizContextType = {
  questions: [],
  currentQuestion: 0,
  answers: [],
  score: 0,
  status: "idle",
  percentCorrect: 0,
  startQuiz: () => {},
  resetQuiz: () => {},
  handleAnswer: () => {},
  goToNextQuestion: () => {},
  timePerQuestion: 30,
  setSelectedOption: () => {},
  quizStarted: false,
  quizCompleted: false,
  setQuizCompleted: () => {},
  setCurrentQuestionIndex: () => {},
  setScore: () => {},
  setAnswers: () => {},
  restartQuiz: () => {},
  responses: [],
};
