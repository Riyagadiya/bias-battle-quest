
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuizSection from "@/components/QuizSection";
import ResultsSection from "@/components/ResultsSection";
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
  const { status, startQuiz } = useQuiz();

  useEffect(() => {
    // Smooth scroll to top when status changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [status]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero startQuiz={startQuiz} />
            </motion.div>
          )}
          
          {status === "active" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <QuizSection />
            </motion.div>
          )}
          
          {status === "complete" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ResultsSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      {/* PromoSection - Always visible regardless of quiz status */}
      <PromoSection />
      
      <Footer />
    </div>
  );
};

export default Index;
