
import { useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, Code, RotateCcw, Award, Share2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { useQuiz } from "@/context/QuizContext";
import ResultsSummary from "./results/ResultsSummary";
import QuestionSummaryList from "./results/QuestionSummaryList";

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
                  <div className="flex flex-col justify-center">
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
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center items-center"
                  >
                    <img 
                      src="/public/lovable-uploads/d3ef2faf-d5d2-43fe-a441-14f53de146ae.png" 
                      alt="Brain illustration" 
                      className="max-w-full h-auto max-h-[250px] object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Box 2: Bento Box Action Sections - Right side */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="flex flex-col divide-y">
                {/* Discount Code Section */}
                <BentoSectionDiscountCode />
                
                {/* Try Again Section */}
                <BentoSectionTryAgain restartQuiz={restartQuiz} />
                
                {/* Get Cards Section */}
                <BentoSectionGetCards />
                
                {/* Share Quiz Section */}
                <BentoSectionShareQuiz />
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

// Bento Box Section: Discount Code
const BentoSectionDiscountCode = () => {
  const [isCopied, setIsCopied] = useState(false);
  const discountCode = "COGNIQUIZ25";
  
  const copyDiscountCode = () => {
    navigator.clipboard.writeText(discountCode);
    setIsCopied(true);
    toast.success("Discount code copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code size={18} className="text-cognilense-orange" />
          <h4 className="font-domine font-semibold">Exclusive Code</h4>
        </div>
        <button 
          onClick={copyDiscountCode}
          className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Copy discount code"
        >
          {isCopied ? (
            <Code size={18} className="text-green-600" />
          ) : (
            <Code size={18} />
          )}
        </button>
      </div>
      <div className="mt-2 flex items-center">
        <div className="bg-cognilense-background px-3 py-1.5 rounded border text-sm shadow-sm font-medium tracking-wider">
          {discountCode}
        </div>
        <span className="ml-2 text-xs text-muted-foreground">25% off cards</span>
      </div>
    </div>
  );
};

// Bento Box Section: Try Again
const BentoSectionTryAgain = ({ restartQuiz }: { restartQuiz: () => void }) => {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RotateCcw size={18} className="text-cognilense-green" />
          <h4 className="font-domine font-semibold">Try Again</h4>
        </div>
        <button 
          onClick={restartQuiz}
          className="text-xs font-medium text-cognilense-green py-1.5 px-3 bg-cognilense-green/10 border border-cognilense-green/20 rounded-md hover:bg-cognilense-green/20 transition-colors"
        >
          Restart Quiz
        </button>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Ready to test your knowledge again?
      </p>
    </div>
  );
};

// Bento Box Section: Get Cards
const BentoSectionGetCards = () => {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award size={18} className="text-cognilense-blue" />
          <h4 className="font-domine font-semibold">Get Your Cards</h4>
        </div>
        <a 
          href="https://www.amazon.in/dp/8197752834?ref=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&ref_=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&social_share=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&bestFormat=true"
          target="_blank"
          rel="noopener noreferrer" 
          className="flex items-center gap-1 text-xs font-medium text-cognilense-blue py-1.5 px-3 bg-cognilense-blue/10 border border-cognilense-blue/20 rounded-md hover:bg-cognilense-blue/20 transition-colors"
        >
          Buy Now
          <ExternalLink size={14} />
        </a>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Get our cognitive bias cards deck
      </p>
    </div>
  );
};

// Bento Box Section: Share Quiz
const BentoSectionShareQuiz = () => {
  const shareQuiz = () => {
    const shareUrl = window.location.origin;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Quiz URL copied to clipboard!");
  };
  
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Share2 size={18} className="text-cognilense-orange" />
          <h4 className="font-domine font-semibold">Share the Quiz</h4>
        </div>
        <button 
          onClick={shareQuiz}
          className="text-xs font-medium text-cognilense-orange py-1.5 px-3 bg-cognilense-orange/10 border border-cognilense-orange/20 rounded-md hover:bg-cognilense-orange/20 transition-colors"
        >
          Copy Link
        </button>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Share with friends and colleagues
      </p>
    </div>
  );
};

export default ResultsSection;
