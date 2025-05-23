import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Target, Zap, ShoppingBag } from "lucide-react";
import { useQuiz } from "@/context/QuizContext";
import { toast } from "sonner";
import GradientButton from "./GradientButton";
const Hero = () => {
  const {
    startQuiz
  } = useQuiz();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  const handleStartQuiz = () => {
    try {
      toast.success("Starting quiz challenge!");
      navigate("/quiz");
    } catch (error) {
      console.error("Error navigating to quiz:", error);
      toast.error("Couldn't start the quiz. Please try again.");
    }
  };
  const handleBuyCardDecks = () => {
    // Clear any quiz-related discount flags for direct navigation
    localStorage.removeItem("quizCompletedDiscount");
    localStorage.removeItem("discountEarnedThroughQuiz");
    navigate("/card-decks");
  };
  const biasCards = [{
    title: "Framing bias",
    description: "Equivalent information can be more or less attractive depending on how it's presented, influencing our decisions.",
    image: "/lovable-uploads/127df004-c4c0-4733-a1a1-511e730bbc3b.png"
  }, {
    title: "Recall bias",
    description: "Individuals do not accurately remember past events or experiences or leave out details while reporting about them.",
    image: "/lovable-uploads/76228625-2a1b-462b-b2f4-d3f95a6480d7.png"
  }, {
    title: "Belief Bias",
    description: "We are more likely to accept the fact of something if it matches our pre-existing beliefs.",
    image: "/lovable-uploads/4f5494bd-d6dc-4ce4-a704-c17e765e9e3c.png"
  }, {
    title: "Groupthink bias",
    description: "A group of individuals reaches a consensus without critical reasoning or evaluation of the consequences or alternatives, simply doing or agreeing because everyone else is.",
    image: "/lovable-uploads/5d61ea8b-bd0c-4768-a511-34a2616f81b9.png"
  }];
  return <section ref={heroRef} className="min-h-screen flex items-center justify-center py-16 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f9f9f9]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
        backgroundImage: "url('/lovable-uploads/151f7968-44c7-4234-837a-9cbded9c6f9e.png')"
      }}></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center pt-8 md:pt-12">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 30
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="font-domine font-bold md:text-6xl lg:text-[64px] leading-[1.4] tracking-[-3%] mb-10 text-3xl">
            Cognitive Biases:
            <br /> 
            <span className="text-foreground">
              How Rational Are You?
            </span>
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 40
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="font-inter font-normal text-xl md:text-2xl text-[24px] leading-normal tracking-tight text-muted-foreground max-w-2xl mx-auto mb-12">
            Cognilense brings the power of cognitive biases to life. Take this quiz to test your 
            rational thinking and uncover the hidden biases that shape your decisions.
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.9
        }} transition={{
          duration: 0.5,
          delay: 0.6,
          type: "spring"
        }} className="flex flex-col items-center gap-4 mt-16">
            <GradientButton onClick={handleStartQuiz} className="text-base md:text-lg px-8 py-4" icon={true} variant="primary">
              Take the challenge
            </GradientButton>
            
            <GradientButton onClick={handleBuyCardDecks} variant="secondary" className="text-base md:text-lg px-8 py-4" icon={true}>
              Buy Card decks
              <ShoppingBag className="ml-2" size={18} />
            </GradientButton>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20
        }} transition={{
          duration: 0.5,
          delay: 0.8
        }} className="flex justify-center gap-10 mt-12">
            <motion.div animate={{
            scale: [1, 1.05, 1],
            opacity: [0.85, 1, 0.85]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror"
          }} className="relative">
              <div className="absolute inset-0 bg-cognilense-green/10 rounded-full blur-md" />
              <div className="relative bg-white p-3 rounded-full shadow-md">
                <Brain className="w-8 h-8 text-cognilense-green" strokeWidth={1.5} />
              </div>
            </motion.div>
            
            <motion.div animate={{
            rotate: [0, 5, 0, -5, 0]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }} className="relative">
              <div className="absolute inset-0 bg-cognilense-blue/10 rounded-full blur-md" />
              <div className="relative bg-white p-3 rounded-full shadow-md">
                <Target className="w-8 h-8 text-cognilense-blue" strokeWidth={1.5} />
              </div>
            </motion.div>
            
            <motion.div animate={{
            y: [0, -5, 0],
            scale: [1, 1.1, 1]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror"
          }} className="relative">
              <div className="absolute inset-0 bg-cognilense-yellow/10 rounded-full blur-md" />
              <div className="relative bg-white p-3 rounded-full shadow-md">
                <Zap className="w-8 h-8 text-cognilense-yellow" strokeWidth={1.5} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 40
      }} transition={{
        duration: 0.7,
        delay: 0.7
      }} className="mt-60 mb-16 max-w-6xl mx-auto relative">
          <div className="absolute right-0 top-0 w-[65%] h-full rounded-2xl bg-gradient-to-br from-cognilense-yellow/20 via-cognilense-blue/20 to-cognilense-green/20 z-0"></div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start relative z-10">
            <div className="w-full md:w-1/3 text-left flex flex-col items-start pr-4 md:mt-8">
              <div className="mb-5">
                <h2 className="font-worksans font-normal text-xl md:text-2xl">See the world from an</h2>
                <h2 className="font-domine font-bold text-3xl md:text-[40px] mt-1">experts' lens</h2>
              </div>
              
              <p className="font-worksans text-sm md:text-base text-gray-700 mt-4 max-w-lg">
                We have been using these and many other methods, lenses and thinking techniques to solve problems and look at situations with a new eye.
              </p>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col mt-6 md:mt-0">
              <div className="relative">
                <div className="relative -left-1/6 md:-left-1/6 w-[117%]">
                  <img src="/lovable-uploads/becd3b5c-147e-42fc-b050-4450b76ca3e1.png" alt="Brain lens illustration showing cognitive perspective" className="w-full h-auto object-contain z-10" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 60
      }} animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 60
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="mt-32 mb-24 max-w-6xl mx-auto bias-cards-section">
          <h3 className="font-domine font-bold text-3xl md:text-[40px] leading-[58px] tracking-[-3%] text-center mb-8">
            Sneak Peak into Cognitive Biases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {biasCards.map((card, index) => <motion.div key={`bias-card-${index}`} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.9 + index * 0.1
          }} className="flex flex-col h-full">
                <div className="overflow-hidden rounded-lg shadow-lg h-full transition-transform duration-300 hover:scale-[1.02]">
                  <img src={card.image} alt={card.title} className="w-full h-auto object-cover" />
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;