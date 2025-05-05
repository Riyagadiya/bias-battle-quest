
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Play } from "lucide-react";

interface QuizLoadingProps {
  onLoadingComplete: () => void;
}

const QuizLoading = ({ onLoadingComplete }: QuizLoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress over time
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 2; // Increment by 2% each time
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          // Allow animation to complete before triggering the callback
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        
        return newProgress;
      });
    }, 100); // Update every 100ms for a total loading time of ~5 seconds

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="py-12 px-6 text-center bg-white rounded-lg shadow-md max-w-md mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-2xl font-domine font-bold mb-4">
          {isComplete ? "Get, set, go!" : "Preparing your quiz"}
        </h2>
        
        <div className="w-full max-w-sm mb-6 relative">
          {isComplete ? (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full border-2 border-cognilense-blue text-cognilense-blue"
            >
              <Play className="w-6 h-6" />
            </motion.div>
          ) : (
            <div className="mb-3">
              <div className="w-12 h-12 mx-auto animate-pulse rounded-full bg-gradient-to-r from-cognilense-green via-cognilense-yellow to-cognilense-blue"></div>
            </div>
          )}
          
          <div className="flex flex-col gap-2">
            <div className="relative">
              <Progress 
                value={progress} 
                progressColor={isComplete ? "bg-cognilense-blue" : "bg-gradient-to-r from-cognilense-green via-cognilense-yellow to-cognilense-blue"}
                className="h-3"
              />
              {isComplete && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine"></div>
                </motion.div>
              )}
            </div>
            
            <div className="flex justify-between items-center text-xs text-cognilense-blue font-medium">
              <span>{isComplete ? "COMPLETE!" : "LOADING..."}</span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 font-worksans">
          {isComplete 
            ? "Your cognitive bias challenge is ready!" 
            : "Preparing your cognitive bias challenge"}
        </p>
      </motion.div>
    </div>
  );
};

export default QuizLoading;
