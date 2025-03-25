
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuizCard from "../QuizCard";
import QuizTimer from "./QuizTimer";
import QuizProgress from "./QuizProgress";
import QuizNavigation from "./QuizNavigation";

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
  handleSkip
}: QuizContentProps) => {
  if (!currentQuestion) return null;

  const progress = Math.round((currentQuestionIndex / questionsLength) * 100);

  return (
    <div className="w-full md:w-3/5 lg:w-2/3">
      <div className="bg-white rounded-xl shadow-xl p-5 md:p-8 relative overflow-hidden pb-24 gradient-border">
        <QuizProgress 
          currentQuestion={currentQuestionIndex} 
          totalQuestions={questionsLength}
          progress={progress}
        />
        
        <QuizTimer 
          timeLeft={timeLeft} 
          totalTime={timePerQuestion} 
        />
        
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
              options={currentQuestion.options.map((option: any) => option.text)}
              correctAnswer={currentQuestion.options.find((option: any) => option.isCorrect)?.text || ""}
              explanation={currentQuestion.explanation}
              onAnswer={handleAnswer}
            />
          </motion.div>
        </AnimatePresence>
        
        <QuizNavigation
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questionsLength}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSkip={handleSkip}
        />
      </div>
    </div>
  );
};

export default QuizContent;
