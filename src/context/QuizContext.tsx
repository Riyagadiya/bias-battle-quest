
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define the question data since the import was incorrect
const questionData = [
  {
    id: 1,
    question: "Which cognitive bias leads people to search for, interpret, and recall information that confirms their existing beliefs?",
    options: [
      { text: "Confirmation Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: false }
    ],
    explanation: "Confirmation bias is the tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs or hypotheses.",
    type: "bias"
  },
  {
    id: 2,
    question: "What cognitive bias causes people to overestimate their abilities in areas where they're incompetent?",
    options: [
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Self-serving Bias", isCorrect: false }
    ],
    explanation: "The Dunning-Kruger effect is a cognitive bias whereby people with limited knowledge or competence in a given intellectual or social domain greatly overestimate their competence.",
    type: "bias"
  },
  {
    id: 3,
    question: "Which bias describes our tendency to rely too heavily on the first piece of information we receive?",
    options: [
      { text: "Framing Effect", isCorrect: false },
      { text: "Hindsight Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Recency Bias", isCorrect: false }
    ],
    explanation: "Anchoring bias is the tendency to rely too heavily on the first piece of information encountered (the 'anchor') when making decisions.",
    type: "bias"
  },
  {
    id: 4,
    question: "Which bias describes our tendency to overestimate the likelihood of events with greater 'availability' in memory?",
    options: [
      { text: "Availability Heuristic", isCorrect: true },
      { text: "Hindsight Bias", isCorrect: false },
      { text: "Clustering Illusion", isCorrect: false },
      { text: "Selection Bias", isCorrect: false }
    ],
    explanation: "The availability heuristic is a mental shortcut that relies on immediate examples that come to mind when evaluating a specific topic, concept, method or decision.",
    type: "bias"
  },
  {
    id: 5,
    question: "Which cognitive bias leads us to see patterns in random events?",
    options: [
      { text: "Clustering Illusion", isCorrect: true },
      { text: "Gambler's Fallacy", isCorrect: false },
      { text: "Baader-Meinhof Phenomenon", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false }
    ],
    explanation: "The clustering illusion is the tendency to see patterns in random events. It's closely related to apophenia, which is the tendency to perceive connections between unrelated phenomena.",
    type: "bias"
  }
];

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
  timePerQuestion: number;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
  quizStarted: boolean;
  quizCompleted: boolean;
  setQuizCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setAnswers: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  restartQuiz: () => void;
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
  timePerQuestion: 15, // Default time per question in seconds
  setSelectedOption: () => {},
  quizStarted: false,
  quizCompleted: false,
  setQuizCompleted: () => {},
  setCurrentQuestionIndex: () => {},
  setScore: () => {},
  setAnswers: () => {},
  restartQuiz: () => {},
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
