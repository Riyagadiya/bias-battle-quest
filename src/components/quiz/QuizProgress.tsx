
import React from "react";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
}

const QuizProgress = ({ currentQuestion, totalQuestions, progress }: QuizProgressProps) => {
  return (
    <div className="flex justify-between mb-6 items-center">
      <span className="font-semibold text-sm md:text-base flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700">
          {currentQuestion + 1}
        </span>
        <span>of {totalQuestions}</span>
      </span>
      <span className="text-sm text-muted-foreground font-medium">
        {progress}% Complete
      </span>
    </div>
  );
};

export default QuizProgress;
