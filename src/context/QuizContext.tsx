import React, { createContext, useContext, useState, ReactNode } from "react";
import { quizQuestions, QuizQuestion } from "@/data/questions";

type QuizStatus = "idle" | "active" | "complete";

interface QuizAnswer {
  questionId: number;
  selectedOption: number | null;
  isCorrect: boolean;
}

interface QuizContextType {
  status: QuizStatus;
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  answers: QuizAnswer[];
  score: number;
  timeLeft: number;
  startQuiz: () => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  selectAnswer: (optionIndex: number) => void;
  skipQuestion: () => void;
  restartQuiz: () => void;
  setTimeLeft: (time: number) => void;
  timePerQuestion: number;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<QuizStatus>("idle");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const timePerQuestion = 30;

  const startQuiz = () => {
    setStatus("active");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTimeLeft(30);
  };

  const selectAnswer = (optionIndex: number) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    
    setAnswers((prev) => {
      const existingAnswerIndex = prev.findIndex(
        (answer) => answer.questionId === currentQuestion.id
      );
      
      if (existingAnswerIndex >= 0) {
        const newAnswers = [...prev];
        newAnswers[existingAnswerIndex] = {
          questionId: currentQuestion.id,
          selectedOption: optionIndex,
          isCorrect,
        };
        return newAnswers;
      } else {
        return [
          ...prev,
          {
            questionId: currentQuestion.id,
            selectedOption: optionIndex,
            isCorrect,
          },
        ];
      }
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(30);
    } else {
      setStatus("complete");
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setTimeLeft(30);
    }
  };

  const skipQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    setAnswers((prev) => {
      const existingAnswerIndex = prev.findIndex(
        (answer) => answer.questionId === currentQuestion.id
      );
      
      if (existingAnswerIndex >= 0) {
        return prev;
      } else {
        return [
          ...prev,
          {
            questionId: currentQuestion.id,
            selectedOption: null,
            isCorrect: false,
          },
        ];
      }
    });
    
    goToNextQuestion();
  };

  const restartQuiz = () => {
    setStatus("idle");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const score = answers.filter((answer) => answer.isCorrect).length;

  const value = {
    status,
    questions: quizQuestions,
    currentQuestionIndex,
    answers,
    score,
    timeLeft,
    timePerQuestion,
    startQuiz,
    goToNextQuestion,
    goToPreviousQuestion,
    selectAnswer,
    skipQuestion,
    restartQuiz,
    setTimeLeft,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
