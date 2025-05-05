
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import { useDiscount } from "@/hooks/use-discount";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/components/Header";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Quiz = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { 
    startQuiz, 
    quizCompleted, 
    setQuizStarted,
    questions
  } = useQuiz();
  const { setQuizNavigation } = useDiscount();
  
  const [isInitializing, setIsInitializing] = useState(true);
  
  useEffect(() => {
    // Ensure we set quizNavigation to true when on quiz page
    setQuizNavigation(true);
    
    if (quizCompleted) {
      navigate("/results");
      return;
    }

    const initializeQuiz = async () => {
      setIsInitializing(true);
      try {
        await startQuiz();
        // Directly set quiz as started without loading screen
        setQuizStarted(true);
        setIsInitializing(false);
      } catch (error) {
        console.error("Error starting quiz:", error);
        toast.error("There was an error starting the quiz");
        navigate("/");
      }
    };
    
    // Initialize quiz without loading screen
    initializeQuiz();
    
  }, [quizCompleted, navigate, startQuiz, setQuizStarted, setQuizNavigation]);

  // Show a simple initializing message
  if (isInitializing) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-cognilense-background bg-wave-pattern">
        <div className="bg-white/90 rounded-lg shadow-lg p-6 max-w-md w-full mx-4 backdrop-blur-sm">
          <h2 className="text-xl md:text-2xl font-domine font-bold mb-4 text-center">Initializing Quiz</h2>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
            <div className="animate-pulse h-full bg-gradient-to-r from-cognilense-green via-cognilense-yellow to-cognilense-blue"></div>
          </div>
          <p className="text-sm md:text-base text-gray-600 font-worksans text-center">
            Preparing your cognitive bias challenge
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-cognilense-background">
      <Header />
      
      <main className={`flex-grow ${isMobile ? 'pt-16' : 'pt-20'} bg-cognilense-background bg-wave-pattern`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-4 relative h-full"
        >
          <QuizSection />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
