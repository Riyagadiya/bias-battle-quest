
import React, { createContext, useState, useContext, useEffect } from "react";
import { useQuiz } from "@/hooks/useQuizContext";

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
