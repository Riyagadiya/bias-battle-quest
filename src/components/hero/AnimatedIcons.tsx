
import { motion } from "framer-motion";
import { Brain, Target, Zap } from "lucide-react";

const AnimatedIcons = () => {
  return (
    <div className="relative h-36 md:h-40">
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.85, 1, 0.85]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror"
        }}
        className="absolute left-[15%] top-4 md:left-[25%] md:top-1"
      >
        <div className="absolute inset-0 bg-cognilense-green/10 rounded-full blur-md" />
        <div className="relative bg-white p-3 rounded-full shadow-md">
          <Brain className="w-8 h-8 text-cognilense-green" strokeWidth={1.5} />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ 
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="absolute left-[45%] bottom-0 md:left-[48%] md:bottom-2"
      >
        <div className="absolute inset-0 bg-cognilense-blue/10 rounded-full blur-md" />
        <div className="relative bg-white p-3 rounded-full shadow-md">
          <Target className="w-8 h-8 text-cognilense-blue" strokeWidth={1.5} />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror"
        }}
        className="absolute right-[15%] top-8 md:right-[25%] md:top-6"
      >
        <div className="absolute inset-0 bg-cognilense-yellow/10 rounded-full blur-md" />
        <div className="relative bg-white p-3 rounded-full shadow-md">
          <Zap className="w-8 h-8 text-cognilense-yellow" strokeWidth={1.5} />
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedIcons;
