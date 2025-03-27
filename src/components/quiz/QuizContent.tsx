
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, SkipForward, Clock, Check, X } from "lucide-react";
import { Button } from "../ui/button";
import { RadioGroup } from "../ui/radio-group";
import { Progress } from "../ui/progress";
import { Card } from "../ui/card";
import BiasIllustration from "./BiasIllustration";

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
  const progress = (timeLeft / timePerQuestion) * 100;
  
  // Clear selected option when question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestionIndex]);
  
  const handleOptionSelect = (value: string) => {
    if (showExplanation) return;
    setSelectedOption(value);
    handleAnswer(value);
  };

  const getTimerColor = () => {
    if (progress > 66) return "bg-green-500";
    if (progress > 33) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Helper function to determine if an option is correct
  const isCorrectOption = (option: any) => {
    return option.isCorrect === true;
  };

  // Get the correct option text
  const getCorrectOptionText = () => {
    const correctOption = currentQuestion.options.find((option: any) => option.isCorrect);
    return correctOption ? correctOption.text : "";
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
      {/* Left side - Question and answers */}
      <div className="w-full md:w-3/5">
        <Card className="gradient-border overflow-hidden shadow-lg animation-pulse-subtle mb-4">
          {/* Timer bar */}
          <div className="w-full">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{timeLeft}s remaining</span>
              </div>
              <span className="text-sm font-medium">
                Question {currentQuestionIndex + 1} of {questionsLength}
              </span>
            </div>
            <Progress 
              value={progress} 
              className={`h-1 rounded-none ${getTimerColor()}`} 
            />
          </div>
          
          {/* Question */}
          <div className="p-6 pb-20 bg-white relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.h3
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl font-domine font-semibold text-gray-900 mb-6"
              >
                {currentQuestion.question}
              </motion.h3>
            </AnimatePresence>
            
            {/* Options */}
            <div className="space-y-3 mb-8">
              <RadioGroup value={selectedOption || ""} onValueChange={handleOptionSelect}>
                {currentQuestion.options.map((option: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <div
                      className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedOption === option.text && !showExplanation
                          ? "border-cognilense-blue bg-blue-50"
                          : showExplanation && selectedOption === option.text && option.isCorrect
                          ? "border-green-500 bg-green-50"
                          : showExplanation && selectedOption === option.text && !option.isCorrect
                          ? "border-red-500 bg-red-50"
                          : showExplanation && option.isCorrect
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                      onClick={() => !showExplanation && handleOptionSelect(option.text)}
                    >
                      <div className="flex items-center w-full gap-3">
                        <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                          selectedOption === option.text && !showExplanation
                            ? "border-cognilense-blue"
                            : showExplanation && selectedOption === option.text && option.isCorrect
                            ? "border-green-500"
                            : showExplanation && selectedOption === option.text && !option.isCorrect
                            ? "border-red-500"
                            : showExplanation && option.isCorrect
                            ? "border-green-500"
                            : "border-gray-300"
                        }`}>
                          {selectedOption === option.text && !showExplanation && (
                            <div className="h-3 w-3 rounded-full bg-cognilense-blue"></div>
                          )}
                          {showExplanation && selectedOption === option.text && option.isCorrect && (
                            <Check className="h-3 w-3 text-green-500" />
                          )}
                          {showExplanation && selectedOption === option.text && !option.isCorrect && (
                            <X className="h-3 w-3 text-red-500" />
                          )}
                          {showExplanation && option.isCorrect && selectedOption !== option.text && (
                            <Check className="h-3 w-3 text-green-500" />
                          )}
                        </div>
                        <span className={`text-base font-worksans ${
                          showExplanation && selectedOption === option.text && option.isCorrect
                            ? "text-green-700 font-medium"
                            : showExplanation && selectedOption === option.text && !option.isCorrect
                            ? "text-red-700 font-medium"
                            : showExplanation && option.isCorrect
                            ? "text-green-700 font-medium"
                            : "text-gray-800"
                        }`}>{option.text}</span>
                      </div>
                    </div>
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
                  disabled={currentQuestionIndex === 0}
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
                  Skip <SkipForward className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="default"
                  onClick={handleNext}
                  className="bg-cognilense-blue text-white hover:bg-blue-600 gap-1"
                >
                  {currentQuestionIndex === questionsLength - 1 ? "Finish" : "Next"} 
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Question progress indicators */}
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex flex-wrap gap-2 justify-center">
            {Array.from({ length: questionsLength }).map((_, idx) => (
              <div 
                key={idx} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                  idx === currentQuestionIndex
                    ? "bg-cognilense-blue text-white font-medium"
                    : idx < currentQuestionIndex
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right side - Explanation and info */}
      <div className="w-full md:w-2/5 space-y-4">
        {/* Cognitive bias illustration */}
        <Card className="bg-white p-6 shadow">
          <h4 className="font-domine text-lg font-medium mb-4">Understanding Cognitive Biases</h4>
          <div className="border border-gray-100 rounded-md p-4 bg-gray-50 mb-4 flex justify-center">
            {/* Black and white line art illustration */}
            <div className="w-48 h-48 flex items-center justify-center">
              <BiasIllustration biasType={currentQuestion.type} />
            </div>
          </div>
          <p className="text-sm text-gray-600 font-worksans">
            Cognitive biases are systematic patterns of deviation from norm or rationality in judgment. 
            Each question in this quiz highlights a different bias that affects our thinking.
          </p>
        </Card>
        
        {/* Explanation Card - Shows when an answer is selected */}
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white p-6 shadow">
              <h4 className="font-domine text-lg font-medium mb-3">
                {selectedOption === getCorrectOptionText() ? 
                  <span className="text-green-600">Correct Answer!</span> : 
                  <span className="text-red-600">Incorrect Answer</span>
                }
              </h4>
              <div className={`p-4 rounded-lg ${
                selectedOption === getCorrectOptionText() ? 
                  "bg-green-50 border border-green-200" : 
                  "bg-red-50 border border-red-200"
              }`}>
                <p className="text-sm mb-3">{currentQuestion.explanation}</p>
                <p className="text-sm font-medium">
                  <span className="text-gray-700">Cognitive Bias:</span>{" "}
                  <span className="italic">{currentQuestion.type}</span>
                </p>
              </div>
            </Card>
          </motion.div>
        )}
        
        {/* Quiz progress stats */}
        <Card className="bg-white p-4 shadow">
          <h4 className="font-medium mb-3 font-worksans">Your Progress</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Completed</span>
              <span className="font-medium">{currentQuestionIndex}/{questionsLength}</span>
            </div>
            <Progress 
              value={(currentQuestionIndex / questionsLength) * 100} 
              className="h-2"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuizContent;
