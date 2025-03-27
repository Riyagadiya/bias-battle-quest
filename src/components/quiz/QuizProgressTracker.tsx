
import React from "react";

interface QuizProgressTrackerProps {
  questions: any[];
  currentQuestionIndex: number;
  answers: (string | null)[];
}

const QuizProgressTracker = ({ 
  questions, 
  currentQuestionIndex, 
  answers 
}: QuizProgressTrackerProps) => {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="space-y-1">
      {questions.map((question, idx) => (
        <div 
          key={idx} 
          className="flex items-center gap-2"
        >
          <div 
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
              idx === currentQuestionIndex 
                ? "bg-cognilense-blue text-white" 
                : idx < currentQuestionIndex 
                  ? answers[idx] === questions[idx].options.find((o: any) => o.isCorrect)?.text
                    ? "bg-green-100 text-green-600 border border-green-200"
                    : "bg-red-100 text-red-600 border border-red-200"
                  : "bg-gray-100 text-gray-400"
            }`}
          >
            {idx + 1}
          </div>
          <span className="text-xs text-gray-500">
            {idx === currentQuestionIndex 
              ? "Current" 
              : idx < currentQuestionIndex 
                ? answers[idx] === questions[idx].options.find((o: any) => o.isCorrect)?.text
                  ? "Correct" 
                  : "Incorrect"
                : "Upcoming"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default QuizProgressTracker;
