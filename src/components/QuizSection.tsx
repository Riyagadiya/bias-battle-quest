
import { useQuiz } from "@/context/QuizContext";
import QuizCard from "./QuizCard";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, SkipForward } from "lucide-react";
import { Progress } from "./ui/progress";

const QuizSection = () => {
  const { 
    status, 
    questions, 
    currentQuestionIndex, 
    goToNextQuestion, 
    goToPreviousQuestion, 
    skipQuestion,
    timeLeft,
    timePerQuestion
  } = useQuiz();
  
  if (status !== "active") return null;
  
  const currentQuestion = questions[currentQuestionIndex];
  const progressValue = (currentQuestionIndex / questions.length) * 100;
  const timerProgress = (timeLeft / timePerQuestion) * 100;
  
  return (
    <section className="py-24 px-6 md:px-8 flex flex-col min-h-screen relative wave-pattern">
      <div className="container mx-auto relative flex-grow flex flex-col">
        {/* Question Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span className="text-sm font-medium">{timeLeft}s</span>
          </div>
          <Progress value={progressValue} className="h-1 bg-gray-200" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          <QuizCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
            explanation={currentQuestion.explanation}
            onAnswer={(isCorrect) => {
              // Wait 2 seconds before going to next question
              setTimeout(() => {
                goToNextQuestion();
              }, 2000);
            }}
          />
        </motion.div>
      </div>
      
      {/* Fixed navigation bar */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 mt-10">
        <div className="container mx-auto flex justify-between items-center">
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center justify-center px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </button>
          
          <div className="w-full max-w-xs mx-4">
            <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full timer-gradient"
                style={{
                  width: `${timerProgress}%`,
                  background: `linear-gradient(to right, rgb(113, 189, 69, 0.5), rgb(247, 212, 101, 0.6), rgb(229, 155, 114, 0.7))`,
                  transition: 'width 1s linear'
                }}
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={skipQuestion}
              className="flex items-center justify-center px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-gray-500"
            >
              Skip
              <SkipForward className="ml-1 h-4 w-4" />
            </button>
            
            <button
              onClick={goToNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
              className="flex items-center justify-center px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
