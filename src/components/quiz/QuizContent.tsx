
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChevronLeft, ChevronRight, SkipForward, CheckCircle2, XCircle } from "lucide-react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

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
  timeLeft,
  timePerQuestion,
  handleAnswer,
  handlePrevious,
  handleNext,
  handleSkip,
  showExplanation
}: QuizContentProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const correctOption = currentQuestion.options.find((option: any) => option.isCorrect)?.text;
  
  const timerProgress = (timeLeft / timePerQuestion) * 100;
  
  const getTimerColor = () => {
    if (timerProgress > 66) return "bg-green-500";
    if (timerProgress > 33) return "bg-yellow-500";
    return "bg-red-500";
  };
  
  const handleOptionSelect = (option: string) => {
    if (showExplanation) return;
    setSelectedOption(option);
    handleAnswer(option);
  };

  return (
    <div className="bg-white p-6 relative pb-24">
      {/* Timer */}
      <div className="mb-6 flex items-center gap-2">
        <Clock className="w-4 h-4 text-gray-400" />
        <Progress 
          value={timerProgress} 
          className={`h-2 ${getTimerColor()} bg-gray-100`} 
        />
        <span className="text-xs font-medium">{timeLeft}s</span>
      </div>
      
      {/* Question */}
      <div className="mb-8">
        <AnimatePresence mode="wait">
          <motion.h3
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-xl md:text-2xl font-medium"
          >
            {currentQuestion.question}
          </motion.h3>
        </AnimatePresence>
      </div>
      
      {/* Options */}
      <div className="space-y-3 mb-8">
        <RadioGroup value={selectedOption || ""} className="space-y-3">
          {currentQuestion.options.map((option: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <label
                className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedOption === option.text
                    ? selectedOption === correctOption
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50"
                    : "border-gray-200 hover:border-cognilense-blue hover:bg-gray-50"
                } ${
                  showExplanation && option.text === correctOption && selectedOption !== option.text
                    ? "border-green-500 bg-green-50"
                    : ""
                }`}
                onClick={() => handleOptionSelect(option.text)}
              >
                <div className="flex-grow">
                  <div className="flex items-center">
                    <RadioGroupItem
                      value={option.text}
                      id={`option-${idx}`}
                      disabled={showExplanation}
                      className="mr-3"
                    />
                    <span className="text-base md:text-lg">{option.text}</span>
                  </div>
                </div>
                {showExplanation && option.text === correctOption && (
                  <CheckCircle2 className="w-5 h-5 text-green-500 ml-2" />
                )}
                {showExplanation && selectedOption === option.text && option.text !== correctOption && (
                  <XCircle className="w-5 h-5 text-red-500 ml-2" />
                )}
              </label>
            </motion.div>
          ))}
        </RadioGroup>
      </div>
      
      {/* Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-20">
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0 || showExplanation}
            className="gap-1"
            size="sm"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>
          
          <Button
            variant="ghost"
            onClick={handleSkip}
            disabled={showExplanation}
            className="text-muted-foreground hover:text-foreground gap-1"
            size="sm"
          >
            Skip <SkipForward className="w-4 h-4" />
          </Button>
          
          <Button
            variant="default"
            onClick={handleNext}
            disabled={showExplanation}
            className="bg-cognilense-blue text-white hover:bg-blue-600 gap-1"
            size="sm"
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
