
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import Header from "@/components/Header";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";

const Quiz = () => {
  const navigate = useNavigate();
  const { startQuiz, quizStarted, quizCompleted } = useQuiz();
  
  // Start the quiz when the page loads
  useEffect(() => {
    startQuiz();
    
    // If the quiz is completed, navigate to the results page
    if (quizCompleted) {
      navigate("/results");
    }
  }, [startQuiz, quizCompleted, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <QuizSection />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
