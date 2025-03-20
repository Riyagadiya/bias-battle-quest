
import { useQuiz } from "@/context/QuizContext";
import QuizCard from "./QuizCard";
import { motion } from "framer-motion";
import { Sparkles, Zap, Brain, Lightbulb } from "lucide-react";

const QuizSection = () => {
  const { status } = useQuiz();
  
  if (status !== "active") return null;
  
  return (
    <section className="py-24 px-6 md:px-8 min-h-screen flex items-center relative wave-pattern overflow-hidden">
      {/* Animated floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute text-cognilense-green/20"
          initial={{ x: "10%", y: "10%" }}
          animate={{ x: "15%", y: "15%" }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "15%", left: "5%" }}
        >
          <Brain size={80} />
        </motion.div>
        <motion.div 
          className="absolute text-cognilense-yellow/20"
          initial={{ x: "-5%", y: "-5%" }}
          animate={{ x: "0%", y: "0%" }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "60%", left: "85%" }}
        >
          <Lightbulb size={70} />
        </motion.div>
        <motion.div 
          className="absolute text-cognilense-blue/20"
          initial={{ x: "0%", y: "0%" }}
          animate={{ x: "-5%", y: "5%" }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "75%", left: "10%" }}
        >
          <Sparkles size={60} />
        </motion.div>
        <motion.div 
          className="absolute text-cognilense-orange/20"
          initial={{ x: "0%", y: "0%" }}
          animate={{ x: "5%", y: "-5%" }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "25%", left: "80%" }}
        >
          <Zap size={65} />
        </motion.div>
      </div>
      
      {/* Gradient accent in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full w-[500px] h-[500px] bg-gradient-to-r from-cognilense-green/10 to-cognilense-blue/10 blur-[100px] -top-[250px] -right-[250px]"></div>
        <div className="absolute rounded-full w-[400px] h-[400px] bg-gradient-to-r from-cognilense-yellow/10 to-cognilense-orange/10 blur-[100px] -bottom-[200px] -left-[200px]"></div>
      </div>
      
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <QuizCard />
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;
