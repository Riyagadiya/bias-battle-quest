
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useQuiz } from "../context/QuizContext";

export interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  onAnswer: (selectedAnswer: string) => void;
}

const QuizCard = ({
  question,
  options,
  correctAnswer,
  explanation,
  onAnswer,
}: QuizCardProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Default to 30 seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const { timePerQuestion, setSelectedOption: setContextSelectedOption } = useQuiz();
  
  // Set initial time based on context
  useEffect(() => {
    setTimeLeft(timePerQuestion);
  }, [timePerQuestion]);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showFeedback) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showFeedback) {
      handleOptionSelect("Time's up!");
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeLeft, showFeedback]);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(timePerQuestion);
    setSelectedOption(null);
    setShowFeedback(false);
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [question, timePerQuestion]);

  const handleOptionSelect = (option: string) => {
    if (showFeedback || selectedOption) return;
    
    setSelectedOption(option);
    setContextSelectedOption(option);
    setShowFeedback(true);
    
    if (timerRef.current) clearTimeout(timerRef.current);
    
    setTimeout(() => {
      onAnswer(option);
      setShowFeedback(false);
    }, 1500);
  };

  const getTimerColor = () => {
    if (timeLeft > 20) return "bg-gradient-to-r from-green-300 to-green-500";
    if (timeLeft > 10) return "bg-gradient-to-r from-yellow-300 to-yellow-500";
    return "bg-gradient-to-r from-orange-300 to-red-500";
  };

  // Safely render options with a null check
  const renderOptions = () => {
    if (!options || !Array.isArray(options) || options.length === 0) {
      return (
        <div className="p-4 border border-gray-200 rounded-lg">
          <p>No options available</p>
        </div>
      );
    }

    return options.map((option, idx) => (
      <motion.button
        key={idx}
        onClick={() => handleOptionSelect(option)}
        disabled={showFeedback}
        className={`p-4 md:p-6 border text-left rounded-lg transition-all duration-200 ${
          selectedOption === option && showFeedback
            ? option === correctAnswer
              ? "border-green-500 bg-green-50"
              : "border-red-500 bg-red-50"
            : "border-gray-200 hover:border-cognilense-blue hover:shadow-md"
        } ${
          showFeedback && option === correctAnswer && selectedOption !== option
            ? "border-green-500 bg-green-50"
            : ""
        }`}
        whileHover={!showFeedback ? { scale: 1.02 } : {}}
        whileTap={!showFeedback ? { scale: 0.98 } : {}}
      >
        <div className="flex items-start">
          <span className="font-inter text-base md:text-lg">{option}</span>
        </div>
      </motion.button>
    ));
  };

  if (!question) {
    return <div>Loading question...</div>;
  }

  return (
    <div className="w-full">
      {/* Timer bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <motion.div
          className={`h-full ${getTimerColor()}`}
          initial={{ width: "100%" }}
          animate={{ width: `${(timeLeft / timePerQuestion) * 100}%` }}
          transition={{ duration: 1, ease: "linear" }}
        />
      </div>
      
      {/* Question */}
      <h3 className="font-inter text-xl md:text-2xl mb-8 font-medium">{question}</h3>
      
      {/* Options */}
      <div className="grid gap-4">
        {renderOptions()}
      </div>
      
      {/* Feedback */}
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg"
        >
          <p className="font-inter text-sm">
            <span className="font-medium">Explanation: </span>
            {explanation}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default QuizCard;
