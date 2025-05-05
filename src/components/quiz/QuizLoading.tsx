
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";

interface QuizLoadingProps {
  onLoadingComplete: () => void;
}

const QuizLoading = ({ onLoadingComplete }: QuizLoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Simulate loading progress over time with smoother progression
    const totalDuration = 5000; // 5 seconds total
    const interval = 50; // Update every 50ms for smoother animation
    const incrementPerInterval = (interval / totalDuration) * 100;
    
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = Math.min(prevProgress + incrementPerInterval, 100);
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          // Allow animation to complete before triggering the callback
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="py-6 md:py-10 px-4 md:px-6 text-center bg-white rounded-lg shadow-md max-w-md mx-auto my-4 md:my-0">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-xl md:text-2xl font-domine font-bold mb-4">
          {isComplete ? "Get, set, go!" : "Preparing your quiz"}
        </h2>
        
        <div className="w-full max-w-sm mb-4 md:mb-6 relative">
          <div className="flex flex-col gap-2">
            <Progress 
              value={progress} 
              progressColor={isComplete ? "bg-cognilense-blue" : "bg-gradient-to-r from-cognilense-green via-cognilense-yellow to-cognilense-blue"}
              className="h-2 md:h-3"
            />
          </div>
          
          <div className="flex justify-between items-center mt-2 text-xs md:text-sm text-cognilense-blue font-medium">
            <span>{isComplete ? "COMPLETE!" : "LOADING..."}</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
        
        <p className="text-sm md:text-base text-gray-600 font-worksans">
          {isComplete 
            ? "Your cognitive bias challenge is ready!" 
            : "Preparing your cognitive bias challenge"}
        </p>
      </motion.div>
    </div>
  );
};

export default QuizLoading;
