
import { useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, RotateCcw, Award, Share2, Code, Check, ArrowRight, ArrowUpRight, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import ResultsSummary from "./results/ResultsSummary";
import QuestionSummaryList from "./results/QuestionSummaryList";
import GradientButton from "./GradientButton";
import { Separator } from "@/components/ui/separator";

const ResultsSection = () => {
  const { status, score, questions, answers, restartQuiz } = useQuiz();
  
  if (status !== "active") return null;
  
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
  const answeredQuestions = answers.filter(a => a !== null && a !== "skipped").length;
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  
  let resultMessage = "";
  let resultSubtitle = "";
  
  if (correctAnswers === 0) {
    resultMessage = "Lost in Bias!";
    resultSubtitle = "Every expert starts somewhere. You can beat it—one bias at a time.";
  } else if (correctAnswers >= 1 && correctAnswers <= 2) {
    resultMessage = "Cognitive Fog Ahead!";
    resultSubtitle = "You're beginning to notice the patterns. Keep going—clarity is closer than you think!";
  } else if (correctAnswers >= 3 && correctAnswers <= 5) {
    resultMessage = "Getting Wiser!";
    resultSubtitle = "You're on the path to sharper thinking. Stay mindful, stay curious!";
  } else if (correctAnswers >= 6 && correctAnswers <= 10) {
    resultMessage = "Sharp & Unbiased!";
    resultSubtitle = "Impressive awareness! Your clear thinking is a skill—keep sharpening it.";
  }

  const shareQuiz = () => {
    const shareUrl = window.location.origin;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Quiz URL copied to clipboard!");
  };

  return (
    <section className="py-12 md:py-24 px-6 md:px-8 min-h-screen flex items-center">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Changed column span from md:col-span-2 to md:col-span-1 to make it narrower */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full relative">
              <div className="px-6 py-8 md:p-10 relative z-10">
                {/* Results Summary in the center with animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col items-center mb-6"
                >
                  {/* Score Ring */}
                  <ResultsSummary 
                    percentage={percentage} 
                    correctAnswers={correctAnswers} 
                    totalQuestions={questions.length} 
                    resultMessage={resultMessage}
                    showCorrectCount={false}
                  />
                  
                  {/* Result Message and subtitle below the ring */}
                  <div className="text-center mt-4">
                    <h3 className="text-2xl md:text-3xl font-domine font-medium">
                      {resultMessage}
                    </h3>
                    <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
                      {resultSubtitle}
                    </p>
                  </div>
                  
                  {/* Stats with subtle divider */}
                  <div className="flex items-center justify-center mt-6 p-4 border-t border-gray-100 w-full max-w-md">
                    <div className="flex-1 text-center">
                      <p className="text-xl font-bold">{answeredQuestions}/{questions.length}</p>
                      <p className="text-xs text-muted-foreground">Answered questions</p>
                    </div>
                    <Separator orientation="vertical" className="mx-4 h-10 bg-gray-200" />
                    <div className="flex-1 text-center">
                      <p className="text-xl font-bold">{correctAnswers}/{questions.length}</p>
                      <p className="text-xs text-muted-foreground">Correct answers</p>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons centered below the result message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
                >
                  <GradientButton onClick={restartQuiz} className="group" icon={false}>
                    <span>Try Again</span>
                    <RotateCcw size={18} className="transition-transform duration-300 group-hover:rotate-180" />
                  </GradientButton>
                  
                  <GradientButton onClick={shareQuiz} className="group" icon={false}>
                    <span>Share Quiz</span>
                    <Share2 size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </GradientButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Changed column span from md:col-span-1 to md:col-span-2 to make it wider */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full relative">
              <div className="flex flex-col h-full relative z-10">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h3 className="font-domine text-lg font-semibold">Grab your cards now!</h3>
                </div>
                
                <div className="p-6 hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-cognilense-orange/10 flex items-center justify-center">
                      <Code size={18} className="text-cognilense-orange" />
                    </div>
                    <div>
                      <h4 className="font-domine font-semibold">Apply exclusive code</h4>
                      <p className="text-xs text-muted-foreground">25% off on Cognilense cards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex-1 bg-cognilense-background px-4 py-2 rounded border shadow-sm font-medium tracking-wider text-center">
                      COGNIQUIZ25
                    </div>
                    <CopyButton code="COGNIQUIZ25" />
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-cognilense-blue/10 flex items-center justify-center">
                      <Award size={18} className="text-cognilense-blue" />
                    </div>
                    <div>
                      <h4 className="font-domine font-semibold">Discover the full potential of CogniLense!</h4>
                    </div>
                  </div>
                  
                  <div className="mt-3 mb-1">
                    <p className="text-sm font-medium mb-1">Concepts, Ideas & Perspectives</p>
                    <p className="text-sm">that open up your mind to look at problems and situations in products, business and life in general.</p>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <a 
                      href="/card-decks"
                      className="w-full flex items-center justify-center gap-2 text-white bg-cognilense-blue hover:bg-cognilense-blue/90 hover:shadow-lg hover:scale-[1.02] rounded-full py-3 px-6 transition-all font-medium"
                    >
                      Buy Card decks
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-cognilense-background rounded-xl shadow-lg p-6 md:p-8 relative">
              <div className="relative z-10">
                <h3 className="font-domine text-xl font-semibold mb-4">Your Answer Summary</h3>
                <QuestionSummaryList answersArray={answersArray} questions={questions} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
        <Copy size={18} />
      )}
    </Button>
  );
};

export default ResultsSection;
