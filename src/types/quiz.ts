
// Define quiz types for use throughout the application
export type QuizOption = {
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: number;
  question: string;
  options: QuizOption[];
  explanation: string;
  type: string;  // This could be "framing", "availability", etc.
};

export type QuizStatus = "idle" | "active" | "complete";

export type QuizAnswer = string | null;

// For tracking question responses
export type QuestionResponse = {
  questionId: number;
  selectedAnswer: string | null;
  isCorrect: boolean;
  timeSpent?: number;
};
