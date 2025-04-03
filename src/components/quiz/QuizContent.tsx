
import React from "react";
import QuizCard from "@/components/QuizCard";
import QuizProgressTracker from "./QuizProgressTracker";
import QuizNavigation from "./QuizNavigation";
import QuizStatusBar from "./QuizStatusBar";
import BiasImage from "./BiasImageMap";
import { Question } from "@/types/quiz";

interface QuizContentProps {
  currentQuestion: Question;
  currentQuestionIndex: number;
  questionsLength: number;
  timeLeft: number;
  timePerQuestion: number;
  handleAnswer: (selectedAnswer: string) => void;
  handlePrevious: () => void;
  handleNext: () => void;
  handleSkip: () => void;
  showExplanation: boolean;
  answers: string[];
  questions: Question[];
}

const QuizContent: React.FC<QuizContentProps> = ({
  currentQuestion,
  currentQuestionIndex,
  questionsLength,
  timeLeft,
  timePerQuestion,
  handleAnswer,
  handlePrevious,
  handleNext,
  handleSkip,
  showExplanation,
  answers,
  questions,
}) => {
  // Find the correct answer option
  const correctAnswerOption = currentQuestion.options.find(option => option.isCorrect);
  const correctAnswer = correctAnswerOption ? correctAnswerOption.text : "";
  
  // Get options as simple string array for QuizCard
  const optionsText = currentQuestion.options.map(option => option.text);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Left column (75% on desktop): Question and options */}
      <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6 md:p-8">
        <QuizStatusBar 
          currentQuestion={currentQuestionIndex + 1} 
          totalQuestions={questionsLength} 
          timeLeft={timeLeft}
          timePerQuestion={timePerQuestion}
        />
        
        <div className="mt-6">
          <QuizCard
            question={currentQuestion.question}
            options={optionsText}
            correctAnswer={correctAnswer}
            explanation={currentQuestion.explanation}
            onAnswer={handleAnswer}
          />
        </div>
        
        <div className="mt-8">
          <QuizNavigation
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questionsLength}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSkip={handleSkip}
            isAnswered={answers[currentQuestionIndex] !== undefined}
            showExplanation={showExplanation}
          />
        </div>
      </div>
      
      {/* Right column (25% on desktop): Progress and Bias Illustration */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white rounded-xl shadow-md p-4 h-auto">
          <h3 className="font-bold text-lg mb-4 text-center text-cognilense-blue">Quiz Progress</h3>
          <QuizProgressTracker
            questions={questions}
            currentQuestion={currentQuestionIndex}
            answers={answers}
          />
        </div>
        
        {/* Bias Illustration Box */}
        <div className="bg-white rounded-xl shadow-md p-4 aspect-square">
          <h3 className="font-bold text-lg mb-2 text-center text-cognilense-blue">
            {showExplanation && correctAnswer ? `${correctAnswer}` : "Cognitive Bias"}
          </h3>
          <div className="w-full h-64">
            <BiasImage 
              biasType={showExplanation ? correctAnswer : currentQuestion.type}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizContent;
