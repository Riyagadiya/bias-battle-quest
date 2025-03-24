
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

  // Cognitive bias cards data
  const biasCards = [
    {
      title: "Framing bias",
      description: "Equivalent information can be more or less attractive depending on how it is presented, influencing our decisions.",
      image: "/lovable-uploads/127df004-c4c0-4733-a1a1-511e730bbc3b.png"
    },
    {
      title: "Recall bias",
      description: "Individuals do not accurately remember past events or experiences or leave out details while reporting about them.",
      image: "/lovable-uploads/76228625-2a1b-462b-b2f4-d3f95a6480d7.png"
    },
    {
      title: "Belief Bias",
      description: "We are more likely to accept the fact of something if it matches our pre-existing beliefs.",
      image: "/lovable-uploads/4f5494bd-d6dc-4ce4-a704-c17e765e9e3c.png"
    },
    {
      title: "Groupthink bias",
      description: "A group of individuals reaches a consensus without critical reasoning or evaluation of the consequences or alternatives, simply doing or agreeing because everyone else is.",
      image: "/lovable-uploads/5d61ea8b-bd0c-4768-a511-34a2616f81b9.png"
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center py-24 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Background with wave pattern and gradient dissolve */}
      <div className="absolute inset-0 bg-[#f9f9f9]">
        <div 
          className="absolute inset-0 bg-no-repeat bg-top"
          style={{
            backgroundImage: "url('/lovable-uploads/0e279057-67c4-4f2e-ba37-277f234ea783.png')",
            backgroundSize: "100% auto",
            filter: "grayscale(100%) opacity(0.6)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))"
          }}
        ></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center pt-10 md:pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-domine font-bold text-5xl md:text-6xl lg:text-[64px] leading-[1.4] tracking-[-3%] mb-8"
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
          className="mt-48 md:mt-64 lg:mt-80 max-w-6xl mx-auto"
        >
          <h3 className="font-domine font-bold text-3xl md:text-[40px] leading-[58px] tracking-[-3%] text-center mb-10">
            Sneak Peak into Cognitive Biases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {biasCards.map((card, index) => (
              <motion.div
                key={`bias-card-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="overflow-hidden rounded-lg shadow-lg h-full transition-transform duration-300 hover:scale-[1.02]">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
