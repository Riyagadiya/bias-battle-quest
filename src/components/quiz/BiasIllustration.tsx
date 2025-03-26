
import React from "react";

interface BiasIllustrationProps {
  biasType: string;
}

const BiasIllustration = ({ biasType }: BiasIllustrationProps) => {
  // Render a different SVG illustration based on the bias type
  const renderIllustration = () => {
    switch (biasType.toLowerCase()) {
      case "framing bias":
        return (
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="120" height="120" stroke="black" strokeWidth="2" strokeDasharray="5 5" />
            <rect x="60" y="60" width="80" height="80" stroke="black" strokeWidth="2" />
            <path d="M50 150L150 50" stroke="black" strokeWidth="2" />
            <path d="M70 170L130 30" stroke="black" strokeWidth="2" />
          </svg>
        );
      
      case "anchoring bias":
        return (
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 30L100 170" stroke="black" strokeWidth="3" />
            <circle cx="100" cy="75" r="15" stroke="black" strokeWidth="2" />
            <circle cx="100" cy="125" r="25" stroke="black" strokeWidth="2" />
            <path d="M70 40L130 40" stroke="black" strokeWidth="2" />
            <path d="M60 170L140 170" stroke="black" strokeWidth="2" />
          </svg>
        );
      
      case "confirmation bias":
        return (
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="60" stroke="black" strokeWidth="2" />
            <path d="M80 100L90 110L120 80" stroke="black" strokeWidth="3" />
            <path d="M60 60L140 140" stroke="black" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M60 140L140 60" stroke="black" strokeWidth="2" strokeDasharray="5 5" />
          </svg>
        );
      
      case "availability bias":
        return (
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 140C40 140 70 60 100 60C130 60 160 140 160 140" stroke="black" strokeWidth="2" />
            <circle cx="70" cy="100" r="15" stroke="black" strokeWidth="2" />
            <circle cx="130" cy="100" r="15" stroke="black" strokeWidth="2" />
            <circle cx="100" cy="80" r="20" stroke="black" strokeWidth="2" />
            <path d="M85 140L115 140" stroke="black" strokeWidth="2" />
          </svg>
        );
        
      case "recency bias":
        return (
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 120L70 100L100 130L130 70L160 90" stroke="black" strokeWidth="2" />
            <circle cx="160" cy="90" r="10" stroke="black" strokeWidth="3" fill="white" />
            <path d="M40 150L160 150" stroke="black" strokeWidth="2" />
            <path d="M40 50L40 150" stroke="black" strokeWidth="2" />
          </svg>
        );
        
      default:
        // Default abstract cognitive bias illustration
        return (
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="50" stroke="black" strokeWidth="2" />
            <path d="M60 60L140 140" stroke="black" strokeWidth="2" />
            <path d="M60 140L140 60" stroke="black" strokeWidth="2" />
            <circle cx="100" cy="50" r="10" stroke="black" strokeWidth="2" />
            <circle cx="100" cy="150" r="10" stroke="black" strokeWidth="2" />
            <circle cx="50" cy="100" r="10" stroke="black" strokeWidth="2" />
            <circle cx="150" cy="100" r="10" stroke="black" strokeWidth="2" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {renderIllustration()}
    </div>
  );
};

export default BiasIllustration;
