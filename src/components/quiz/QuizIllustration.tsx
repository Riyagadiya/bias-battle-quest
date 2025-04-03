
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
    
    // Previously added bias illustrations
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
    
    // Previously added bias illustrations (newer)
    "prestige": "/lovable-uploads/93262f4c-cc90-4f0c-9755-c75c36e0cdf7.png", // Girl with microphone surrounded by crowd
    "projection": "/lovable-uploads/d7471cae-1e32-4318-aeb8-9ca97ba16c5e.png", // Brains with one highlighted
    "recall": "/lovable-uploads/7872244e-18b5-4cdc-90fd-ab27a747a519.png", // Person trekking up a mountain
    "recency": "/lovable-uploads/e7f760c9-51aa-4063-b97d-6126cc75c8f6.png", // Placards with months of the year
    "responsive": "/lovable-uploads/fd80c14a-0d65-4ce4-bc87-2fc9b0d1570d.png", // Person speaking into microphone
    "restraint": "/lovable-uploads/2c5f726a-54d4-4b89-9c75-ec2d9b18356c.png", // Hand reaching for cigarette pack
    "salience": "/lovable-uploads/80ff0a9d-06d8-47a0-aa74-98042b2e500b.png", // Shark under sea with open mouth
    "scarcity": "/lovable-uploads/c3e37cc6-0bb1-429b-a4d3-b3b89ed91d93.png", // Hand holding diamond
    
    // Newly added bias illustrations
    "social_desirability": "/lovable-uploads/18b1f6a6-2067-40ab-87ee-a851d5e09fec.png", // Man wearing laughing mask surrounded by laughing crowd
    "sunk_cost": "/lovable-uploads/d18fb039-8893-4f9b-aabd-a58996d164ee.png", // Person holding two cards
    "survivorship": "/lovable-uploads/f190dc1a-0888-48d0-b2f7-958a90226f11.png", // Private airplane flying in the sky
    "cheating": "/lovable-uploads/b4addb6a-57e8-4f24-8f21-73aacd0dfa87.png", // Vehicles on road with one going opposite direction
    "sisyphus": "/lovable-uploads/d50607ce-ac2f-4015-8f76-9d57a6bf0914.png", // Man pushing huge ball up a mountain
    
    // Aliases for different naming variations
    "belief_bias": "/lovable-uploads/6a8d4646-af7c-4942-b055-c7cdf32e544e.png",
    "barnum_effect": "/lovable-uploads/2f646fc4-7b1b-4ab0-a045-a112d84b1684.png",
    "bandwagon_effect": "/lovable-uploads/0cd816df-83d9-43b6-93d0-aff194caf4fe.png",
    "spotlight_effect": "/lovable-uploads/4e3bcf09-b2bb-46ed-9de2-427e90c3219f.png", // Person standing under spotlight
    "anchoring_bias": "/lovable-uploads/822c8a94-99af-4d4b-a9cb-6d2eea6bd2eb.png",
    "optimism_bias": "/lovable-uploads/15fe4ff5-b3d3-44a2-adb5-e88a6e7a2e3f.png",
    "pessimism_bias": "/lovable-uploads/7bbb844a-0d85-4d0d-9bb8-0c58bf4b89a2.png",
    "ingroup_bias": "/lovable-uploads/cc080e1b-a965-49df-bdd9-d4e6c1539e6f.png", 
    "ikea_effect": "/lovable-uploads/418130a9-eef4-4a8d-ac95-f0e32df0aab2.png", 
    "action_bias": "/lovable-uploads/32cc47e7-c453-42c7-8b97-f1dab707c9ad.png", 
    "backfire_effect": "/lovable-uploads/94ae1a17-4c71-4f1b-b94e-2cd2a9ac172a.png", 
    "bundling_effect": "/lovable-uploads/e0d82469-47e0-4f13-8778-257b364423d4.png", 
    "confirmation_bias": "/lovable-uploads/af7e7cc7-ff87-4241-8fe5-77e92a2c6a0c.png", 
    
    // Aliases for previously added bias types
    "current_mood_bias": "/lovable-uploads/bbe42d52-a0fa-4497-a9b8-ba3bf582bbcd.png", 
    "decoy_option_effect": "/lovable-uploads/8902f187-fa9a-4efa-825d-03362a6105d4.png", 
    "distinction_bias": "/lovable-uploads/aeb1b41e-b023-4b8d-8674-802f6315792f.png", 
    "diversification_bias": "/lovable-uploads/2c8a3bb2-33af-4cf3-b18b-2a9de13e5ee6.png", 
    "dunning_kruger_effect": "/lovable-uploads/b8162ae5-398d-4431-8916-7a3dd8e28213.png", 
    "first_impression_bias": "/lovable-uploads/00881fd8-2a91-4838-a6c3-12b9fee47e33.png", 
    "framing_bias": "/lovable-uploads/cb5b56b8-9016-48f2-8c94-4ac7524b249a.png", 
    "framing_effect": "/lovable-uploads/cb5b56b8-9016-48f2-8c94-4ac7524b249a.png", 
    "gratification_bias": "/lovable-uploads/a516eff3-f6cf-4f0e-bafd-4bcbb53dd017.png", 
    "groupthink_bias": "/lovable-uploads/4ab37e07-281c-41cf-8be5-b6cb98f15b60.png", 
    "groupthink_effect": "/lovable-uploads/4ab37e07-281c-41cf-8be5-b6cb98f15b60.png", 
    "hindsight_bias": "/lovable-uploads/ef263d28-dec8-40b5-bae3-07c2e6930cee.png", 
    "hindsight_effect": "/lovable-uploads/ef263d28-dec8-40b5-bae3-07c2e6930cee.png", 
    "omission_bias": "/lovable-uploads/53d527e6-ff18-4f68-83cd-385c4138bf93.png", 
    
    // Aliases for previously added bias types (newer)
    "prestige_bias": "/lovable-uploads/93262f4c-cc90-4f0c-9755-c75c36e0cdf7.png",
    "projection_bias": "/lovable-uploads/d7471cae-1e32-4318-aeb8-9ca97ba16c5e.png",
    "recall_bias": "/lovable-uploads/7872244e-18b5-4cdc-90fd-ab27a747a519.png",
    "recency_bias": "/lovable-uploads/e7f760c9-51aa-4063-b97d-6126cc75c8f6.png",
    "recency_effect": "/lovable-uploads/e7f760c9-51aa-4063-b97d-6126cc75c8f6.png",
    "responsive_bias": "/lovable-uploads/fd80c14a-0d65-4ce4-bc87-2fc9b0d1570d.png",
    "restraint_bias": "/lovable-uploads/2c5f726a-54d4-4b89-9c75-ec2d9b18356c.png",
    "salience_bias": "/lovable-uploads/80ff0a9d-06d8-47a0-aa74-98042b2e500b.png",
    "scarcity_bias": "/lovable-uploads/c3e37cc6-0bb1-429b-a4d3-b3b89ed91d93.png",
    "scarcity_effect": "/lovable-uploads/c3e37cc6-0bb1-429b-a4d3-b3b89ed91d93.png",
    
    // Aliases for newly added bias types
    "social_desirability_bias": "/lovable-uploads/18b1f6a6-2067-40ab-87ee-a851d5e09fec.png",
    "sunk_cost_fallacy": "/lovable-uploads/d18fb039-8893-4f9b-aabd-a58996d164ee.png",
    "sunk_cost_effect": "/lovable-uploads/d18fb039-8893-4f9b-aabd-a58996d164ee.png",
    "survivorship_bias": "/lovable-uploads/f190dc1a-0888-48d0-b2f7-958a90226f11.png",
    "cheating_bias": "/lovable-uploads/b4addb6a-57e8-4f24-8f21-73aacd0dfa87.png",
    "the_cheating_bias": "/lovable-uploads/b4addb6a-57e8-4f24-8f21-73aacd0dfa87.png",
    "sisyphus_effect": "/lovable-uploads/d50607ce-ac2f-4015-8f76-9d57a6bf0914.png",
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
