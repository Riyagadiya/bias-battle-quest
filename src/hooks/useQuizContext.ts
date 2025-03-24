
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

// Hook to use the quiz context throughout the application
export const useQuiz = () => {
  const context = useContext(QuizContext);
  
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  
  return context;
};
