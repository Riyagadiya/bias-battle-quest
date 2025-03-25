
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, SkipForward } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

interface QuizContentProps {
  currentQuestion: any;
  currentQuestionIndex: number;
  questionsLength: number;
  timeLeft: number;
  timePerQuestion: number;
  handleAnswer: (selectedAnswer: string) => void;
  handlePrevious: () => void;
  handleNext: () => void;
  handleSkip: () => void;
  showExplanation: boolean;
}

const QuizContent = ({
  currentQuestion,
  currentQuestionIndex,
  questionsLength,
  handleAnswer,
  handlePrevious,
  handleNext,
  handleSkip,
  showExplanation
}: QuizContentProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const handleOptionSelect = (option: string) => {
    if (showExplanation) return;
    setSelectedOption(option);
    handleAnswer(option);
  };

  return (
    <div className="bg-white p-6 md:p-10 relative pb-24 min-h-[400px]">
      {/* Question */}
      <div className="mb-8">
        <AnimatePresence mode="wait">
          <motion.h3
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl font-semibold text-gray-900"
          >
            {currentQuestion.question}
          </motion.h3>
        </AnimatePresence>
      </div>
      
      {/* Options */}
      <div className="space-y-4 mb-8">
        {currentQuestion.options.map((option: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
          >
            <div
              className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                selectedOption === option.text
                  ? "border-cognilense-blue bg-blue-50"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => handleOptionSelect(option.text)}
            >
              <div className="flex items-center w-full">
                <div className="h-5 w-5 mr-3 flex items-center justify-center">
                  <div className={`h-5 w-5 rounded-full border ${
                    selectedOption === option.text
                      ? "border-cognilense-blue"
                      : "border-gray-300"
                  }`}>
                    {selectedOption === option.text && (
                      <div className="h-3 w-3 rounded-full bg-cognilense-blue m-0.5"></div>
                    )}
                  </div>
                </div>
                <span className="text-base md:text-lg text-gray-800">{option.text}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-20">
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0 || showExplanation}
            className="gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>
          
          <Button
            variant="ghost"
            onClick={handleSkip}
            disabled={showExplanation}
            className="text-muted-foreground hover:text-foreground gap-1"
          >
            Skip
          </Button>
          
          <Button
            variant="default"
            onClick={handleNext}
            disabled={showExplanation}
            className="bg-cognilense-blue text-white hover:bg-blue-600 gap-1"
          >
            {currentQuestionIndex === questionsLength - 1 ? "Finish" : "Next"} 
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizContent;
