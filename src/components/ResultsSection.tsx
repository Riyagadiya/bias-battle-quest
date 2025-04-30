
import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Share2 } from "lucide-react";
import { toast } from "sonner";
import { useQuiz } from "@/context/QuizContext";
import ResultsSummary from "./results/ResultsSummary";
import QuestionSummaryList from "./results/QuestionSummaryList";
import GradientButton from "./GradientButton";
import { Separator } from "@/components/ui/separator";
import ResultsActionTabs from "./results/ResultsActionTabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResultsSection = () => {
  const { status, score, questions, answers, restartQuiz } = useQuiz();
  const [activeTab, setActiveTab] = useState("summary");
  
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
  
  // Set result message and subtitle based on percentage
  if (percentage === 0) {
    resultMessage = "Lost in Bias!";
    resultSubtitle = "Every expert starts somewhere. Now that you see it, you can beat it—one bias at a time.";
  } else if (percentage >= 1 && percentage <= 20) {
    resultMessage = "Cognitive Fog Ahead!";
    resultSubtitle = "You're beginning to notice the patterns. Keep going—clarity is closer than you think!";
  } else if (percentage >= 30 && percentage <= 50) {
    resultMessage = "Getting Wiser!";
    resultSubtitle = "You're on the path to sharper thinking. Stay mindful, stay curious!";
  } else if (percentage >= 60 && percentage <= 100) {
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
                    <p className="text-sm text-muted-foreground mt-2">
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

                {/* Action Buttons stacked vertically */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col gap-4 mt-8"
                >
                  <GradientButton onClick={restartQuiz} className="group w-full" icon={false}>
                    <span>Try Again</span>
                    <RotateCcw size={18} className="transition-transform duration-300 group-hover:rotate-180" />
                  </GradientButton>
                  
                  <GradientButton onClick={shareQuiz} className="group w-full" icon={false}>
                    <span>Share Quiz</span>
                    <Share2 size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </GradientButton>
                </motion.div>

                {/* Answer Summary Section - Now placed below buttons but styled like before */}
                <div className="mt-8">
                  <h3 className="font-domine text-xl font-semibold mb-4">Your Answer Summary</h3>
                  <div className="max-h-[300px] overflow-y-auto pr-2">
                    <QuestionSummaryList answersArray={answersArray} questions={questions} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* New tabbed interface with card decks */}
            <ResultsActionTabs />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
