
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import GradientButton from "./GradientButton";
import { CheckCircle, XCircle, ExternalLink, Award, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ResultsSection = () => {
  const { status, score, questions, answers, restartQuiz } = useQuiz();
  const [isCopied, setIsCopied] = useState(false);
  
  if (status !== "complete") return null;
  
  // Convert the answers record to an array for easier processing
  const answersArray = Object.entries(answers).map(([questionIndex, answer]) => {
    const index = parseInt(questionIndex);
    const question = questions[index];
    const isCorrect = answer === question.correctAnswer;
    
    return {
      questionIndex: index,
      selectedOption: answer === "skipped" ? null : answer,
      isCorrect
    };
  });
  
  const correctAnswers = answersArray.filter(a => a.isCorrect).length;
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  
  let resultMessage = "";
  let resultDescription = "";
  
  if (percentage >= 80) {
    resultMessage = "You have an analytical mind!";
    resultDescription = "You're exceptionally good at recognizing cognitive biases and making rational decisions. Your understanding of how the mind works gives you an advantage in critical thinking.";
  } else if (percentage >= 60) {
    resultMessage = "You think clearly!";
    resultDescription = "You have a good understanding of cognitive biases and how they influence decision-making. With a bit more practice, you'll master the art of rational thinking.";
  } else if (percentage >= 40) {
    resultMessage = "You're on the right track!";
    resultDescription = "You have a basic understanding of cognitive biases, but there's room for improvement. Learning more about these biases will help you make better decisions.";
  } else {
    resultMessage = "Time to learn more!";
    resultDescription = "We all fall prey to cognitive biases. The good news is that awareness is the first step toward improvement. Keep learning about these biases to enhance your critical thinking.";
  }
  
  const discountCode = "COGNIQUIZ25";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountCode);
    setIsCopied(true);
    toast.success("Discount code copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 md:px-8 min-h-screen flex items-center relative">
      <div className="absolute inset-0 wave-pattern"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-domine font-bold mb-4">
                Your Results
              </h2>
              <p className="text-muted-foreground">
                See how well you understand cognitive biases
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center mb-10"
            >
              <div className="relative w-40 h-40 mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#f1f1f1" 
                    strokeWidth="10" 
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="10" 
                    strokeDasharray="282.7" 
                    strokeDashoffset={282.7 - (282.7 * percentage / 100)}
                    transform="rotate(-90 50 50)" 
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#71BD45" />
                      <stop offset="50%" stopColor="#F7D465" />
                      <stop offset="100%" stopColor="#518FF7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">{percentage}%</span>
                  <span className="text-sm text-muted-foreground">
                    {correctAnswers}/{questions.length} correct
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-domine font-medium mb-3">
                {resultMessage}
              </h3>
              <p className="text-center text-muted-foreground max-w-md">
                {resultDescription}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t pt-8"
            >
              <div className="bg-gradient-to-r from-cognilense-green/10 via-cognilense-yellow/10 to-cognilense-blue/10 p-6 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={20} className="text-cognilense-orange" />
                      <h4 className="font-domine font-semibold">Exclusive Discount</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">Use this code for 25% off Cognilense card decks</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="bg-white px-4 py-2 rounded border shadow-sm font-medium tracking-wider">
                      {discountCode}
                    </div>
                    <button 
                      onClick={copyToClipboard}
                      className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                      aria-label="Copy discount code"
                    >
                      {isCopied ? (
                        <CheckCircle size={20} className="text-green-600" />
                      ) : (
                        <Copy size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="https://www.amazon.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-lg border hover:border-cognilense-blue hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cognilense-blue/10 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9V7C17 4.2 14.8 2 12 2C9.2 2 7 4.2 7 7V9" stroke="#518FF7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14V17" stroke="#518FF7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 22H16C20 22 21 21 21 17V14C21 10 20 9 16 9H8C4 9 3 10 3 14V17C3 21 4 22 8 22Z" stroke="#518FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-domine font-semibold">Get Your Cards</h4>
                      <p className="text-sm text-muted-foreground">Cognitive bias card deck</p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-cognilense-blue transition-transform group-hover:translate-x-1" />
                </a>
                
                <button 
                  onClick={restartQuiz}
                  className="group flex items-center justify-between p-4 rounded-lg border hover:border-cognilense-green hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cognilense-green/10 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44" stroke="#71BD45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12C2 17.52 6.48 22 12 22" stroke="#71BD45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-domine font-semibold">Try Again</h4>
                      <p className="text-sm text-muted-foreground">Restart the quiz</p>
                    </div>
                  </div>
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    stroke="#71BD45"
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="px-6 py-5 bg-gray-50 border-t">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-domine font-semibold mb-4">Question Summary</h3>
              <div className="space-y-3">
                {answersArray.map((answer, index) => (
                  <div 
                    key={`summary-${index}`}
                    className="flex items-start gap-3 p-3 rounded-md bg-white border"
                  >
                    {answer.isCorrect ? (
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">
                        {questions[answer.questionIndex].question}
                      </p>
                      {answer.selectedOption !== null ? (
                        <p className="text-sm text-muted-foreground mt-1">
                          Your answer: {questions[answer.questionIndex].options[answer.selectedOption]}
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground mt-1">
                          Skipped
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
