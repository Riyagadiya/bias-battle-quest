
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questionData } from "../data/quizData";
import { QuizContextType, defaultContextValue } from "./QuizContextType";
import { Question, QuizAnswer } from "../types/quiz";

// Create the Quiz Context
export const QuizContext = createContext<QuizContextType>(defaultContextValue);

// Re-export the useQuiz hook to maintain backward compatibility
export { useQuiz } from "../hooks/useQuizContext";

// Quiz Provider Component
export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<"idle" | "active" | "complete">("idle");
  const [percentCorrect, setPercentCorrect] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const timePerQuestion = 15; // Time per question in seconds
  const navigate = useNavigate();

  // For compatibility with existing components
  const setCurrentQuestionIndex = setCurrentQuestion;

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
    setQuizStarted(true);
    setQuizCompleted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetQuiz = () => {
    setStatus("idle");
    setCurrentQuestion(0);
    setScore(0);
    setAnswers(Array(questions.length).fill(null));
    setQuizStarted(false);
    setQuizCompleted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Alias for resetQuiz to match component expectations
  const restartQuiz = resetQuiz;

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
        setQuizCompleted(true);
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
      setQuizCompleted(true);
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
    timePerQuestion,
    setSelectedOption,
    quizStarted,
    quizCompleted,
    setQuizCompleted,
    setCurrentQuestionIndex,
    setScore,
    setAnswers,
    restartQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
