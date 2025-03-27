
import React from "react";
import { Brain } from "lucide-react";
import BiasIllustration from "./BiasIllustration";
import QuizProgressTracker from "./QuizProgressTracker";

interface QuizSidebarProps {
  currentQuestion: any;
  questions: any[];
  currentQuestionIndex: number;
  answers: (string | null)[];
}

const QuizSidebar = ({
  currentQuestion,
  questions,
  currentQuestionIndex,
  answers
}: QuizSidebarProps) => {
  if (!currentQuestion) return null;
  
  return (
    <div className="w-full md:w-2/5 lg:w-1/3 space-y-6 sticky top-24">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-medium mb-4">Understanding Cognitive Biases</h3>
        <div className="border border-gray-100 rounded-md p-4 bg-gray-50 mb-4">
          <BiasIllustration biasType={currentQuestion.type} />
        </div>
        <p className="text-sm text-gray-600">
          Cognitive biases are systematic patterns of deviation from norm or rationality in judgment. 
          Each question in this quiz highlights a different bias that affects our thinking.
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <h4 className="font-medium mb-3">Your Progress</h4>
        <QuizProgressTracker 
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          answers={answers}
        />
      </div>
    </div>
  );
};

export default QuizSidebar;
