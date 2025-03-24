
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BackgroundLayers from "./hero/BackgroundLayers";
import HeroContent from "./hero/HeroContent";
import ExpertLens from "./hero/ExpertLens";
import BiasSneakPeek from "./hero/BiasSneakPeek";

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
      className="min-h-screen flex items-center justify-center py-16 px-6 md:px-8 relative overflow-hidden"
    >
      <BackgroundLayers />
      
      <div className="container mx-auto relative">
        <HeroContent isVisible={isVisible} startQuiz={startQuiz} />
        <ExpertLens isVisible={isVisible} />
        <BiasSneakPeek isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Hero;
