import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";
import Header from "@/components/Header";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Quiz = () => {
  const navigate = useNavigate();
  const { 
    startQuiz, 
    quizCompleted, 
    quizStarted,
    setQuizStarted,
    questions
  } = useQuiz();
  
  const [isInitializing, setIsInitializing] = useState(true);
  const [showPreparation, setShowPreparation] = useState(true);
  
  useEffect(() => {
    console.log("Quiz component rendering with questions:", questions?.length);
  }, [questions]);
  
  useEffect(() => {
    if (quizCompleted) {
      navigate("/results");
      return;
    }

    const initializeQuiz = async () => {
      setIsInitializing(true);
      try {
        await startQuiz();
        // After startQuiz completes, keep showing preparation screen
        setIsInitializing(false);
      } catch (error) {
        console.error("Error starting quiz:", error);
        toast.error("There was an error starting the quiz");
        navigate("/");
      }
    };
    
    if (!quizStarted) {
      initializeQuiz();
    } else {
      setIsInitializing(false);
      setShowPreparation(false);
    }
  }, [quizCompleted, navigate, startQuiz, setQuizStarted, quizStarted]);

  const handleStartQuiz = () => {
    setShowPreparation(false);
    setQuizStarted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-cognilense-background">
      <Header />
      
      <main className="flex-grow pt-20 bg-cognilense-background bg-wave-pattern">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-4"
        >
          {isInitializing ? (
            <div className="py-12 px-6 text-center bg-white rounded-lg shadow-md max-w-md mx-auto">
              <div className="spinner-container mx-auto mb-6">
                <div className="spinner"></div>
                <div className="spinner"></div>
                <div className="spinner"></div>
                <div className="spinner"></div>
              </div>
              <h2 className="text-2xl font-domine font-bold mb-4">Loading your quiz...</h2>
              <p className="text-gray-600 font-worksans">Preparing your cognitive bias challenge</p>
            </div>
          ) : showPreparation ? (
            <div className="py-12 px-6 text-center bg-white rounded-lg shadow-md max-w-xl mx-auto">
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-8"
              >
                <h2 className="text-3xl font-domine font-bold mb-6">Prepare Your Quiz</h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-700">You're about to start your cognitive bias challenge! This quiz will test your understanding of various cognitive biases.</p>
                  <ul className="text-left text-gray-600 ml-8 list-disc space-y-2">
                    <li>You'll have 30 seconds for each question</li>
                    <li>Answer carefully to earn your discount on card decks</li>
                    <li>Learn about different cognitive biases</li>
                  </ul>
                </div>
                <button 
                  onClick={handleStartQuiz}
                  className="px-10 py-3 bg-cognilense-blue text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
                >
                  Begin Challenge
                </button>
              </motion.div>
            </div>
          ) : (
            <QuizSection />
          )}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
