
import React, { createContext, useState, useContext, useEffect } from "react";
import { useQuiz } from "@/hooks/useQuizContext";

type DiscountContextType = {
  showDiscount: boolean;
  setShowDiscount: (value: boolean) => void;
  setQuizNavigation: (value: boolean) => void;
  isFromQuiz: boolean;
};

const defaultContextValue: DiscountContextType = {
  showDiscount: false,
  setShowDiscount: () => {},
  setQuizNavigation: () => {},
  isFromQuiz: false
};

export const DiscountContext = createContext<DiscountContextType>(defaultContextValue);

export const DiscountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showDiscount, setShowDiscount] = useState<boolean>(false);
  const [isFromQuiz, setIsFromQuiz] = useState<boolean>(false);
  const { quizCompleted } = useQuiz();
  
  // Check if user completed quiz and sync with showDiscount state
  useEffect(() => {
    // When quiz is completed, enable discount
    if (quizCompleted) {
      setShowDiscount(true);
      // Store in localStorage to persist across page loads
      localStorage.setItem("quizCompletedDiscount", "true");
    }
  }, [quizCompleted]);
  
  // On initial load, check localStorage for previous quiz completion
  useEffect(() => {
    const savedDiscount = localStorage.getItem("quizCompletedDiscount");
    if (savedDiscount === "true") {
      setShowDiscount(true);
    }
  }, []);

  // Track navigation source (quiz vs direct)
  const setQuizNavigation = (value: boolean) => {
    setIsFromQuiz(value);
    
    // Only show discount if explicitly navigated from the quiz
    // or if they previously completed the quiz
    if (value) {
      const savedDiscount = localStorage.getItem("quizCompletedDiscount");
      setShowDiscount(savedDiscount === "true");
    } else {
      // When directly navigating to card decks, don't show discount
      // regardless of past completion
      setShowDiscount(false);
    }
  };

  return (
    <DiscountContext.Provider value={{ 
      showDiscount, 
      setShowDiscount, 
      setQuizNavigation,
      isFromQuiz
    }}>
      {children}
    </DiscountContext.Provider>
  );
};

export const useDiscount = () => {
  const context = useContext(DiscountContext);
  if (!context) {
    throw new Error("useDiscount must be used within a DiscountProvider");
  }
  return context;
};
