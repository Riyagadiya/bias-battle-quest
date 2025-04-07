
import { useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, RotateCcw, Award, Share2, Code, Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import ResultsSummary from "./results/ResultsSummary";
import QuestionSummaryList from "./results/QuestionSummaryList";
import GradientButton from "./GradientButton";

const ResultsSection = () => {
  const { status, score, questions, answers, restartQuiz } = useQuiz();
  
  if (status !== "active") return null;
  
  // Process the answers array for easier handling
  const answersArray = questions.map((question, index) => {
    const answer = answers[index];
    const isCorrect = answer === question.options.find(option => option.isCorrect)?.text;
    
    return {
      questionIndex: index,
      selectedOption: answer === "skipped" ? null : answer,
      isCorrect
    };
  });
  
  const correctAnswers = answersArray.filter(a => a.isCorrect).length;
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  
  let resultMessage = "";
  
  // Updated result messages based on the new ranges
  if (correctAnswers === 0) {
    resultMessage = "Lost in Bias!";
  } else if (correctAnswers >= 1 && correctAnswers <= 2) {
    resultMessage = "Cognitive Fog Ahead!";
  } else if (correctAnswers >= 3 && correctAnswers <= 5) {
    resultMessage = "Getting Wiser!";
  } else if (correctAnswers >= 6 && correctAnswers <= 10) {
    resultMessage = "Sharp & Unbiased!";
  }

  // Count answered questions (not skipped or null)
  const answeredQuestions = answers.filter(a => a !== null && a !== "skipped").length;

  // Share quiz function
  const shareQuiz = () => {
    const shareUrl = window.location.origin;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Quiz URL copied to clipboard!");
  };

  return (
    <section className="py-12 md:py-24 px-6 md:px-8 min-h-screen flex items-center">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Box 1: Main results box - Left side */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="px-6 py-8 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-8"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h2 className="text-3xl md:text-4xl font-domine font-bold">
                      Your Results
                    </h2>
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20, 
                        delay: 0.7 
                      }}
                    >
                      <PartyPopper className="text-cognilense-orange" size={28} />
                    </motion.div>
                  </div>
                  <p className="text-muted-foreground">
                    You answered {answeredQuestions} out of {questions.length} questions
                  </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Flipped illustration on the left side */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center items-center order-2 md:order-1"
                  >
                    <img 
                      src="/lovable-uploads/d3ef2faf-d5d2-43fe-a441-14f53de146ae.png" 
                      alt="Brain illustration" 
                      className="max-w-full h-auto max-h-[250px] object-contain transform scale-x-[-1]"
                    />
                  </motion.div>
                  
                  {/* Results info on the right side */}
                  <div className="flex flex-col justify-center order-1 md:order-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-domine font-medium text-center mb-4">
                        {resultMessage}
                      </h3>
                      
                      <ResultsSummary 
                        percentage={percentage} 
                        correctAnswers={correctAnswers} 
                        totalQuestions={questions.length} 
                        resultMessage={resultMessage} 
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Updated Action Buttons row with GradientButton component */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
                >
                  {/* Try Again Button - With RotateCcw icon */}
                  <GradientButton onClick={restartQuiz} className="group">
                    <span>Try Again</span>
                    <RotateCcw size={18} className="transition-transform duration-300 group-hover:rotate-180" />
                  </GradientButton>
                  
                  {/* Share Quiz Button - With Share2 icon */}
                  <GradientButton onClick={shareQuiz} className="group">
                    <span>Share Quiz</span>
                    <Share2 size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </GradientButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Box 2: Improved Bento Box with clearer CTAs - Right side */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="flex flex-col h-full">
                {/* Header Section */}
                <div className="px-6 py-4 border-b border-gray-100">
                  <h3 className="font-domine text-lg font-semibold">Take Your Learning Further</h3>
                  <p className="text-sm text-muted-foreground">Use these exclusive resources</p>
                </div>
                
                {/* Discount Code Section - Enhanced */}
                <div className="p-6 hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-cognilense-orange/10 flex items-center justify-center">
                      <Code size={18} className="text-cognilense-orange" />
                    </div>
                    <div>
                      <h4 className="font-domine font-semibold">Exclusive Code</h4>
                      <p className="text-xs text-muted-foreground">25% off Cognilense cards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex-1 bg-cognilense-background px-4 py-2 rounded border shadow-sm font-medium tracking-wider text-center">
                      COGNIQUIZ25
                    </div>
                    <CopyButton code="COGNIQUIZ25" />
                  </div>
                </div>
                
                {/* Get Cards Section - Enhanced with clearer CTA */}
                <div className="p-6 flex-grow flex flex-col hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-cognilense-blue/10 flex items-center justify-center">
                      <Award size={18} className="text-cognilense-blue" />
                    </div>
                    <div>
                      <h4 className="font-domine font-semibold">Bias Cards Deck</h4>
                      <p className="text-xs text-muted-foreground">Master all 24 cognitive biases</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 mb-1">
                    <p className="text-sm">Learn to identify biases in your daily life with our beautifully designed physical cards.</p>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <a 
                      href="https://www.amazon.in/dp/8197752834?ref=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&ref_=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&social_share=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&bestFormat=true"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-full flex items-center justify-center gap-2 text-white bg-cognilense-blue hover:bg-cognilense-blue/90 rounded-full py-3 px-6 transition-colors font-medium"
                    >
                      Explore CogniLense
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Box 3: Question summary - Bottom full width */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-cognilense-background rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="font-domine text-xl font-semibold mb-4">Your Answer Summary</h3>
              <QuestionSummaryList answersArray={answersArray} questions={questions} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Copy Button Component
const CopyButton = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const copyDiscountCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    toast.success("Discount code copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  return (
    <Button 
      onClick={copyDiscountCode}
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-full"
      aria-label="Copy discount code"
    >
      {isCopied ? (
        <Check size={18} className="text-green-600" />
      ) : (
        <Code size={18} />
      )}
    </Button>
  );
};

export default ResultsSection;
