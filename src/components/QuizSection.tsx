
import React, { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import QuizCard from "./QuizCard";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "./ui/progress";
import { Brain, Clock, ChevronLeft, ChevronRight, SkipForward } from "lucide-react";
import { Button } from "./ui/button";

const QuizSection = () => {
  const {
    currentQuestion: currentQuestionIndex,
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
    
    // Update answers array properly
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);
    
    const correctAnswer = currentQuestion.options.find(option => option.isCorrect)?.text || "";
    
    if (selectedAnswer === correctAnswer) {
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
    // Update the answers array properly for skipped questions
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = "skipped";
    setAnswers(newAnswers);
    
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

  // Define cognitive bias illustrations - here we're mapping bias types to emoji for simplicity
  // In a real application, you would use actual image files for each bias type
  const getBiasIllustration = (questionType: string) => {
    // This is just a placeholder - in a real app, you'd have illustrations for each bias
    return <Brain className="w-32 h-32 mx-auto opacity-80" />;
  };

  return (
    <section className="py-12 px-6 flex flex-col md:flex-row gap-8 items-start justify-between">
      {/* Left side - Quiz Questions */}
      <div className="w-full md:w-3/5 lg:w-2/3">
        <div className="bg-white rounded-xl shadow-xl p-5 md:p-8 relative overflow-hidden pb-24 gradient-border">
          {/* Progress indicator */}
          <div className="flex justify-between mb-6 items-center">
            <span className="font-semibold text-sm md:text-base flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700">
                {currentQuestionIndex + 1}
              </span>
              <span>of {questions.length}</span>
            </span>
            <span className="text-sm text-muted-foreground font-medium">
              {Math.round((currentQuestionIndex / questions.length) * 100)}% Complete
            </span>
          </div>
          
          {/* Timer progress bar */}
          <div className="mb-6 flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <Progress 
              value={timerProgress} 
              className={`h-1.5 ${getTimerColor()} bg-gray-100`} 
            />
            <span className="text-xs font-medium">{timeLeft}s</span>
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
                options={currentQuestion.options.map(option => option.text)}
                correctAnswer={currentQuestion.options.find(option => option.isCorrect)?.text || ""}
                explanation={currentQuestion.explanation}
                onAnswer={handleAnswer}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`gap-1 ${
                  currentQuestionIndex === 0
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black hover:bg-gray-100"
                }`}
                size="sm"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </Button>
              
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="text-muted-foreground hover:text-foreground gap-1"
                size="sm"
              >
                Skip <SkipForward className="w-4 h-4" />
              </Button>
              
              <Button
                variant="default"
                onClick={handleNext}
                className="bg-cognilense-blue text-white hover:bg-blue-600 gap-1"
                size="sm"
              >
                {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"} 
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Illustration & Explanation Card */}
      <div className="w-full md:w-2/5 lg:w-1/3 space-y-6 sticky top-24">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">Understanding Cognitive Biases</h3>
          <div className="border border-gray-100 rounded-md p-4 bg-gray-50 mb-4">
            {getBiasIllustration(currentQuestion.type)}
          </div>
          <p className="text-sm text-gray-600">
            Cognitive biases are systematic patterns of deviation from norm or rationality in judgment. 
            Each question in this quiz highlights a different bias that affects our thinking.
          </p>
        </div>
        
        {/* Progress tracking */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="font-medium mb-3">Your Progress</h4>
          <div className="space-y-1">
            {questions.map((_, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2"
              >
                <div 
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    idx === currentQuestionIndex 
                      ? "bg-cognilense-blue text-white" 
                      : idx < currentQuestionIndex 
                        ? answers[idx] === questions[idx].options.find(o => o.isCorrect)?.text
                          ? "bg-green-100 text-green-600 border border-green-200"
                          : "bg-red-100 text-red-600 border border-red-200"
                        : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {idx + 1}
                </div>
                <span className="text-xs text-gray-500">
                  {idx === currentQuestionIndex 
                    ? "Current" 
                    : idx < currentQuestionIndex 
                      ? answers[idx] === questions[idx].options.find(o => o.isCorrect)?.text
                        ? "Correct" 
                        : "Incorrect"
                      : "Upcoming"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
