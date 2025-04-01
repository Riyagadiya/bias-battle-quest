
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
  
  // Add aliases for specific question types
  "hindsight": "/lovable-uploads/09b2d90c-d4a5-46a8-a4f2-9c66f699686d.png", // Optimism bias image for hindsight
  "sunk_cost_fallacy": "/lovable-uploads/cf457814-92f3-4b54-a372-22117416c0f6.png", // Anchoring for sunk cost
  "groupthink": "/lovable-uploads/9b7c8643-f4a8-4489-aa83-d6bd8564fa83.png", // Bandwagon for groupthink
  "pessimism": "/lovable-uploads/b6a24a2d-fb81-4d25-8a72-8a53dd5fa824.png", // Belief for pessimism
  "dunning_kruger": "/lovable-uploads/eb77ac5f-512f-48b2-a4b3-b0aa05b1f644.png", // Spotlight for Dunning-Kruger
  "ikea_effect": "/lovable-uploads/aa71ce42-71c6-4890-820b-d7591cf4c934.png", // Ingroup for IKEA effect
  
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
