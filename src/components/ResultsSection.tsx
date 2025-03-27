
import { motion } from "framer-motion";
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
  
  if (percentage >= 80) {
    resultMessage = "You have an analytical mind!";
  } else if (percentage >= 60) {
    resultMessage = "You think clearly!";
  } else if (percentage >= 40) {
    resultMessage = "You're on the right track!";
  } else {
    resultMessage = "Time to learn more!";
  }

  // Count answered questions (not skipped or null)
  const answeredQuestions = answers.filter(a => a !== null && a !== "skipped").length;

  return (
    <section className="py-24 px-6 md:px-8 min-h-screen flex items-center">
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
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
                  You answered {answeredQuestions} out of {questions.length} questions
                </p>
              </motion.div>
              
              <ResultsSummary 
                percentage={percentage} 
                correctAnswers={correctAnswers} 
                totalQuestions={questions.length} 
                resultMessage={resultMessage} 
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="border-t pt-8"
              >
                <DiscountSection />
                
                <ActionButtons restartQuiz={restartQuiz} />
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-cognilense-background rounded-xl shadow-lg p-6 md:p-10"
          >
            <QuestionSummaryList answersArray={answersArray} questions={questions} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
