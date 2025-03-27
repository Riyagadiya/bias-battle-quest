
import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";
import { useQuiz } from "@/context/QuizContext";
import ResultsSummary from "./results/ResultsSummary";
import DiscountSection from "./results/DiscountSection";
import ActionButtons from "./results/ActionButtons";
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
            className="md:col-span-2 md:row-span-2"
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
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6"
                >
                  <h3 className="text-2xl md:text-3xl font-domine font-medium text-center mb-8">
                    {resultMessage}
                  </h3>
                </motion.div>
                
                <ResultsSummary 
                  percentage={percentage} 
                  correctAnswers={correctAnswers} 
                  totalQuestions={questions.length} 
                  resultMessage={resultMessage} 
                />
              </div>
            </div>
          </motion.div>
          
          {/* Box 2: Action box - Top right */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="px-6 py-8">
                <DiscountSection />
                <div className="mt-8">
                  <ActionButtons restartQuiz={restartQuiz} />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Box 3: Question summary - Bottom right */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-cognilense-background rounded-xl shadow-lg p-6 md:p-8 h-full">
              <h3 className="font-domine text-xl font-semibold mb-4">Your Answer Summary</h3>
              <QuestionSummaryList answersArray={answersArray} questions={questions} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
