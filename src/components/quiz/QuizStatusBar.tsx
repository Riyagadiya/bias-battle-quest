
import React from "react";
import { Progress } from "../ui/progress";

interface QuizStatusBarProps {
  currentQuestion: number;
  totalQuestions: number;
  answers: (string | null)[];
}

const QuizStatusBar = ({ 
  currentQuestion, 
  totalQuestions,
  answers
}: QuizStatusBarProps) => {
  const progress = Math.round((currentQuestion / totalQuestions) * 100);
  
  // Count completed questions
  const completed = answers.filter(answer => answer !== null).length;
  const remaining = totalQuestions - completed;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cognilense-blue text-white text-sm font-medium">
            {currentQuestion}
          </span>
          <span className="text-gray-600">of {totalQuestions}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="font-medium text-green-600">{completed}</span>
            <span className="text-gray-500"> completed</span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-blue-600">{remaining}</span>
            <span className="text-gray-500"> remaining</span>
          </div>
        </div>
      </div>
      
      <Progress 
        value={progress} 
        className="h-2 bg-gray-100" 
      />
      
      <div className="mt-3 flex">
        {Array.from({ length: totalQuestions }).map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 flex-1 mx-0.5 rounded-full ${
              idx + 1 < currentQuestion 
                ? answers[idx] === "skipped"
                  ? "bg-gray-300"
                  : "bg-green-500" 
                : idx + 1 === currentQuestion 
                  ? "bg-cognilense-blue"
                  : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizStatusBar;
