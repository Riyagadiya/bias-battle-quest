
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import { useDiscount } from "@/hooks/use-discount";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/components/Header";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";
import QuizLoading from "@/components/quiz/QuizLoading";
import { toast } from "sonner";

const Quiz = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { 
    startQuiz, 
    quizCompleted, 
    quizStarted,
    setQuizStarted,
    questions
  } = useQuiz();
  const { setQuizNavigation } = useDiscount();
  
  const [isInitializing, setIsInitializing] = useState(true);
  const [isPreparing, setIsPreparing] = useState(false);
  const [canShowQuestions, setCanShowQuestions] = useState(false);
  
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
        // After startQuiz completes, show the loading screen
        setIsPreparing(true);
        setIsInitializing(false);
      } catch (error) {
        console.error("Error starting quiz:", error);
        toast.error("There was an error starting the quiz");
        navigate("/");
      }
    };
    
    // Always initialize and show loading screen
    initializeQuiz();
    // Reset canShowQuestions to false when component mounts
    setCanShowQuestions(false);
    
  }, [quizCompleted, navigate, startQuiz, setQuizStarted, setQuizNavigation]);

  const handleLoadingComplete = () => {
    // Wait a moment before showing the quiz questions
    setTimeout(() => {
      setIsPreparing(false);
      setQuizStarted(true);
      setCanShowQuestions(true);
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-cognilense-background">
      <Header />
      
      <main className={`flex-grow ${isMobile ? 'pt-16' : 'pt-20'} bg-cognilense-background bg-wave-pattern`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-4"
        >
          {isInitializing ? (
            <div className="py-8 md:py-12 px-4 md:px-6 text-center bg-white rounded-lg shadow-md max-w-md mx-auto my-4 md:my-0">
              <div className="w-full max-w-sm mx-auto mb-4 md:mb-6">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="animate-pulse h-full bg-gray-400"></div>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-domine font-bold mb-3 md:mb-4">Loading your quiz...</h2>
              <p className="text-sm md:text-base text-gray-600 font-worksans">Preparing your cognitive bias challenge</p>
            </div>
          ) : isPreparing ? (
            <QuizLoading onLoadingComplete={handleLoadingComplete} />
          ) : (
            canShowQuestions && <QuizSection />
          )}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
