
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { questions } from '../data/questions';

export interface QuizContextType {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  answers: Record<number, string>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<number, string>>>;
  quizStarted: boolean;
  setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
  quizCompleted: boolean;
  setQuizCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOption: string | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
  timePerQuestion: number;
  status: string;
  startQuiz: () => void;
  restartQuiz: () => void;
  questions: any[];
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timePerQuestion] = useState(30);
  const [status, setStatus] = useState<string>("initial"); // initial, active, complete

  // Add startQuiz and restartQuiz functions
  const startQuiz = () => {
    setQuizStarted(true);
    setStatus("active");
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers({});
    setQuizCompleted(false);
    setSelectedOption(null);
    setQuizStarted(true);
    setStatus("active");
  };

  const value = {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    score,
    setScore,
    answers,
    setAnswers,
    quizStarted,
    setQuizStarted,
    quizCompleted,
    setQuizCompleted,
    selectedOption,
    setSelectedOption,
    timePerQuestion,
    status,
    startQuiz,
    restartQuiz,
    questions,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
