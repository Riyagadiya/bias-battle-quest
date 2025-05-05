
import React, { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import QuizContent from "./quiz/QuizContent";
import { Skeleton } from "./ui/skeleton";

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
  const isMobile = useIsMobile();
  
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
    
    // Only reset timer if not showing explanation
    if (!showExplanation) {
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
    }
  }, [currentQuestionIndex, quizStarted, quizCompleted, showExplanation]);

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
    
    setSelectedOption(selectedAnswer);
    setShowExplanation(true);
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(answers[currentQuestionIndex - 1] || null);
      setShowExplanation(false);
    }
  };
  
  const handleNext = () => {
    if (!questions || questions.length === 0) return;
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(answers[currentQuestionIndex + 1] || null);
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
      <div className="py-8 md:py-12 px-4 md:px-6 text-center">
        <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Loading quiz questions...</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <Skeleton className="h-16 md:h-24 w-full rounded-lg" />
          <div className="grid grid-cols-1 gap-3">
            <Skeleton className="h-12 md:h-16 w-full rounded-lg" />
            <Skeleton className="h-12 md:h-16 w-full rounded-lg" />
            <Skeleton className="h-12 md:h-16 w-full rounded-lg" />
            <Skeleton className="h-12 md:h-16 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  // Only render questions if quiz has started
  if (!quizStarted) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];
  
  if (!currentQuestion) {
    console.log("Current question not found for index:", currentQuestionIndex);
    console.log("Available questions:", questions);
    return (
      <div className="py-8 md:py-12 px-4 md:px-6 text-center">
        <h2 className="text-lg md:text-xl font-medium">Question not found. Please try again.</h2>
      </div>
    );
  }

  console.log("Rendering question:", currentQuestion.question);

  return (
    <section className="py-4 md:py-8 px-3 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
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
            answers={answers}
            questions={questions}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;
