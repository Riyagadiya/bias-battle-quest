
import React from "react";
import { ChevronLeft, ChevronRight, SkipForward } from "lucide-react";
import { Button } from "../ui/button";

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
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentQuestionIndex === 0}
          className={`gap-1 ${
            currentQuestionIndex === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-black hover:bg-gray-100"
          }`}
          size="sm"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </Button>
        
        <Button
          variant="ghost"
          onClick={onSkip}
          className="text-muted-foreground hover:text-foreground gap-1"
          size="sm"
        >
          Skip <SkipForward className="w-4 h-4" />
        </Button>
        
        <Button
          variant="default"
          onClick={onNext}
          className="bg-cognilense-blue text-white hover:bg-blue-600 gap-1"
          size="sm"
        >
          {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"} 
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuizNavigation;
