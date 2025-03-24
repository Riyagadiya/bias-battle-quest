
import { useState, useEffect, useRef } from "react";
import GradientButton from "./GradientButton";
import { motion } from "framer-motion";

const Hero = ({ startQuiz }: { startQuiz: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center py-24 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Wave background image */}
      <div className="absolute inset-0 bg-[#f9f9f9] opacity-60">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/lovable-uploads/e7e51539-77f2-43b9-920c-2c0bf8627640.png')",
          }}
        ></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-domine font-bold text-5xl md:text-6xl lg:text-[64px] leading-normal tracking-[-3%] mb-6"
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
            className="font-inter font-normal text-xl md:text-2xl text-[24px] leading-normal tracking-tight text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Cognilense brings the power of cognitive biases to life. Take this quiz to test your 
            rational thinking and uncover the hidden biases that shape your decisions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
            className="flex justify-center"
          >
            <GradientButton onClick={startQuiz} className="text-base md:text-lg px-8 py-4">
              Take the Challenge
            </GradientButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

