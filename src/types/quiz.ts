
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
  type: string;
};

export type QuizStatus = "idle" | "active" | "complete";

export type QuizAnswer = string | null;
