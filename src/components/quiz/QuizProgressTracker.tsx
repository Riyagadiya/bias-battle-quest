
import React from "react";

interface QuizProgressTrackerProps {
  questions: any[];
  currentQuestionIndex: number;  // Changed from currentQuestion to currentQuestionIndex
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
      {questions.map((question, idx) => {
        const correctAnswer = question.options.find((o: any) => o.isCorrect)?.text;
        const userAnswer = answers[idx];
        
        let bgColorClass = "bg-gray-100 text-gray-400";
        let statusText = "Upcoming";
        
        if (idx === currentQuestionIndex) {
          bgColorClass = "bg-cognilense-blue text-white";
          statusText = "Current";
        } else if (idx < currentQuestionIndex) {
          if (userAnswer === "skipped") {
            bgColorClass = "bg-gray-200 text-gray-600 border border-gray-300";
            statusText = "Skipped";
          } else if (userAnswer === correctAnswer) {
            bgColorClass = "bg-green-100 text-green-600 border border-green-200";
            statusText = "Correct";
          } else {
            bgColorClass = "bg-red-100 text-red-600 border border-red-200";
            statusText = "Incorrect";
          }
        }
        
        return (
          <div 
            key={idx} 
            className="flex items-center gap-2"
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${bgColorClass}`}>
              {idx + 1}
            </div>
            <span className="text-xs text-gray-500">
              {statusText}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default QuizProgressTracker;
