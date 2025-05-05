
import React from "react";
import { ChevronLeft, ChevronRight, SkipForward } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface QuizNavigationProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onSkip: () => void;
}

const QuizNavigation = ({
  currentQuestionIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onSkip,
}: QuizNavigationProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:p-4 z-20">
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentQuestionIndex === 0}
          className={`gap-1 text-xs md:text-sm ${
            currentQuestionIndex === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-black hover:bg-gray-100"
          }`}
          size={isMobile ? "sm" : "default"}
        >
          <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" /> {!isMobile && "Previous"}
        </Button>
        
        <Button
          variant="ghost"
          onClick={onSkip}
          className="text-muted-foreground hover:text-foreground gap-1 text-xs md:text-sm"
          size={isMobile ? "sm" : "default"}
        >
          {!isMobile && "Skip"} <SkipForward className="w-3 h-3 md:w-4 md:h-4" />
        </Button>
        
        <Button
          variant="default"
          onClick={onNext}
          className="bg-cognilense-blue text-white hover:bg-blue-600 gap-1 text-xs md:text-sm"
          size={isMobile ? "sm" : "default"}
        >
          {currentQuestionIndex === totalQuestions - 1 ? "Finish" : !isMobile ? "Next" : ""} 
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuizNavigation;
