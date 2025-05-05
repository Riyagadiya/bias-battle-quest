
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";

interface QuizLoadingProps {
  onLoadingComplete: () => void;
}

const QuizLoading = ({ onLoadingComplete }: QuizLoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Simulate loading progress over time with smoother progression
    const totalDuration = 5000; // 5 seconds total
    const interval = 40; // Update every 40ms for even smoother animation
    const incrementPerInterval = (interval / totalDuration) * 100;
    
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = Math.min(prevProgress + incrementPerInterval, 100);
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          
          // Show the final message after reaching 100%
          setTimeout(() => {
            setShowFinalMessage(true);
            
            // Allow animation to complete before triggering the callback
            setTimeout(() => {
              onLoadingComplete();
            }, 1500); // Delay navigation by 1.5 seconds after 100%
          }, 500); // Show final message after 0.5s
          
          return 100;
        }
        
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-cognilense-background bg-wave-pattern">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full max-w-md px-6"
      >
        <div className="text-center mb-8">
          <motion.h2 
            key="loading-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl md:text-2xl font-domine font-bold mb-1 text-cognilense-blue"
          >
            Loading Quiz: {Math.round(progress)}%
          </motion.h2>
          
          <div className="w-full my-6">
            <Progress 
              value={progress} 
              progressColor={isComplete 
                ? "bg-cognilense-blue" 
                : "bg-gradient-to-r from-cognilense-green via-cognilense-yellow to-cognilense-blue"}
              className="h-2.5 md:h-3.5 w-full transition-all duration-300"
            />
          </div>
          
          <motion.div
            className="relative min-h-[50px] text-center"
          >
            <AnimatePresence mode="wait">
              {!showFinalMessage ? (
                <motion.p 
                  key="preparing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-base md:text-lg font-worksans text-gray-700"
                >
                  Preparing your quiz
                </motion.p>
              ) : (
                <motion.p 
                  key="getset"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-lg md:text-xl font-domine font-semibold text-cognilense-green"
                >
                  Get, set, go!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizLoading;
