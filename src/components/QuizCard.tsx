
import { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronRight, ChevronLeft, Clock, Award, Sparkles } from "lucide-react";
import GradientButton from "./GradientButton";

const QuizCard = () => {
  const { 
    questions, 
    currentQuestionIndex, 
    answers, 
    selectAnswer, 
    goToNextQuestion, 
    goToPreviousQuestion, 
    skipQuestion,
    timeLeft,
    setTimeLeft
  } = useQuiz();

  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  
  useEffect(() => {
    setSelectedOption(currentAnswer?.selectedOption ?? null);
    setHasAnswered(currentAnswer?.selectedOption !== undefined);
    setShowExplanation(false);
    
    // Reset timer when question changes
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          if (!hasAnswered) {
            skipQuestion();
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [currentQuestionIndex, currentQuestion.id]);

  const handleOptionSelect = (optionIndex: number) => {
    if (hasAnswered) return;
    
    setSelectedOption(optionIndex);
    setHasAnswered(true);
    selectAnswer(optionIndex);
    
    // Show explanation after a short delay
    setTimeout(() => {
      setShowExplanation(true);
    }, 600);
  };

  const isOptionCorrect = (optionIndex: number) => {
    return optionIndex === currentQuestion.correctAnswer;
  };

  const getOptionClasses = (optionIndex: number) => {
    if (!hasAnswered) {
      return "bg-white hover:bg-gray-50 hover:border-black/20 hover:shadow-md";
    }
    
    if (optionIndex === selectedOption) {
      return isOptionCorrect(optionIndex) 
        ? "bg-green-50 border-green-400 text-green-900"
        : "bg-red-50 border-red-400 text-red-900 animate-vibrate";
    }
    
    if (isOptionCorrect(optionIndex)) {
      return "bg-green-50 border-green-400 text-green-900";
    }
    
    return "bg-white opacity-70";
  };

  // Get brand color for the progress indicator
  const getBrandColor = (index: number) => {
    const colors = ['bg-cognilense-green', 'bg-cognilense-yellow', 'bg-cognilense-blue', 'bg-cognilense-orange'];
    return colors[index % colors.length];
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="px-3 py-1 bg-black bg-opacity-5 rounded-full font-medium flex items-center">
            <Award size={16} className="mr-1.5 text-cognilense-blue" />
            Question {currentQuestionIndex + 1}/{questions.length}
          </span>
          <div className="flex items-center text-muted-foreground px-3 py-1 bg-black bg-opacity-5 rounded-full">
            <Clock size={16} className="mr-1.5 text-cognilense-orange" />
            <span>{timeLeft} seconds</span>
          </div>
        </div>
        
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="timer-bar h-full" 
            style={{ 
              width: `${(timeLeft / 60) * 100}%`,
              animationDuration: `${timeLeft}s`
            }}
          />
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden relative gradient-border">
        <div className="px-6 py-8">
          <motion.h2 
            key={`question-${currentQuestion.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl font-domine font-bold mb-8 leading-tight"
          >
            {currentQuestion.question}
          </motion.h2>
          
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {currentQuestion.options.map((option, index) => (
                <motion.div
                  key={`${currentQuestion.id}-option-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleOptionSelect(index)}
                  className={`${getOptionClasses(index)} cursor-pointer p-4 md:p-5 border rounded-lg transition-all duration-300 relative`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-0.5">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                        hasAnswered && isOptionCorrect(index) ? "bg-green-100 border-green-500" : 
                        hasAnswered && index === selectedOption ? "bg-red-100 border-red-500" : 
                        "border-gray-300"
                      }`}>
                        {hasAnswered && isOptionCorrect(index) && (
                          <Check size={14} className="text-green-600" />
                        )}
                        {hasAnswered && !isOptionCorrect(index) && index === selectedOption && (
                          <X size={14} className="text-red-600" />
                        )}
                      </div>
                    </div>
                    <div className="text-base md:text-lg">{option}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <AnimatePresence>
            {showExplanation && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 p-5 bg-blue-50 border border-blue-100 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Sparkles size={20} className="text-cognilense-blue mr-2" />
                  <h3 className="text-lg font-semibold font-domine">Explanation</h3>
                </div>
                <p className="text-gray-700">{currentQuestion.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="px-6 py-5 bg-gray-50 border-t flex justify-between">
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center text-sm font-medium px-4 py-2 rounded-md transition-colors ${
              currentQuestionIndex === 0 
              ? "text-gray-400 cursor-not-allowed" 
              : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <ChevronLeft size={16} className="mr-1" />
            Previous
          </button>
          
          <div className="flex gap-3">
            {!hasAnswered && (
              <button
                onClick={skipQuestion}
                className="text-sm font-medium px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Skip
              </button>
            )}
            
            <GradientButton 
              onClick={goToNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1 && !hasAnswered}
              className="text-sm px-4 py-2"
            >
              {currentQuestionIndex === questions.length - 1 && hasAnswered 
                ? "See Results" 
                : "Next"}
            </GradientButton>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <div className="flex gap-2">
          {questions.map((_, index) => {
            const questionAnswer = answers.find(a => a.questionId === questions[index].id);
            let bgColorClass = "bg-gray-300"; // Unanswered
            
            if (questionAnswer) {
              if (questionAnswer.selectedOption === null) {
                bgColorClass = "bg-gray-500"; // Skipped
              } else if (questionAnswer.isCorrect) {
                bgColorClass = getBrandColor(index); // Correct - use brand colors
              } else {
                bgColorClass = "bg-red-500"; // Incorrect
              }
            }
            
            return (
              <div 
                key={`indicator-${index}`} 
                className={`w-3 h-3 rounded-full ${bgColorClass} ${index === currentQuestionIndex ? "ring-2 ring-offset-2 ring-black" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
