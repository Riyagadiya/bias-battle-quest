
import { motion } from "framer-motion";
import GradientButton from "./GradientButton";

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero = ({ onStartQuiz }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-cognilense-background py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-domine font-bold mb-4 leading-tight">
              Uncover Your <span className="text-cognilense-blue">Cognitive Biases</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700 max-w-lg mx-auto md:mx-0">
              Take our quiz to learn how cognitive biases influence your thinking and decision-making.
            </p>
            <div className="mb-8">
              <GradientButton onClick={onStartQuiz}>
                Take the Challenge
              </GradientButton>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm text-gray-600">
              <span className="bg-white px-3 py-1.5 rounded-full shadow-sm">10 Questions</span>
              <span className="bg-white px-3 py-1.5 rounded-full shadow-sm">5 Minute Quiz</span>
              <span className="bg-white px-3 py-1.5 rounded-full shadow-sm">Instant Results</span>
            </div>
          </motion.div>
          
          {/* Right side - Brain image with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="h-full flex justify-center items-center">
              <img
                src="/lovable-uploads/edf5b2d2-b28c-4ff8-9e6a-458af9b1b8f8.png"
                alt="Cognilense Brain Visualization"
                className="w-4/5 md:w-full max-w-lg mx-auto"
              />
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-cognilense-blue opacity-60 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-purple-400 opacity-60 animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute bottom-1/3 right-1/3 w-5 h-5 rounded-full bg-indigo-400 opacity-60 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
