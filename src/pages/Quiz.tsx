
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import Header from "@/components/Header";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Quiz = () => {
  const navigate = useNavigate();
  const { 
    startQuiz, 
    quizCompleted, 
    quizStarted,
    setQuizStarted,
    questions
  } = useQuiz();
  
  useEffect(() => {
    if (quizCompleted) {
      navigate("/results");
      return;
    }

    const initializeQuiz = async () => {
      try {
        await startQuiz();
        setQuizStarted(true);
        toast.success("Quiz started! Good luck!");
      } catch (error) {
        console.error("Error starting quiz:", error);
        toast.error("There was an error starting the quiz");
        navigate("/");
      }
    };
    
    if (!quizStarted) {
      initializeQuiz();
    }
    
    return () => {
      // Any cleanup if needed
    };
  }, [quizCompleted, navigate, startQuiz, setQuizStarted, quizStarted]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto"
        >
          <QuizSection />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
