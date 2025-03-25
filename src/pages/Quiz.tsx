
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
  
  const [isInitializing, setIsInitializing] = useState(true);
  
  useEffect(() => {
    console.log("Quiz component rendering with questions:", questions?.length);
  }, [questions]);
  
  useEffect(() => {
    if (quizCompleted) {
      navigate("/results");
      return;
    }

    const initializeQuiz = async () => {
      setIsInitializing(true);
      try {
        await startQuiz();
        setQuizStarted(true);
        toast.success("Quiz started! Good luck!");
        
        // Shorter delay to show questions faster
        setTimeout(() => {
          setIsInitializing(false);
        }, 300);
      } catch (error) {
        console.error("Error starting quiz:", error);
        toast.error("There was an error starting the quiz");
        navigate("/");
      }
    };
    
    if (!quizStarted) {
      initializeQuiz();
    } else {
      setIsInitializing(false);
    }
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
          {isInitializing ? (
            <div className="py-12 px-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Loading your quiz...</h2>
              <p className="text-gray-600">Preparing your cognitive bias challenge</p>
            </div>
          ) : (
            <QuizSection />
          )}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
