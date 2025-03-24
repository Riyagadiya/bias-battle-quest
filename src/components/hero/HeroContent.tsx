
import { motion } from "framer-motion";
import GradientButton from "../GradientButton";
import AnimatedIcons from "./AnimatedIcons";

interface HeroContentProps {
  isVisible: boolean;
  startQuiz: () => void;
}

const HeroContent = ({ isVisible, startQuiz }: HeroContentProps) => {
  return (
    <div className="max-w-4xl mx-auto text-center pt-8 md:pt-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-domine font-bold text-5xl md:text-6xl lg:text-[64px] leading-[1.4] tracking-[-3%] mb-10"
      >
        Cognitive Biases:
        <br /> 
        <span className="text-foreground">
          How Rational Are You?
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-inter font-normal text-xl md:text-2xl text-[24px] leading-normal tracking-tight text-muted-foreground max-w-2xl mx-auto mb-12"
      >
        Cognilense brings the power of cognitive biases to life. Take this quiz to test your 
        rational thinking and uncover the hidden biases that shape your decisions.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
        className="flex justify-center mt-16"
      >
        <GradientButton onClick={startQuiz} className="text-base md:text-lg px-8 py-4">
          Take the Challenge
        </GradientButton>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-10"
      >
        <AnimatedIcons />
      </motion.div>
    </div>
  );
};

export default HeroContent;
