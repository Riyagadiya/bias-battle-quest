
import React from "react";

interface QuizIllustrationProps {
  biasType: string | null;
  show?: boolean; // Make this optional with a default value
}

const QuizIllustration: React.FC<QuizIllustrationProps> = ({ biasType, show = true }) => {
  if (!biasType) return null;

  // Map of bias types to their corresponding illustration URLs
  const biasIllustrations: Record<string, string> = {
    "belief": "/lovable-uploads/6a8d4646-af7c-4942-b055-c7cdf32e544e.png", // Binoculars with "Objective Facts" and "Your Belief"
    "barnum": "/lovable-uploads/2f646fc4-7b1b-4ab0-a045-a112d84b1684.png", // Fortune cookies
    "bandwagon": "/lovable-uploads/0cd816df-83d9-43b6-93d0-aff194caf4fe.png", // People going through doors (following the crowd)
    "spotlight": "/lovable-uploads/a9bd6058-0119-4a06-bf8e-d6673c0e3330.png", // Person covering ears with people talking around them
    "anchoring": "/lovable-uploads/822c8a94-99af-4d4b-a9cb-6d2eea6bd2eb.png", // Hand holding price tag
    "optimism": "/lovable-uploads/749be576-777f-4501-aa84-d7e8ede8f564.png", // Driver view from car
    "ingroup": "/lovable-uploads/727c0d20-c594-4e55-ac16-46935e7c9826.png", // New ingroup bias illustration
    "ikea": "/lovable-uploads/418130a9-eef4-4a8d-ac95-f0e32df0aab2.png", // Person assembling furniture (IKEA Effect)
    "action": "/lovable-uploads/32cc47e7-c453-42c7-8b97-f1dab707c9ad.png", // Person driving car (Action Bias)
    "backfire": "/lovable-uploads/94ae1a17-4c71-4f1b-b94e-2cd2a9ac172a.png", // Person covering ears with people shouting
    "bundling": "/lovable-uploads/e0d82469-47e0-4f13-8778-257b364423d4.png", // Billboard with bundled meal deal
    "confirmation": "/lovable-uploads/af7e7cc7-ff87-4241-8fe5-77e92a2c6a0c.png", // Magnifying glass with eye
    
    // New bias illustrations
    "current_mood": "/lovable-uploads/bbe42d52-a0fa-4497-a9b8-ba3bf582bbcd.png", // Angry man with hammer and clock
    "decoy_option": "/lovable-uploads/8902f187-fa9a-4efa-825d-03362a6105d4.png", // Coffee cups with different prices
    "distinction": "/lovable-uploads/aeb1b41e-b023-4b8d-8674-802f6315792f.png", // Man confused between two clothing items
    "diversification": "/lovable-uploads/2c8a3bb2-33af-4cf3-b18b-2a9de13e5ee6.png", // Man juggling with different items
    
    // Aliases for different naming variations
    "belief_bias": "/lovable-uploads/6a8d4646-af7c-4942-b055-c7cdf32e544e.png",
    "barnum_effect": "/lovable-uploads/2f646fc4-7b1b-4ab0-a045-a112d84b1684.png",
    "bandwagon_effect": "/lovable-uploads/0cd816df-83d9-43b6-93d0-aff194caf4fe.png",
    "spotlight_effect": "/lovable-uploads/a9bd6058-0119-4a06-bf8e-d6673c0e3330.png",
    "anchoring_bias": "/lovable-uploads/822c8a94-99af-4d4b-a9cb-6d2eea6bd2eb.png",
    "optimism_bias": "/lovable-uploads/749be576-777f-4501-aa84-d7e8ede8f564.png",
    "ingroup_bias": "/lovable-uploads/727c0d20-c594-4e55-ac16-46935e7c9826.png", // Alias for ingroup bias
    "ikea_effect": "/lovable-uploads/418130a9-eef4-4a8d-ac95-f0e32df0aab2.png", // Alias for IKEA Effect
    "action_bias": "/lovable-uploads/32cc47e7-c453-42c7-8b97-f1dab707c9ad.png", // Alias for Action Bias
    "backfire_effect": "/lovable-uploads/94ae1a17-4c71-4f1b-b94e-2cd2a9ac172a.png", // Alias for Backfire Effect
    "bundling_effect": "/lovable-uploads/e0d82469-47e0-4f13-8778-257b364423d4.png", // Alias for Bundling Effect
    "confirmation_bias": "/lovable-uploads/af7e7cc7-ff87-4241-8fe5-77e92a2c6a0c.png", // Alias for Confirmation Bias
    
    // Aliases for the new bias types
    "current_mood_bias": "/lovable-uploads/bbe42d52-a0fa-4497-a9b8-ba3bf582bbcd.png", // Alias for Current Mood Bias
    "decoy_option_effect": "/lovable-uploads/8902f187-fa9a-4efa-825d-03362a6105d4.png", // Alias for Decoy Option Effect
    "distinction_bias": "/lovable-uploads/aeb1b41e-b023-4b8d-8674-802f6315792f.png", // Alias for Distinction Bias
    "diversification_bias": "/lovable-uploads/2c8a3bb2-33af-4cf3-b18b-2a9de13e5ee6.png" // Alias for Diversification Bias
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

  // Don't check the "show" parameter anymore - always show if we have a valid biasType and URL
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
