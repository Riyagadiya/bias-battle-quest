
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
}

const QuizProgress = ({ currentQuestion, totalQuestions, progress }: QuizProgressProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex justify-between mb-4 md:mb-6 items-center">
      <span className="font-semibold text-xs md:text-sm lg:text-base flex items-center gap-1 md:gap-2">
        <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 text-gray-700 text-xs md:text-sm">
          {currentQuestion + 1}
        </span>
        <span>of {totalQuestions}</span>
      </span>
      <span className="text-xs md:text-sm text-muted-foreground font-medium">
        {progress}% Complete
      </span>
    </div>
  );
};

export default QuizProgress;
