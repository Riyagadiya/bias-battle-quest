
import React, { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { motion } from "framer-motion";
import QuizContent from "./quiz/QuizContent";
import BiasIllustration from "./quiz/BiasIllustration";
import { Skeleton } from "./ui/skeleton";
import QuizStatusBar from "./quiz/QuizStatusBar";

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
  const [isLoading, setIsLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  
  useEffect(() => {
    console.log("QuizSection mounted with questions count:", questions?.length);
  }, []);
  
  useEffect(() => {
    console.log("Questions changed in QuizSection:", questions?.length);
    setIsLoading(!questions || questions.length === 0);
  }, [questions]);
  
  useEffect(() => {
    if (!quizStarted || quizCompleted) return;
    
    setTimeLeft(timePerQuestion);
    setShowExplanation(false);
    
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
    if (!questions || questions.length === 0) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);
    
    const correctAnswer = currentQuestion.options.find(option => option.isCorrect)?.text || "";
    
    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    
    setSelectedOption(null);
    setShowExplanation(true);
    
    // Delay moving to next question to allow user to see explanation
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowExplanation(false);
      } else {
        setQuizCompleted(true);
      }
    }, 5000); // Give 5 seconds to read explanation
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };
  
  const handleNext = () => {
    if (!questions || questions.length === 0) return;
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handleSkip = () => {
    if (!questions || questions.length === 0) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = "skipped";
    setAnswers(newAnswers);
    
    handleNext();
  };

  if (isLoading) {
    console.log("QuizSection showing loading skeleton (questions not ready)");
    return (
      <div className="py-12 px-6 text-center">
        <h2 className="text-xl font-medium mb-6">Loading quiz questions...</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <Skeleton className="h-24 w-full rounded-lg" />
          <div className="grid grid-cols-1 gap-3">
            <Skeleton className="h-16 w-full rounded-lg" />
            <Skeleton className="h-16 w-full rounded-lg" />
            <Skeleton className="h-16 w-full rounded-lg" />
            <Skeleton className="h-16 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  
  if (!currentQuestion) {
    console.log("Current question not found for index:", currentQuestionIndex);
    console.log("Available questions:", questions);
    return (
      <div className="py-12 px-6 text-center">
        <h2 className="text-xl font-medium">Question not found. Please try again.</h2>
      </div>
    );
  }

  console.log("Rendering question:", currentQuestion.question);

  return (
    <section className="py-8 px-6">
      <QuizStatusBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={questions.length}
        answers={answers}
      />
      
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-3/5">
          <motion.div
            className="gradient-border shadow-glow rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <QuizContent
              currentQuestion={currentQuestion}
              currentQuestionIndex={currentQuestionIndex}
              questionsLength={questions.length}
              timeLeft={timeLeft}
              timePerQuestion={timePerQuestion}
              handleAnswer={handleAnswer}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              handleSkip={handleSkip}
              showExplanation={showExplanation}
            />
          </motion.div>
        </div>
        
        <div className="w-full lg:w-2/5">
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-lg font-medium mb-4">Cognitive Bias Illustrated</h3>
            <BiasIllustration biasType={currentQuestion.type} />
            
            {showExplanation && (
              <motion.div 
                className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-medium mb-2">Understanding {currentQuestion.options.find(option => option.isCorrect)?.text}</h4>
                <p className="text-sm text-gray-600">{currentQuestion.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
