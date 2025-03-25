
import React, { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { motion } from "framer-motion";
import QuizContent from "./quiz/QuizContent";
import QuizSidebar from "./quiz/QuizSidebar";

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
    
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1500);
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
    if (!questions || questions.length === 0) return;
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
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

  // Remove the conditional return that was causing the component to not render
  if (!questions || questions.length === 0) {
    return (
      <div className="py-12 px-6 text-center">
        <h2 className="text-xl font-medium">Loading quiz questions...</h2>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return (
      <div className="py-12 px-6 text-center">
        <h2 className="text-xl font-medium">Loading quiz questions...</h2>
      </div>
    );
  }

  return (
    <section className="py-12 px-6 flex flex-col md:flex-row gap-8 items-start justify-between">
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
      />
      
      <QuizSidebar
        currentQuestion={currentQuestion}
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        answers={answers}
      />
    </section>
  );
};

export default QuizSection;
