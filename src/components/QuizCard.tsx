
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  onAnswer: (isCorrect: boolean) => void;
  timePerQuestion?: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  options,
  correctAnswer,
  explanation,
  onAnswer,
  timePerQuestion = 30, // Default to 30 seconds if not provided
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Reset state when question changes
    setSelectedAnswer(null);
    setIsFlipped(false);
  }, [question]);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(index);
    const correct = index === correctAnswer;
    setIsCorrect(correct);
    
    // Delay the flip animation
    setTimeout(() => {
      setIsFlipped(true);
      onAnswer(correct);
    }, 500);
  };

  // Safely check if options is available and is an array before mapping
  const renderOptions = () => {
    if (!options || !Array.isArray(options)) {
      return <p>No options available</p>;
    }

    return options.map((option, index) => (
      <motion.button
        key={index}
        onClick={() => handleAnswerClick(index)}
        disabled={selectedAnswer !== null}
        className={cn(
          "answer-card relative p-4 md:p-6 rounded-lg text-left transition-all",
          "border-2 hover:border-black/50 focus:outline-none focus:ring-2 focus:ring-black/20",
          selectedAnswer === null 
            ? "bg-white hover:shadow-md" 
            : selectedAnswer === index
              ? isCorrect
                ? "border-cognilense-green bg-cognilense-green/10"
                : "border-red-500 bg-red-500/10"
              : index === correctAnswer && isFlipped
                ? "border-cognilense-green bg-cognilense-green/10"
                : "border-gray-200 bg-gray-50 opacity-60"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <div className="flex items-start gap-3">
          <div 
            className={cn(
              "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5",
              selectedAnswer === null 
                ? "border-2 border-gray-300" 
                : selectedAnswer === index
                  ? isCorrect
                    ? "bg-cognilense-green text-white"
                    : "bg-red-500 text-white"
                  : index === correctAnswer && isFlipped
                    ? "bg-cognilense-green text-white"
                    : "border-2 border-gray-300"
            )}
          >
            {selectedAnswer === index && isCorrect && <Check size={14} />}
            {selectedAnswer === index && !isCorrect && <X size={14} />}
            {selectedAnswer !== index && index === correctAnswer && isFlipped && <Check size={14} />}
          </div>
          <span className="text-base md:text-lg">{option}</span>
        </div>
      </motion.button>
    ));
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Timer bar */}
      {selectedAnswer === null && timePerQuestion && (
        <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
          <div 
            className="timer-bar rounded-full"
            style={{ 
              animationDuration: `${timePerQuestion}s`,
            }}
          />
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-domine mb-2">{question}</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {renderOptions()}
      </div>
      
      {/* Explanation */}
      {isFlipped && (
        <motion.div 
          className="mt-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="font-domine text-lg font-semibold mb-2">Explanation:</h4>
          <p className="text-muted-foreground">{explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export default QuizCard;
