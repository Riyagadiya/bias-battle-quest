
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Question } from '../data/questions';

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
  timePerQuestion: number; // Added missing property
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timePerQuestion] = useState(30); // Set to 30 seconds as requested

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
