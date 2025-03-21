
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questionData } from "../data/questions";

type Question = {
  id: number;
  question: string;
  options: { text: string; isCorrect: boolean }[];
  explanation: string;
  type: string;
};

type QuizContextType = {
  questions: Question[];
  currentQuestion: number;
  answers: (string | null)[];
  score: number;
  status: "idle" | "active" | "complete";
  percentCorrect: number;
  startQuiz: () => void;
  resetQuiz: () => void;
  handleAnswer: (answer: string, isCorrect: boolean) => void;
  goToNextQuestion: () => void;
};

// Default context values
const defaultContextValue: QuizContextType = {
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
};

const QuizContext = createContext<QuizContextType>(defaultContextValue);

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<"idle" | "active" | "complete">("idle");
  const [percentCorrect, setPercentCorrect] = useState(0);
  const navigate = useNavigate();

  // Load questions
  useEffect(() => {
    setQuestions(questionData);
    // Initialize answers array with nulls based on question count
    setAnswers(Array(questionData.length).fill(null));
  }, []);

  const startQuiz = () => {
    setStatus("active");
    setCurrentQuestion(0);
    setScore(0);
    setAnswers(Array(questions.length).fill(null));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetQuiz = () => {
    setStatus("idle");
    setCurrentQuestion(0);
    setScore(0);
    setAnswers(Array(questions.length).fill(null));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnswer = (answer: string, isCorrect: boolean) => {
    // Update answers array
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    // Update score if correct
    if (isCorrect) {
      setScore(score + 1);
    }

    // Delay moving to next question or results to allow animation
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Calculate percentage correct
        const percent = Math.round((score / questions.length) * 100);
        setPercentCorrect(percent);
        setStatus("complete");
      }
    }, 1000);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate percentage correct
      const percent = Math.round((score / questions.length) * 100);
      setPercentCorrect(percent);
      setStatus("complete");
    }
  };

  const value = {
    questions,
    currentQuestion,
    answers,
    score,
    status,
    percentCorrect,
    startQuiz,
    resetQuiz,
    handleAnswer,
    goToNextQuestion,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
