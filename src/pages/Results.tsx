
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import Header from "@/components/Header";
import ResultsSection from "@/components/ResultsSection";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";

const Results = () => {
  const navigate = useNavigate();
  const { quizCompleted, quizStarted } = useQuiz();
  
  // Redirect to home if quiz hasn't been completed
  useEffect(() => {
    if (!quizCompleted && !quizStarted) {
      navigate("/");
    }
  }, [quizCompleted, quizStarted, navigate]);

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
          <ResultsSection />
        </motion.div>
      </main>
      
      <PromoSection />
      <Footer />
    </div>
  );
};

export default Results;
