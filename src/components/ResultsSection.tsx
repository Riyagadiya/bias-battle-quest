
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import ResultsSummary from "./results/ResultsSummary";
import DiscountSection from "./results/DiscountSection";
import ActionButtons from "./results/ActionButtons";
import QuestionSummaryList from "./results/QuestionSummaryList";

const ResultsSection = () => {
  const { status, score, questions, answers, restartQuiz } = useQuiz();
  
  if (status !== "complete") return null;
  
  // Convert the answers record to an array for easier processing
  const answersArray = Object.entries(answers).map(([questionIndex, answer]) => {
    const index = parseInt(questionIndex);
    const question = questions[index];
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

  return (
    <section className="py-24 px-6 md:px-8 min-h-screen flex items-center relative">
      <div className="absolute inset-0 wave-pattern"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
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
            
            <ResultsSummary 
              percentage={percentage} 
              correctAnswers={correctAnswers} 
              totalQuestions={questions.length} 
              resultMessage={resultMessage} 
              resultDescription={resultDescription} 
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
          
          <div className="px-6 py-8 bg-gray-50 border-t">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-domine font-semibold text-xl mb-6">Common Cognitive Biases</h3>
              <QuestionSummaryList answersArray={answersArray} questions={questions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
