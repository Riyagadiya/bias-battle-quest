
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useQuiz } from "../context/QuizContext";
import { Card, CardContent } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Check, Clock, Brain, AlertTriangle } from "lucide-react";

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
  const { timePerQuestion, setSelectedOption: setContextSelectedOption } = useQuiz();
  
  // Handle option selection
  const handleOptionSelect = (option: string) => {
    if (showFeedback || selectedOption) return;
    
    setSelectedOption(option);
    setContextSelectedOption(option);
    setShowFeedback(true);
    
    setTimeout(() => {
      onAnswer(option);
      setShowFeedback(false);
    }, 1500);
  };

  return (
    <div className="w-full relative">      
      {/* Question */}
      <h3 className="font-inter text-xl md:text-2xl mb-8 font-medium">{question}</h3>
      
      {/* Options */}
      <div className="grid gap-4">
        {options.map((option, idx) => (
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
              {selectedOption === option && showFeedback && (
                <span className="ml-auto">
                  {option === correctAnswer ? (
                    <Check className="text-green-500" />
                  ) : (
                    <AlertTriangle className="text-red-500" />
                  )}
                </span>
              )}
              {showFeedback && option === correctAnswer && selectedOption !== option && (
                <span className="ml-auto">
                  <Check className="text-green-500" />
                </span>
              )}
            </div>
          </motion.button>
        ))}
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
