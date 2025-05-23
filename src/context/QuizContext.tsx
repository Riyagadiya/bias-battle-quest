import React, { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { questionData, getRandomQuestions } from "../data/quizData";
import { QuizContextType, defaultContextValue } from "./QuizContextType";
import { Question, QuizAnswer, QuestionResponse } from "../types/quiz";
import { toast } from "sonner";

// Create the Quiz Context
export const QuizContext = createContext<QuizContextType>(defaultContextValue);

// Re-export the useQuiz hook to maintain backward compatibility
export { useQuiz } from "../hooks/useQuizContext";

// Quiz Provider Component
export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>(questionData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>(Array(10).fill(null));
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<"idle" | "active" | "complete">("idle");
  const [percentCorrect, setPercentCorrect] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [responses, setResponses] = useState<QuestionResponse[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const timePerQuestion = 30; // Increased time for scenario-based questions
  const navigate = useNavigate();

  // For compatibility with existing components
  const setCurrentQuestionIndex = setCurrentQuestion;
  
  // Debug log questions
  useEffect(() => {
    console.log("QuizProvider initialized with questions count:", questions.length);
    console.log("Sample question:", questions[0]);
  }, []);

  const startQuiz = useCallback(async () => {
    return new Promise<void>((resolve) => {
      // Get a new set of 10 random questions
      const newQuestions = getRandomQuestions(10);
      console.log("Starting quiz with questions:", newQuestions.length);
      
      setQuestions(newQuestions);
      setStatus("active");
      setCurrentQuestion(0);
      setScore(0);
      setAnswers(Array(10).fill(null));
      setResponses([]);
      setQuizStarted(true);
      setQuizCompleted(false);
      setStartTime(Date.now());
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      // Give time for state to update
      setTimeout(() => {
        console.log("Quiz started with questions:", newQuestions.length);
        resolve();
      }, 300);
    });
  }, []);

  const resetQuiz = () => {
    setStatus("idle");
    setCurrentQuestion(0);
    setScore(0);
    setAnswers(Array(10).fill(null));
    setResponses([]);
    setQuizStarted(false);
    setQuizCompleted(false);
    setStartTime(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Alias for resetQuiz to match component expectations
  const restartQuiz = resetQuiz;

  const handleAnswer = (answer: string, isCorrect: boolean) => {
    // Update answers array
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    // Calculate time spent on this question
    const timeSpent = startTime ? Math.round((Date.now() - startTime) / 1000) : timePerQuestion;

    // Update responses with detailed information
    const newResponse: QuestionResponse = {
      questionId: questions[currentQuestion].id,
      selectedAnswer: answer,
      isCorrect: isCorrect,
      timeSpent: timeSpent
    };
    
    setResponses(prev => [...prev, newResponse]);

    // Update score if correct
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      toast.success("Correct answer!");
    } else {
      toast.error("Not quite right.");
    }

    // Reset start time for next question
    setStartTime(Date.now());

    // Delay moving to next question or results to allow animation
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
      } else {
        // Calculate percentage correct
        const finalScore = isCorrect ? score + 1 : score;
        const percent = Math.round((finalScore / questions.length) * 100);
        setPercentCorrect(percent);
        setStatus("complete");
        setQuizCompleted(true);
        
        // Show completion toast
        if (percent >= 80) {
          toast.success(`Quiz completed! You scored ${percent}% - Excellent!`);
        } else if (percent >= 60) {
          toast.success(`Quiz completed! You scored ${percent}% - Good job!`);
        } else {
          toast.info(`Quiz completed! You scored ${percent}% - Keep learning!`);
        }
      }
    }, 1500);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setStartTime(Date.now());
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
    setQuizStarted,
    quizCompleted,
    setQuizCompleted,
    setCurrentQuestionIndex,
    setScore,
    setAnswers,
    restartQuiz,
    responses,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
