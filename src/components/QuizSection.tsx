
import { useQuiz } from "@/context/QuizContext";
import QuizCard from "./QuizCard";
import { motion } from "framer-motion";

const QuizSection = () => {
  const { status } = useQuiz();
  
  if (status !== "active") return null;
  
  return (
    <section className="py-24 px-6 md:px-8 min-h-screen flex items-center relative wave-pattern">
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
