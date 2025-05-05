
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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-md w-full mx-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-xl md:text-2xl font-domine font-bold mb-6">
            {isComplete ? "Get, set, go!" : "Preparing your quiz"}
          </h2>
          
          <div className="w-full mb-2 text-center">
            <p className="text-sm text-cognilense-blue font-medium mb-2">
              {Math.round(progress)}% LOADED
            </p>
          </div>
          
          <div className="w-full mb-6">
            <Progress 
              value={progress} 
              progressColor={isComplete ? "bg-cognilense-blue" : "bg-gradient-to-r from-cognilense-green via-cognilense-yellow to-cognilense-blue"}
              className="h-2 md:h-3 w-full"
            />
          </div>
          
          <p className="text-sm md:text-base text-gray-600 font-worksans">
            {isComplete 
              ? "Your cognitive bias challenge is ready!" 
              : "Preparing your cognitive bias challenge"}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizLoading;
