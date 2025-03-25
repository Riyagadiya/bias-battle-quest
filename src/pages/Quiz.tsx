
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import Header from "@/components/Header";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const Quiz = () => {
  const navigate = useNavigate();
  const { 
    startQuiz, 
    status, 
    quizCompleted, 
    quizStarted, 
    setQuizStarted,
    questions
  } = useQuiz();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (quizCompleted) {
      navigate("/results");
      return;
    }

    const initializeQuiz = async () => {
      try {
        await startQuiz();
        setQuizStarted(true);
        
        // Make sure questions are loaded before proceeding
        if (questions && questions.length > 0) {
          setLoading(false);
          toast.success("Quiz started! Good luck!");
        } else {
          // If questions aren't loaded, wait a bit and check again
          setTimeout(() => {
            if (questions && questions.length > 0) {
              setLoading(false);
              toast.success("Quiz started! Good luck!");
            } else {
              throw new Error("Failed to load questions");
            }
          }, 1000);
        }
      } catch (error) {
        console.error("Error starting quiz:", error);
        toast.error("There was an error starting the quiz");
        navigate("/");
      }
    };
    
    initializeQuiz();
    
    return () => {
      // Any cleanup if needed
    };
  }, [questions, quizCompleted, navigate, startQuiz, setQuizStarted]);

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
          {loading || !questions || questions.length === 0 ? (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Loading Quiz...</h2>
                <p className="text-gray-600 mb-6">Please wait while we prepare your cognitive bias challenge.</p>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mx-auto" />
                  <Skeleton className="h-4 w-4/6 mx-auto" />
                </div>
              </div>
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
