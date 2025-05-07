
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
  
  // On initial load, check localStorage for previous quiz completion and handle direct navigation
  useEffect(() => {
    const savedDiscount = localStorage.getItem("quizCompletedDiscount");
    const earnedThroughQuiz = localStorage.getItem("discountEarnedThroughQuiz");
    
    // Reset discount for direct navigation to cart, checkout, or product pages
    if (location.pathname.includes('/card-decks') || 
        location.pathname.includes('/product/') ||
        location.pathname === '/cart' || 
        location.pathname === '/checkout') {
      
      // Check the referrer to determine navigation source
      const referrer = document.referrer;
      
      // This checks if user didn't come from the quiz/results page
      // Empty referrer or non-quiz/results path indicates direct navigation or navigation from home
      const isDirectNavigation = 
        !referrer.includes("/quiz") && 
        !referrer.includes("/results");
      
      // If direct navigation and not from quiz completion, remove discount
      if (isDirectNavigation && !quizCompleted) {
        console.log("Direct navigation detected - removing discount");
        localStorage.removeItem("quizCompletedDiscount");
        localStorage.removeItem("discountEarnedThroughQuiz");
        setShowDiscount(false);
        return;
      }
    }
    
    // Only show discount if it was earned through quiz completion
    if (savedDiscount === "true" && earnedThroughQuiz === "true") {
      setShowDiscount(true);
    } else {
      setShowDiscount(false);
    }
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
