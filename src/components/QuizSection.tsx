import React, { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import QuizCard from "./QuizCard";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "./ui/progress";
import { Brain, Clock, ChevronLeft, ChevronRight, SkipForward, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";

const QuizSection = () => {
  const {
    currentQuestion: currentQuestionIndex,
    setCurrentQuestionIndex,
    setScore,
    answers,
    setAnswers,
    quizStarted,
    quizCompleted,
    setQuizCompleted,
    setSelectedOption,
    questions,
    timePerQuestion
  } = useQuiz();

  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!quizStarted || quizCompleted) return;
    
    setTimeLeft(timePerQuestion);
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSkip();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [currentQuestionIndex, quizStarted, quizCompleted]);

  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);
    
    const correctAnswer = currentQuestion.options.find(option => option.isCorrect)?.text || "";
    
    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    
    setSelectedOption(null);
    
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1500);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
    }
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handleSkip = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = "skipped";
    setAnswers(newAnswers);
    
    handleNext();
  };

  const timerProgress = (timeLeft / timePerQuestion) * 100;
  
  const getTimerColor = () => {
    if (timerProgress > 66) return "bg-green-400";
    if (timerProgress > 33) return "bg-yellow-400";
    return "bg-red-400";
  };

  if (isLoading || !quizStarted || quizCompleted || !questions || questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Preparing Quiz...</h2>
          <p className="text-gray-600">Please wait while we set up your cognitive bias challenge.</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">No Questions Available</h2>
          <p className="text-gray-600">There seems to be an issue loading the questions.</p>
        </div>
      </div>
    );
  }

  const getBiasIllustration = (questionType: string) => {
    switch (questionType) {
      case "framing":
        return (
          <div className="flex flex-col items-center">
            <div className="text-center mb-2">
              <span className="text-lg font-semibold">Framing Effect</span>
            </div>
            <div className="flex justify-between w-full">
              <div className="bg-green-100 p-4 rounded-lg text-center w-[45%]">
                <div className="font-bold text-green-600 text-lg">70%</div>
                <div className="text-sm">Success</div>
              </div>
              <div className="bg-red-100 p-4 rounded-lg text-center w-[45%]">
                <div className="font-bold text-red-600 text-lg">30%</div>
                <div className="text-sm">Failure</div>
              </div>
            </div>
          </div>
        );
      case "availability":
        return (
          <div className="flex flex-col items-center">
            <div className="text-center mb-2">
              <span className="text-lg font-semibold">Availability Heuristic</span>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <AlertTriangle className="text-yellow-500 mr-2" />
                <span>Recent memory: Plane crash documentary</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-sm">Reality:</span>
                <span className="text-xs bg-blue-100 p-1 rounded">1 in 11 million flight accident rate</span>
                <span className="mx-1 text-xs">vs</span>
                <span className="text-xs bg-red-100 p-1 rounded">1 in 107 driving accident rate</span>
              </div>
            </div>
          </div>
        );
      case "anchoring":
        return (
          <div className="flex flex-col items-center">
            <div className="text-center mb-2">
              <span className="text-lg font-semibold">Anchoring Bias</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="text-center">
                <div className="font-bold text-2xl">$10,000</div>
                <div className="text-xs">Initial anchor</div>
              </div>
              <div className="text-center">
                <div className="text-sm">↓</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-xl">$8,500</div>
                <div className="text-xs">Final price</div>
              </div>
              <div className="text-center">
                <div className="text-sm">↓</div>
              </div>
              <div className="text-center">
                <div className="text-sm">$7,000</div>
                <div className="text-xs">Market value</div>
              </div>
            </div>
          </div>
        );
      case "sunk-cost":
        return (
          <div className="flex flex-col items-center">
            <div className="text-center mb-2">
              <span className="text-lg font-semibold">Sunk Cost Fallacy</span>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-100 p-2 rounded-lg mb-2">
                <div className="text-sm">Resources already spent:</div>
                <div className="flex justify-between">
                  <span>Time: 6 months</span>
                  <span>Budget: $50,000</span>
                </div>
              </div>
              <div className="bg-red-50 p-2 rounded-lg">
                <div className="text-sm text-red-600">Evidence of failure:</div>
                <div className="text-xs">Competitors outperforming, negative user feedback, poor metrics</div>
              </div>
            </div>
          </div>
        );
      case "groupthink":
        return (
          <div className="flex flex-col items-center">
            <div className="text-center mb-2">
              <span className="text-lg font-semibold">Groupthink</span>
            </div>
            <div className="relative w-48 h-48">
              <div className="absolute inset-[15%] bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs text-center">Consensus Opinion</span>
              </div>
              <div className="absolute top-2 right-2 bg-yellow-100 p-1 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-[10px] text-center">Silent Dissenter</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-gray-100 p-1 rounded-full w-10 h-10"></div>
              <div className="absolute bottom-8 right-12 bg-gray-100 p-1 rounded-full w-10 h-10"></div>
              <div className="absolute top-10 left-6 bg-gray-100 p-1 rounded-full w-10 h-10"></div>
            </div>
          </div>
        );
      case "clustering":
        return (
          <div className="flex flex-col items-center">
            <div className="text-center mb-2">
              <span className="text-lg font-semibold">Clustering Illusion</span>
            </div>
            <div className="w-full">
              <div className="h-20 bg-white relative">
                <div className="absolute inset-0 overflow-hidden">
                  <svg viewBox="0 0 100 50" className="w-full h-full">
                    <path 
                      d="M0,25 L10,20 L20,22 L30,18 L40,15 L50,10 L60,8 L70,5 L80,3 L90,4 L100,2" 
                      fill="none" 
                      stroke="#4ade80" 
                      strokeWidth="2"
                    />
                    <circle cx="60" cy="8" r="3" fill="#4ade80" />
                    <circle cx="70" cy="5" r="3" fill="#4ade80" />
                    <circle cx="80" cy="3" r="3" fill="#4ade80" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 bg-green-200 rounded-md p-1 text-xs">
                  "Pattern"
                </div>
                <div className="absolute bottom-0 right-0 bg-red-200 rounded-md p-1 text-xs">
                  Randomness
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Brain className="w-32 h-32 mx-auto opacity-80" />;
    }
  };

  return (
    <section className="py-12 px-6 flex flex-col md:flex-row gap-8 items-start justify-between">
      <div className="w-full md:w-3/5 lg:w-2/3">
        <div className="bg-white rounded-xl shadow-xl p-5 md:p-8 relative overflow-hidden pb-24 gradient-border">
          <div className="flex justify-between mb-6 items-center">
            <span className="font-semibold text-sm md:text-base flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700">
                {currentQuestionIndex + 1}
              </span>
              <span>of {questions.length}</span>
            </span>
            <span className="text-sm text-muted-foreground font-medium">
              {Math.round((currentQuestionIndex / questions.length) * 100)}% Complete
            </span>
          </div>
          
          <div className="mb-6 flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <Progress 
              value={timerProgress} 
              className={`h-1.5 ${getTimerColor()} bg-gray-100`} 
            />
            <span className="text-xs font-medium">{timeLeft}s</span>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuizCard
                question={currentQuestion.question}
                options={currentQuestion.options.map(option => option.text)}
                correctAnswer={currentQuestion.options.find(option => option.isCorrect)?.text || ""}
                explanation={currentQuestion.explanation}
                onAnswer={handleAnswer}
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
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
                onClick={handleSkip}
                className="text-muted-foreground hover:text-foreground gap-1"
                size="sm"
              >
                Skip <SkipForward className="w-4 h-4" />
              </Button>
              
              <Button
                variant="default"
                onClick={handleNext}
                className="bg-cognilense-blue text-white hover:bg-blue-600 gap-1"
                size="sm"
              >
                {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"} 
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-2/5 lg:w-1/3 space-y-6 sticky top-24">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">Understanding Cognitive Biases</h3>
          <div className="border border-gray-100 rounded-md p-4 bg-gray-50 mb-4">
            {getBiasIllustration(currentQuestion.type)}
          </div>
          <p className="text-sm text-gray-600">
            Cognitive biases are systematic patterns of deviation from norm or rationality in judgment. 
            Each question in this quiz highlights a different bias that affects our thinking.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="font-medium mb-3">Your Progress</h4>
          <div className="space-y-1">
            {questions.map((_, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2"
              >
                <div 
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    idx === currentQuestionIndex 
                      ? "bg-cognilense-blue text-white" 
                      : idx < currentQuestionIndex 
                        ? answers[idx] === questions[idx].options.find(o => o.isCorrect)?.text
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
                      ? answers[idx] === questions[idx].options.find(o => o.isCorrect)?.text
                        ? "Correct" 
                        : "Incorrect"
                      : "Upcoming"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
