
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();
  
  const handleStartQuiz = () => {
    startQuiz();
    navigate("/quiz");
  };

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
          <Hero onStartQuiz={handleStartQuiz} />
        </motion.div>
      </main>
      
      <PromoSection />
      <Footer />
    </div>
  );
};

export default Index;
