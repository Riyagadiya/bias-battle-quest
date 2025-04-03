
import React from "react";

type BiasImageMapType = {
  [key: string]: string;
};

export const biasImages: BiasImageMapType = {
  // Original mappings
  "spotlight": "/lovable-uploads/37158020-2d17-45d7-a8d3-346d9162ee14.png",
  "bandwagon": "/lovable-uploads/de8c900d-e670-4a07-9d07-51261adbd2eb.png",
  "barnum": "/lovable-uploads/4fe2581d-ca67-4378-bc2b-9cc8e91da0a4.png",
  "belief": "/lovable-uploads/17484eff-839a-48bb-85b7-857041260c75.png",
  "framing": "/lovable-uploads/421c3bd0-cdc8-4e8f-b429-cf76bb767b54.png",
  "backfire": "/lovable-uploads/6f884518-1bd8-4368-a464-3cf1a2a5d031.png",
  "recall": "/lovable-uploads/2c1a6075-7e9b-44d3-806d-10cfa2a28a3a.png",
  "optimism": "/lovable-uploads/b0328122-cba5-45c1-8454-9db58abb8866.png",
  "ingroup": "/lovable-uploads/991f73b1-3dae-4f0c-8a32-d87729916c81.png",
  "anchoring": "/lovable-uploads/857336f6-626f-45fa-bb06-20ff0b61d59e.png",
  
  // Images with suffix
  "spotlight_effect": "/lovable-uploads/eb77ac5f-512f-48b2-a4b3-b0aa05b1f644.png",
  "bandwagon_effect": "/lovable-uploads/9b7c8643-f4a8-4489-aa83-d6bd8564fa83.png",
  "barnum_effect": "/lovable-uploads/5b316bb6-66f0-44b4-a04d-f7d26a5442e7.png",
  "belief_bias": "/lovable-uploads/b6a24a2d-fb81-4d25-8a72-8a53dd5fa824.png",
  "framing_bias": "/lovable-uploads/e5f4acfb-82ed-4140-8cfb-3d5cce315128.png",
  "backfire_effect": "/lovable-uploads/d7dc9ece-e257-487d-b5ae-d01241fd68df.png",
  "recall_bias": "/lovable-uploads/bb297a2f-1277-4f94-8ef8-169f5a09267f.png",
  "optimism_bias": "/lovable-uploads/09b2d90c-d4a5-46a8-a4f2-9c66f699686d.png",
  "ingroup_bias": "/lovable-uploads/aa71ce42-71c6-4890-820b-d7591cf4c934.png",
  "anchoring_bias": "/lovable-uploads/cf457814-92f3-4b54-a372-22117416c0f6.png",
  
  // Newly added bias types with new images
  "confirmation_bias": "/lovable-uploads/d8b915c6-ccc6-4db7-a800-a00b8c7ff1f1.png",
  "bundling_effect": "/lovable-uploads/801d197d-3019-42ba-a471-f07ef46c0c2d.png",
  "first_impression_bias": "/lovable-uploads/358bcef6-d852-4699-863a-ef6b3e1ebea8.png",
  "action_bias": "/lovable-uploads/58f51dbe-cab9-41ee-bf63-352fc4af3e8b.png",
  "decoy_option_effect": "/lovable-uploads/f2bc6855-f398-4f7b-ace7-cf9a8bc234b1.png",
  "dunning_kruger_effect": "/lovable-uploads/0c2b481f-152b-44e8-b4f8-cb8dbe4d2fc5.png",
  "diversification_bias": "/lovable-uploads/0aec478e-c226-4341-8c90-c38035d13450.png",
  "distinction_bias": "/lovable-uploads/97945626-3012-41e3-9d56-5b4c3e43540c.png",
  "current_mood_bias": "/lovable-uploads/456a18af-44c9-4d2e-a5de-1e030e62ff56.png",
  "groupthink_bias": "/lovable-uploads/98a8d721-92a7-480c-a370-4331e0044f5e.png",
  "gratification_bias": "/lovable-uploads/8bc9437d-bfc7-4e47-bdab-2793e551eb93.png",
  "hindsight_bias": "/lovable-uploads/c6bf934e-b1a2-422f-a0bb-e55d0049169e.png",
  
  // Additional illustrations
  "recency_bias": "/lovable-uploads/7f84bd49-7793-4f13-930d-6583537a2246.png",
  "social_desirability_bias": "/lovable-uploads/8f9fd30a-e40b-4f0f-b192-e4edcd04b728.png",
  "prestige_bias": "/lovable-uploads/abc0daaa-4a71-4bc9-87fa-c82421fa9630.png",
  "salience_bias": "/lovable-uploads/577a9ee5-ee3c-4417-9358-d2a749f97131.png",
  "projection_bias": "/lovable-uploads/93580f2f-8477-4f9b-8ccb-4ee1dab55d2a.png",
  "sunk_cost_fallacy": "/lovable-uploads/80ea1322-28a2-4687-b412-96b7e15bf862.png",
  
  // Additional aliases for common variations
  "hindsight": "/lovable-uploads/c6bf934e-b1a2-422f-a0bb-e55d0049169e.png",
  "groupthink": "/lovable-uploads/98a8d721-92a7-480c-a370-4331e0044f5e.png",
  "dunning_kruger": "/lovable-uploads/0c2b481f-152b-44e8-b4f8-cb8dbe4d2fc5.png",
  "diversification": "/lovable-uploads/0aec478e-c226-4341-8c90-c38035d13450.png",
  "distinction": "/lovable-uploads/97945626-3012-41e3-9d56-5b4c3e43540c.png",
  "confirmation": "/lovable-uploads/d8b915c6-ccc6-4db7-a800-a00b8c7ff1f1.png",
  "bundling": "/lovable-uploads/801d197d-3019-42ba-a471-f07ef46c0c2d.png",
  "first_impression": "/lovable-uploads/358bcef6-d852-4699-863a-ef6b3e1ebea8.png",
  "action": "/lovable-uploads/58f51dbe-cab9-41ee-bf63-352fc4af3e8b.png",
  "decoy_option": "/lovable-uploads/f2bc6855-f398-4f7b-ace7-cf9a8bc234b1.png",
  "current_mood": "/lovable-uploads/456a18af-44c9-4d2e-a5de-1e030e62ff56.png",
  "gratification": "/lovable-uploads/8bc9437d-bfc7-4e47-bdab-2793e551eb93.png",
  "recency": "/lovable-uploads/7f84bd49-7793-4f13-930d-6583537a2246.png",
  "social_desirability": "/lovable-uploads/8f9fd30a-e40b-4f0f-b192-e4edcd04b728.png",
  "prestige": "/lovable-uploads/abc0daaa-4a71-4bc9-87fa-c82421fa9630.png",
  "salience": "/lovable-uploads/577a9ee5-ee3c-4417-9358-d2a749f97131.png",
  "projection": "/lovable-uploads/93580f2f-8477-4f9b-8ccb-4ee1dab55d2a.png",
  "sunk_cost": "/lovable-uploads/80ea1322-28a2-4687-b412-96b7e15bf862.png",
  
  // Default image for any bias type not specifically mapped
  "default": "/placeholder.svg"
};

interface BiasImageProps {
  biasType: string;
  className?: string;
}

const BiasImage: React.FC<BiasImageProps> = ({ biasType, className = "" }) => {
  // Normalize the bias type to match our keys
  const normalizedType = biasType.toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/-/g, "_")
    .replace(/\./g, "")
    .replace(/^the_/, ""); // Remove leading "the" if present
  
  // Check for various formats
  let imageUrl = 
    biasImages[normalizedType] || 
    biasImages[normalizedType.replace(/_/g, "")] || // Try without underscores
    biasImages[`${normalizedType}_effect`] || 
    biasImages[`${normalizedType}_bias`];
    
  // If still not found, try more variations
  if (!imageUrl) {
    // Extract the core term (first word)
    const coreTerm = normalizedType.split('_')[0];
    imageUrl = 
      biasImages[coreTerm] || 
      biasImages[`${coreTerm}_effect`] || 
      biasImages[`${coreTerm}_bias`] ||
      biasImages.default;
  }
  
  // Add detailed console log to help with debugging
  console.log(`BiasImage: type=${biasType}, normalized=${normalizedType}, imageUrl=${imageUrl}`);
  
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <img 
        src={imageUrl} 
        alt={`${biasType} illustration`} 
        className="w-full h-full object-contain"
        onError={(e) => {
          console.error(`Failed to load image for ${biasType}`);
          (e.target as HTMLImageElement).src = biasImages.default;
        }}
      />
    </div>
  );
};

export default BiasImage;
