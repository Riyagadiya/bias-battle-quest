
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
            backgroundImage: "url('/lovable-uploads/54bf67b5-2084-4989-bca5-671388e54ae4.png')",
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
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 60 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 md:mt-20 max-w-5xl mx-auto"
        >
          <div className="relative mx-auto w-full max-w-3xl aspect-[16/9]">
            <div className="absolute -inset-1 bg-gradient-to-r from-cognilense-green via-cognilense-yellow to-cognilense-blue rounded-lg opacity-30 blur-xl"></div>
            <div className="relative bg-white bg-opacity-80 backdrop-blur rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-[16/9] flex items-center justify-center">
                <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
                    {[
                      { color: "bg-cognilense-green", text: "Confirmation Bias" },
                      { color: "bg-cognilense-yellow", text: "Dunning-Kruger Effect" },
                      { color: "bg-cognilense-blue", text: "Anchoring Bias" },
                      { color: "bg-cognilense-orange", text: "Availability Heuristic" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className="group flex flex-col items-center text-center"
                      >
                        <div 
                          className={`w-16 h-24 md:w-20 md:h-28 ${item.color} bg-opacity-20 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105 duration-300`}
                        >
                          <div className="absolute inset-0.5 rounded-md bg-white bg-opacity-60"></div>
                          <div className={`w-3 h-10 ${item.color} rounded-full absolute top-3 left-3`}></div>
                        </div>
                        <span className="font-inter text-xs md:text-sm font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
