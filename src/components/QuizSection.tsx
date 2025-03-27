
import React, { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import QuizCard from "./QuizCard";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "./ui/progress";

const QuizSection = () => {
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setScore,
    answers,
    setAnswers,
    quizStarted,
    quizCompleted,
    setQuizCompleted,
    setSelectedOption,
    questions,
    timePerQuestion
  } = useQuiz();

  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  
  // Timer effect
  useEffect(() => {
    if (!quizStarted || quizCompleted) return;
    
    setTimeLeft(timePerQuestion);
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSkip();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [currentQuestionIndex, quizStarted, quizCompleted]);

  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswers({ ...answers, [currentQuestionIndex]: selectedAnswer });
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    
    // Clear selected option
    setSelectedOption(null);
    
    // Move to next question or complete quiz
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 500);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
    }
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handleSkip = () => {
    setAnswers({ ...answers, [currentQuestionIndex]: "skipped" });
    handleNext();
  };

  // Calculate timer progress percentage
  const timerProgress = (timeLeft / timePerQuestion) * 100;
  
  // Determine timer color based on time left
  const getTimerColor = () => {
    if (timerProgress > 66) return "bg-green-400";
    if (timerProgress > 33) return "bg-yellow-400";
    return "bg-red-400";
  };

  if (!quizStarted || quizCompleted) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <section className="min-h-screen py-24 px-6 flex items-center justify-center relative">
      <div className="absolute inset-0 wave-pattern"></div>
      
      <div className="container mx-auto w-full max-w-4xl">
        <div className="bg-white rounded-xl shadow-xl p-5 md:p-8 relative overflow-hidden pb-24">
          {/* Progress indicator */}
          <div className="flex justify-between mb-6 items-center">
            <span className="font-semibold text-sm md:text-base">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground font-medium">
              {Math.round((currentQuestionIndex / questions.length) * 100)}% Complete
            </span>
          </div>
          
          {/* Timer progress bar */}
          <div className="mb-6">
            <Progress 
              value={timerProgress} 
              className={`h-1.5 ${getTimerColor()} bg-gray-100`} 
            />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuizCard
                question={currentQuestion.question}
                options={currentQuestion.options}
                correctAnswer={currentQuestion.correctAnswer}
                explanation={currentQuestion.explanation}
                onAnswer={handleAnswer}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-md z-20">
            <div className="container mx-auto max-w-4xl flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2 rounded-md font-medium ${
                  currentQuestionIndex === 0
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                Previous
              </button>
              
              <button
                onClick={handleSkip}
                className="px-4 py-2 text-muted-foreground hover:text-foreground font-medium"
              >
                Skip
              </button>
              
              <button
                onClick={handleNext}
                className="px-4 py-2 text-cognilense-blue font-medium hover:bg-blue-50 rounded-md"
              >
                {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
