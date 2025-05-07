
import React, { createContext, useState, useContext, useEffect } from "react";
import { useQuiz } from "@/hooks/useQuizContext";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  
  // Track if user came from quiz completion
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
    if (savedDiscount === "true" && earnedThroughQuiz === "true") {
      setShowDiscount(true);
    } else {
      setShowDiscount(false);
    }
  }, [location.pathname]); // Re-check when route changes
  
  // Reset discount if navigating directly from home to card-decks without quiz
  useEffect(() => {
    // Listen for direct navigation from home page to card decks using "Buy Card decks" button
    const handleDirectNavigation = () => {
      if (location.pathname === "/card-decks") {
        // Check if we're coming from home and not from quiz/results
        const referrer = document.referrer;
        const isFromHome = referrer.includes("/") && !referrer.includes("/quiz") && !referrer.includes("/results");
        
        // Is navigation direct from home page?
        if (isFromHome && !quizCompleted) {
          // If direct navigation from home without quiz completion, remove discount
          localStorage.removeItem("quizCompletedDiscount");
          localStorage.removeItem("discountEarnedThroughQuiz");
          setShowDiscount(false);
        }
      }
    };
    
    handleDirectNavigation();
  }, [location.pathname, quizCompleted]);

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
