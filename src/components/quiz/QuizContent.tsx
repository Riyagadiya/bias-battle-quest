
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, SkipForward, Clock, Check, X } from "lucide-react";
import { Button } from "../ui/button";
import { RadioGroup } from "../ui/radio-group";
import { Progress } from "../ui/progress";
import { Card } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import QuizIllustration from "./QuizIllustration";
import { useIsMobile } from "@/hooks/use-mobile";

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
  answers: (string | null)[];
  questions: any[];
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
  showExplanation,
  answers,
  questions
}: QuizContentProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const progress = (timeLeft / timePerQuestion) * 100;
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestionIndex]);
  
  const handleOptionSelect = (value: string) => {
    if (showExplanation) return;
    setSelectedOption(value);
    handleAnswer(value);
  };

  const getCorrectOption = () => {
    return currentQuestion.options.find((option: any) => option.isCorrect === true);
  };

  const getCorrectOptionText = () => {
    const correctOption = getCorrectOption();
    return correctOption ? correctOption.text : "";
  };

  const getCurrentBiasType = () => {
    return currentQuestion?.type || null;
  };

  const getIllustrationBias = () => {
    const correctAnswer = getCorrectOptionText();
    if (correctAnswer && correctAnswer.includes("Bias")) {
      return correctAnswer;
    }
    return getCurrentBiasType();
  };

  const renderQuestionCard = () => (
    <Card className="gradient-border overflow-hidden shadow-lg animation-pulse-subtle mb-4">
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
        <div className="h-1 w-full bg-gray-100">
          <div 
            className="h-full transition-all duration-300"
            style={{ 
              width: `${progress}%`,
              backgroundColor: "#f7d465" 
            }}
          ></div>
        </div>
      </div>
      
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
        
        <div className="space-y-3 mb-8">
          <RadioGroup value={selectedOption || ""} onValueChange={handleOptionSelect}>
            {currentQuestion.options.map((option: any, idx: number) => {
              const isCorrect = option.isCorrect === true;
              return (
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
                        : showExplanation && isCorrect
                        ? "border-green-500 bg-green-50"
                        : showExplanation && selectedOption === option.text && !isCorrect
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => !showExplanation && handleOptionSelect(option.text)}
                  >
                    <div className="flex items-center w-full gap-3">
                      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                        selectedOption === option.text && !showExplanation
                          ? "border-cognilense-blue"
                          : showExplanation && isCorrect
                          ? "border-green-500"
                          : showExplanation && selectedOption === option.text && !isCorrect
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}>
                        {selectedOption === option.text && !showExplanation && (
                          <div className="h-3 w-3 rounded-full bg-cognilense-blue"></div>
                        )}
                        {showExplanation && isCorrect && (
                          <Check className="h-3 w-3 text-green-500" />
                        )}
                        {showExplanation && selectedOption === option.text && !isCorrect && (
                          <X className="h-3 w-3 text-red-500" />
                        )}
                      </div>
                      <span className={`text-base font-worksans ${
                        showExplanation && isCorrect
                          ? "text-green-700 font-medium"
                          : showExplanation && selectedOption === option.text && !isCorrect
                          ? "text-red-700 font-medium"
                          : "text-gray-800"
                      }`}>{option.text}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </RadioGroup>
        </div>
        
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
  );

  const renderIllustrationCard = () => (
    <Card className="bg-white p-6 shadow mb-4">
      <AspectRatio ratio={1 / 1} className="overflow-hidden rounded-md border">
        <QuizIllustration 
          biasType={getCurrentBiasType()}
          correctOption={getCorrectOptionText()}
        />
      </AspectRatio>
    </Card>
  );

  const renderExplanation = () => (
    showExplanation && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-4"
      >
        <Card className="bg-white p-6 shadow border border-blue-200">
          <h4 className="font-domine text-lg font-medium mb-3 text-blue-700">
            Explanation
          </h4>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
            <p className="text-sm mb-3">{currentQuestion.explanation}</p>
            <p className="text-sm font-medium">
              <span className="text-gray-700">Correct Answer:</span>{" "}
              <span className="text-green-600 font-medium">{getCorrectOptionText()}</span>
            </p>
          </div>
        </Card>
      </motion.div>
    )
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
      {/* Main content area - reordered on mobile */}
      <div className="w-full md:w-3/5">
        {isMobile ? (
          <>
            {renderIllustrationCard()}
            {renderQuestionCard()}
          </>
        ) : (
          renderQuestionCard()
        )}
        
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex flex-wrap gap-2 justify-center">
            {Array.from({ length: questionsLength }).map((_, idx) => {
              const correctAnswer = questions[idx]?.options.find((o: any) => o.isCorrect)?.text || "";
              const userAnswer = answers[idx];
              
              let bgColor = "bg-gray-100";
              let textColor = "text-gray-500";
              let border = "";
              
              if (idx === currentQuestionIndex) {
                bgColor = "bg-cognilense-blue";
                textColor = "text-white";
                border = "";
              } else if (idx < currentQuestionIndex) {
                if (userAnswer === "skipped") {
                  bgColor = "bg-gray-200";
                  textColor = "text-gray-600";
                  border = "border border-gray-300";
                } else if (userAnswer === correctAnswer) {
                  bgColor = "bg-green-100";
                  textColor = "text-green-700";
                  border = "border border-green-200";
                } else {
                  bgColor = "bg-red-100";
                  textColor = "text-red-700";
                  border = "border border-red-200";
                }
              }
              
              return (
                <div 
                  key={idx} 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${bgColor} ${textColor} ${border}`}
                >
                  {idx + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-2/5">
        {/* On desktop, render illustration and explanation */}
        {!isMobile && (
          <>
            {renderIllustrationCard()}
            {renderExplanation()}
          </>
        )}
        
        {/* On mobile, only render explanation here (illustration is above) */}
        {isMobile && renderExplanation()}
      </div>
    </div>
  );
};

export default QuizContent;
