
import React from "react";

interface QuizIllustrationProps {
  biasType: string | null;
  show: boolean;
}

const QuizIllustration: React.FC<QuizIllustrationProps> = ({ biasType, show }) => {
  if (!show || !biasType) return null;

  // Map of bias types to their corresponding illustration URLs
  const biasIllustrations: Record<string, string> = {
    "belief": "/lovable-uploads/b333656a-7aa6-4c83-9316-74f607290895.png", // Binoculars with "Objective Facts" and "Your Belief"
    "barnum": "/lovable-uploads/89d61a08-dc89-46ce-8b4d-6f27cbeea0db.png", // Fortune cookies
    "bandwagon": "/lovable-uploads/b0ab63e2-836d-49a7-8e89-acb042ee5782.png", // People going through doors (following the crowd)
    "spotlight": "/lovable-uploads/a9bd6058-0119-4a06-bf8e-d6673c0e3330.png", // Person covering ears with people talking around them
    "anchoring": "/lovable-uploads/055f660d-de75-4d8b-8a37-8c9be2d761c0.png", // Hand holding price tag
    "optimism": "/lovable-uploads/749be576-777f-4501-aa84-d7e8ede8f564.png", // Driver view from car
    
    // Aliases for different naming variations
    "belief_bias": "/lovable-uploads/b333656a-7aa6-4c83-9316-74f607290895.png",
    "barnum_effect": "/lovable-uploads/89d61a08-dc89-46ce-8b4d-6f27cbeea0db.png",
    "bandwagon_effect": "/lovable-uploads/b0ab63e2-836d-49a7-8e89-acb042ee5782.png",
    "spotlight_effect": "/lovable-uploads/a9bd6058-0119-4a06-bf8e-d6673c0e3330.png",
    "anchoring_bias": "/lovable-uploads/055f660d-de75-4d8b-8a37-8c9be2d761c0.png",
    "optimism_bias": "/lovable-uploads/749be576-777f-4501-aa84-d7e8ede8f564.png"
  };

  // Normalize the bias type by removing spaces, making lowercase
  const normalizedBiasType = biasType.toLowerCase().replace(/\s+/g, "_");
  
  // Try to find the illustration for this bias type
  const illustrationUrl = biasIllustrations[normalizedBiasType];
  
  // If no illustration found, return null
  if (!illustrationUrl) {
    console.log(`No illustration found for bias type: ${biasType} (normalized: ${normalizedBiasType})`);
    return null;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <img 
        src={illustrationUrl} 
        alt={`${biasType} illustration`} 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default QuizIllustration;
