
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
  const { startQuiz, status, quizCompleted, quizStarted, setQuizStarted } = useQuiz();
  const [loading, setLoading] = useState(true);
  
  // Start the quiz when the page loads
  useEffect(() => {
    // If the quiz is already completed, navigate to results
    if (quizCompleted) {
      navigate("/results");
      return;
    }

    const initializeQuiz = async () => {
      try {
        // Force the status to "active" when on quiz page
        await startQuiz();
        setQuizStarted(true);
        
        // Wait a short moment before hiding the loading state to ensure data is ready
        setTimeout(() => {
          setLoading(false);
          toast.success("Quiz started! Good luck!");
        }, 500);
      } catch (error) {
        console.error("Error starting quiz:", error);
        toast.error("There was an error starting the quiz");
        navigate("/");
      }
    };
    
    // Start the quiz
    initializeQuiz();
    
    // Clean up function
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20"> {/* Added pt-20 to account for fixed header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto"
        >
          {loading ? (
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
