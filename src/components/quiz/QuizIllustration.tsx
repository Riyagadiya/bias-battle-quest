
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
    "ingroup": "/lovable-uploads/cc080e1b-a965-49df-bdd9-d4e6c1539e6f.png", // Three men with dogs image for ingroup bias
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
    "dunning_kruger": "/lovable-uploads/b8162ae5-398d-4431-8916-7a3dd8e28213.png", // Roller coaster ride
    "first_impression": "/lovable-uploads/00881fd8-2a91-4838-a6c3-12b9fee47e33.png", // Two people shaking hands
    "framing": "/lovable-uploads/cb5b56b8-9016-48f2-8c94-4ac7524b249a.png", // Ice cream cups with different fat percentage labels
    "gratification": "/lovable-uploads/a516eff3-f6cf-4f0e-bafd-4bcbb53dd017.png", // Race car with checkered flags
    "groupthink": "/lovable-uploads/4ab37e07-281c-41cf-8be5-b6cb98f15b60.png", // Pied piper with mice following
    "hindsight": "/lovable-uploads/ef263d28-dec8-40b5-bae3-07c2e6930cee.png", // Person holding circular frame with scenery
    "omission": "/lovable-uploads/53d527e6-ff18-4f68-83cd-385c4138bf93.png", // Scale with injection and virus
    "pessimism": "/lovable-uploads/7bbb844a-0d85-4d0d-9bb8-0c58bf4b89a2.png", // Glass of water with hand pointing down
    "optimism_bias": "/lovable-uploads/15fe4ff5-b3d3-44a2-adb5-e88a6e7a2e3f.png", // Glass of water with OK hand sign
    
    // Aliases for different naming variations
    "belief_bias": "/lovable-uploads/6a8d4646-af7c-4942-b055-c7cdf32e544e.png",
    "barnum_effect": "/lovable-uploads/2f646fc4-7b1b-4ab0-a045-a112d84b1684.png",
    "bandwagon_effect": "/lovable-uploads/0cd816df-83d9-43b6-93d0-aff194caf4fe.png",
    "spotlight_effect": "/lovable-uploads/a9bd6058-0119-4a06-bf8e-d6673c0e3330.png",
    "anchoring_bias": "/lovable-uploads/822c8a94-99af-4d4b-a9cb-6d2eea6bd2eb.png",
    "optimism_bias": "/lovable-uploads/15fe4ff5-b3d3-44a2-adb5-e88a6e7a2e3f.png",
    "pessimism_bias": "/lovable-uploads/7bbb844a-0d85-4d0d-9bb8-0c58bf4b89a2.png",
    "ingroup_bias": "/lovable-uploads/cc080e1b-a965-49df-bdd9-d4e6c1539e6f.png", // Updated to new ingroup bias image
    "ikea_effect": "/lovable-uploads/418130a9-eef4-4a8d-ac95-f0e32df0aab2.png", // Alias for IKEA Effect
    "action_bias": "/lovable-uploads/32cc47e7-c453-42c7-8b97-f1dab707c9ad.png", // Alias for Action Bias
    "backfire_effect": "/lovable-uploads/94ae1a17-4c71-4f1b-b94e-2cd2a9ac172a.png", // Alias for Backfire Effect
    "bundling_effect": "/lovable-uploads/e0d82469-47e0-4f13-8778-257b364423d4.png", // Alias for Bundling Effect
    "confirmation_bias": "/lovable-uploads/af7e7cc7-ff87-4241-8fe5-77e92a2c6a0c.png", // Alias for Confirmation Bias
    
    // Aliases for the new bias types
    "current_mood_bias": "/lovable-uploads/bbe42d52-a0fa-4497-a9b8-ba3bf582bbcd.png", // Alias for Current Mood Bias
    "decoy_option_effect": "/lovable-uploads/8902f187-fa9a-4efa-825d-03362a6105d4.png", // Alias for Decoy Option Effect
    "distinction_bias": "/lovable-uploads/aeb1b41e-b023-4b8d-8674-802f6315792f.png", // Alias for Distinction Bias
    "diversification_bias": "/lovable-uploads/2c8a3bb2-33af-4cf3-b18b-2a9de13e5ee6.png", // Alias for Diversification Bias
    "dunning_kruger_effect": "/lovable-uploads/b8162ae5-398d-4431-8916-7a3dd8e28213.png", // Alias for Dunning Kruger Effect
    "first_impression_bias": "/lovable-uploads/00881fd8-2a91-4838-a6c3-12b9fee47e33.png", // Alias for First Impression Bias
    "framing_bias": "/lovable-uploads/cb5b56b8-9016-48f2-8c94-4ac7524b249a.png", // Alias for Framing Bias
    "framing_effect": "/lovable-uploads/cb5b56b8-9016-48f2-8c94-4ac7524b249a.png", // Alias for Framing Bias/Effect
    "gratification_bias": "/lovable-uploads/a516eff3-f6cf-4f0e-bafd-4bcbb53dd017.png", // Alias for Gratification Bias
    "groupthink_bias": "/lovable-uploads/4ab37e07-281c-41cf-8be5-b6cb98f15b60.png", // Alias for Groupthink Bias
    "groupthink_effect": "/lovable-uploads/4ab37e07-281c-41cf-8be5-b6cb98f15b60.png", // Alias for Groupthink Effect
    "hindsight_bias": "/lovable-uploads/ef263d28-dec8-40b5-bae3-07c2e6930cee.png", // Alias for Hindsight Bias
    "hindsight_effect": "/lovable-uploads/ef263d28-dec8-40b5-bae3-07c2e6930cee.png", // Alias for Hindsight Bias/Effect
    "omission_bias": "/lovable-uploads/53d527e6-ff18-4f68-83cd-385c4138bf93.png", // Alias for Omission Bias
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
