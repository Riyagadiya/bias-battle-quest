
import { useQuiz } from "@/context/QuizContext";
import QuizCard from "./QuizCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const QuizSection = () => {
  const { status, questions, currentQuestionIndex, answers, selectAnswer, timeLeft } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(null);
  
  useEffect(() => {
    if (questions && questions.length > 0 && currentQuestionIndex < questions.length) {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [questions, currentQuestionIndex]);
  
  if (status !== "active") return null;
  
  const handleAnswer = (isCorrect) => {
    // This function will be passed to QuizCard to handle answers
    console.log("Answer selected:", isCorrect);
  };
  
  return (
    <section className="py-24 px-6 md:px-8 min-h-screen flex items-center relative wave-pattern">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {currentQuestion ? (
            <QuizCard
              question={currentQuestion.question}
              options={currentQuestion.options}
              correctAnswer={currentQuestion.correctAnswer}
              explanation={currentQuestion.explanation}
              onAnswer={handleAnswer}
              timePerQuestion={timeLeft}
            />
          ) : (
            <div className="w-full max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
              <p className="text-center">Loading question...</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;
