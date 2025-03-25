
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import Header from "@/components/Header";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Quiz = () => {
  const navigate = useNavigate();
  const { startQuiz, status, quizCompleted } = useQuiz();
  
  // Start the quiz when the page loads
  useEffect(() => {
    // If the quiz is already completed, navigate to results
    if (quizCompleted) {
      navigate("/results");
      return;
    }
    
    // Start the quiz if we're in idle state
    if (status === "idle") {
      try {
        startQuiz();
        toast.success("Quiz started! Good luck!");
      } catch (error) {
        console.error("Error starting quiz:", error);
        toast.error("There was an error starting the quiz");
        navigate("/");
      }
    }
  }, [quizCompleted, navigate, startQuiz, status]);

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
          <QuizSection />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
