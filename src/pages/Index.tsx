
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";
import { useQuiz, QuizProvider } from "@/context/QuizContext";

// Main component wrapper
const Index = () => {
  return (
    <QuizProvider>
      <IndexContent />
    </QuizProvider>
  );
};

// Content component that uses the quiz context
const IndexContent = () => {
  const { status } = useQuiz();
  const navigate = useNavigate();
  
  // If quiz is active or complete, redirect to the appropriate page
  useEffect(() => {
    if (status === "active") {
      navigate("/quiz");
    } else if (status === "complete") {
      navigate("/results");
    }
  }, [status, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Hero />
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* PromoSection - Always visible regardless of quiz status */}
      <PromoSection />
      
      <Footer />
    </div>
  );
};

export default Index;
