
import React from "react";

interface QuizIllustrationProps {
  biasType: string | null;
  correctOption?: string | null;
  show?: boolean;
}

const QuizIllustration: React.FC<QuizIllustrationProps> = ({ 
  biasType, 
  correctOption,
  show = true 
}) => {
  // If we don't have a bias type or correct option, don't show anything
  if (!biasType && !correctOption) return null;

  // Map of bias types to their corresponding illustration URLs
  const biasIllustrations: Record<string, string> = {
    // Core bias types
    "barnum": "/lovable-uploads/2f646fc4-7b1b-4ab0-a045-a112d84b1684.png", 
    "hindsight": "/lovable-uploads/e8a8ca5c-8876-4645-8c87-ef900d83d4f9.png",
    "backfire": "/lovable-uploads/94ae1a17-4c71-4f1b-b94e-2cd2a9ac172a.png",
    "sunk_cost": "/lovable-uploads/d18fb039-8893-4f9b-aabd-a58996d164ee.png",
    "ingroup": "/lovable-uploads/cc080e1b-a965-49df-bdd9-d4e6c1539e6f.png",
    "belief": "/lovable-uploads/6a8d4646-af7c-4942-b055-c7cdf32e544e.png",
    "groupthink": "/lovable-uploads/00881fd8-2a91-4838-a6c3-12b9fee47e33.png",
    "recall": "/lovable-uploads/7872244e-18b5-4cdc-90fd-ab27a747a519.png",
    "framing": "/lovable-uploads/a516eff3-f6cf-4f0e-bafd-4bcbb53dd017.png",
    "gratification": "/lovable-uploads/cb5b56b8-9016-48f2-8c94-4ac7524b249a.png",
    "first_impression": "/lovable-uploads/4ab37e07-281c-41cf-8be5-b6cb98f15b60.png",
    "action": "/lovable-uploads/32cc47e7-c453-42c7-8b97-f1dab707c9ad.png",
    "bandwagon": "/lovable-uploads/0cd816df-83d9-43b6-93d0-aff194caf4fe.png",
    "optimism": "/lovable-uploads/7bbb844a-0d85-4d0d-9bb8-0c58bf4b89a2.png",
    "anchoring": "/lovable-uploads/822c8a94-99af-4d4b-a9cb-6d2eea6bd2eb.png",
    "dunning_kruger": "/lovable-uploads/20a19460-11e0-4fa2-9897-05d09b46bb68.png",
    "ikea": "/lovable-uploads/418130a9-eef4-4a8d-ac95-f0e32df0aab2.png",
    "spotlight": "/lovable-uploads/4e3bcf09-b2bb-46ed-9de2-427e90c3219f.png",
    
    // Additional bias types
    "survivorship": "/lovable-uploads/f190dc1a-0888-48d0-b2f7-958a90226f11.png",
    "cheating": "/lovable-uploads/b4addb6a-57e8-4f24-8f21-73aacd0dfa87.png",
    "restraint": "/lovable-uploads/fd80c14a-0d65-4ce4-bc87-2fc9b0d1570d.png",
    "scarcity": "/lovable-uploads/80ff0a9d-06d8-47a0-aa74-98042b2e500b.png",
    "prestige": "/lovable-uploads/c3e37cc6-0bb1-429b-a4d3-b3b89ed91d93.png",
    "projection": "/lovable-uploads/93262f4c-cc90-4f0c-9755-c75c36e0cdf7.png",
    "social_desirability": "/lovable-uploads/18b1f6a6-2067-40ab-87ee-a851d5e09fec.png",
    "sisyphus": "/lovable-uploads/d50607ce-ac2f-4015-8f76-9d57a6bf0914.png",
    "salience": "/lovable-uploads/2c5f726a-54d4-4b89-9c75-ec2d9b18356c.png",
    "response": "/lovable-uploads/e7f760c9-51aa-4063-b97d-6126cc75c8f6.png",
    "recency": "/lovable-uploads/d7471cae-1e32-4318-aeb8-9ca97ba16c5e.png",
    "projection_bias": "/lovable-uploads/93262f4c-cc90-4f0c-9755-c75c36e0cdf7.png",
    "confirmation": "/lovable-uploads/af7e7cc7-ff87-4241-8fe5-77e92a2c6a0c.png",
    "bundling": "/lovable-uploads/e0d82469-47e0-4f13-8778-257b364423d4.png",
    "current_mood": "/lovable-uploads/bbe42d52-a0fa-4497-a9b8-ba3bf582bbcd.png",
    "distinction": "/lovable-uploads/8902f187-fa9a-4efa-825d-03362a6105d4.png",
    "decoy_option": "/lovable-uploads/aeb1b41e-b023-4b8d-8674-802f6315792f.png",
    "diversification": "/lovable-uploads/2c8a3bb2-33af-4cf3-b18b-2a9de13e5ee6.png",
    "omission": "/lovable-uploads/53d527e6-ff18-4f68-83cd-385c4138bf93.png",
    
    // Common variations with effect/bias/fallacy suffixes
    "backfire_effect": "/lovable-uploads/94ae1a17-4c71-4f1b-b94e-2cd2a9ac172a.png",
    "hindsight_bias": "/lovable-uploads/e8a8ca5c-8876-4645-8c87-ef900d83d4f9.png",
    "barnum_effect": "/lovable-uploads/2f646fc4-7b1b-4ab0-a045-a112d84b1684.png",
    "sunk_cost_fallacy": "/lovable-uploads/d18fb039-8893-4f9b-aabd-a58996d164ee.png",
    "ingroup_bias": "/lovable-uploads/cc080e1b-a965-49df-bdd9-d4e6c1539e6f.png",
    "belief_bias": "/lovable-uploads/6a8d4646-af7c-4942-b055-c7cdf32e544e.png",
    "groupthink_bias": "/lovable-uploads/00881fd8-2a91-4838-a6c3-12b9fee47e33.png",
    "dunning_kruger_effect": "/lovable-uploads/20a19460-11e0-4fa2-9897-05d09b46bb68.png",
    "ikea_effect": "/lovable-uploads/418130a9-eef4-4a8d-ac95-f0e32df0aab2.png",
    "action_bias": "/lovable-uploads/32cc47e7-c453-42c7-8b97-f1dab707c9ad.png",
    "spotlight_effect": "/lovable-uploads/4e3bcf09-b2bb-46ed-9de2-427e90c3219f.png",
    "first_impression_bias": "/lovable-uploads/4ab37e07-281c-41cf-8be5-b6cb98f15b60.png"
  };

  // Determine which bias type to use for the illustration
  // Priority: use correctOption if provided, otherwise fall back to biasType
  const biasTypeToUse = correctOption || biasType;
  
  if (!biasTypeToUse) return null;

  // Normalize the bias type by removing spaces, making lowercase
  const normalizedBiasType = biasTypeToUse.toLowerCase().replace(/\s+/g, "_");
  
  // Try to find the illustration for this bias type
  let illustrationUrl = biasIllustrations[normalizedBiasType];
  
  // If no direct match, try without "_effect", "_bias", or "_fallacy" suffixes
  if (!illustrationUrl) {
    const baseType = normalizedBiasType
      .replace(/_effect$/, '')
      .replace(/_bias$/, '')
      .replace(/_fallacy$/, '');
    
    illustrationUrl = biasIllustrations[baseType];
  }
  
  // If still no illustration found, use the new default illustration
  if (!illustrationUrl) {
    console.log(`Using default illustration for bias type: ${biasTypeToUse} (normalized: ${normalizedBiasType})`);
    // Use the uploaded cognitive bias image as default
    illustrationUrl = "/lovable-uploads/9aaed1ee-f807-444b-83b9-d785c312a22c.png"; 
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <img 
        src={illustrationUrl} 
        alt={`${biasTypeToUse} illustration`}
        className="w-full h-full object-contain"
        loading="eager" // Prioritize loading this image
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.src = "/lovable-uploads/9aaed1ee-f807-444b-83b9-d785c312a22c.png";
          console.log(`Fallback to default image for ${biasTypeToUse}`);
        }}
      />
    </div>
  );
};

export default QuizIllustration;
