
import React, { createContext, useState, useContext, useEffect } from "react";
import { useQuiz } from "@/hooks/useQuizContext";
import { useLocation } from "react-router-dom";

type DiscountContextType = {
  showDiscount: boolean;
  setShowDiscount: (value: boolean) => void;
};

const defaultContextValue: DiscountContextType = {
  showDiscount: false,
  setShowDiscount: () => {}
};

export const DiscountContext = createContext<DiscountContextType>(defaultContextValue);

export const DiscountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showDiscount, setShowDiscount] = useState<boolean>(false);
  const { quizCompleted } = useQuiz();
  const location = useLocation();
  
  // Check if user completed quiz and sync with showDiscount state
  useEffect(() => {
    // When quiz is completed, enable discount
    if (quizCompleted) {
      setShowDiscount(true);
      // Store in localStorage to persist across page loads
      localStorage.setItem("quizCompletedDiscount", "true");
      // Also store a flag to indicate discount was earned through quiz
      localStorage.setItem("discountEarnedThroughQuiz", "true");
    }
  }, [quizCompleted]);
  
  // On initial load, check localStorage for previous quiz completion
  useEffect(() => {
    const savedDiscount = localStorage.getItem("quizCompletedDiscount");
    const earnedThroughQuiz = localStorage.getItem("discountEarnedThroughQuiz");
    
    // Only show discount if it was earned through quiz completion
    // This ensures direct navigation to card deck page doesn't show discount
    if (savedDiscount === "true" && earnedThroughQuiz === "true") {
      setShowDiscount(true);
    } else {
      setShowDiscount(false);
    }
  }, [location.pathname]); // Re-check when route changes

  return (
    <DiscountContext.Provider value={{ showDiscount, setShowDiscount }}>
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
