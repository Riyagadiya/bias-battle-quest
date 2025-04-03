
import React from "react";
import { biasImages } from "./BiasImageMap";

// Map for newly uploaded illustrations
const customIllustrations: Record<string, string> = {
  "belief_bias": "/lovable-uploads/51a714a5-ce09-4322-876b-6cd746c00698.png",
  "barnum_effect": "/lovable-uploads/e5f459d3-a56d-485f-b5cb-2f179ce00cab.png",
  "bandwagon_effect": "/lovable-uploads/ee34bc88-d49b-4bd9-942b-40a803245f69.png",
  "spotlight_effect": "/lovable-uploads/71e0fdd1-9ea0-492d-8134-6d7457f8d536.png",
  "backfire_effect": "/lovable-uploads/4064aea3-4288-4e1c-91dc-b632b8aa7589.png",
  "anchoring_bias": "/lovable-uploads/b6421466-f6d6-4dc9-922f-48e8bf890829.png"
};

// Map for normalized bias types to their image keys
const biasTypeToImageMap: Record<string, string> = {
  "belief": "belief_bias",
  "barnum": "barnum_effect",
  "bandwagon": "bandwagon_effect",
  "spotlight": "spotlight_effect",
  "backfire": "backfire_effect",
  "anchoring": "anchoring_bias",
  "hindsight": "hindsight_bias",
  "recall": "recall_bias",
  "optimism": "optimism_bias",
  "ingroup": "ingroup_bias",
  "framing": "framing_bias"
};

interface QuizIllustrationProps {
  biasType: string;
  showIllustration: boolean;
}

const QuizIllustration: React.FC<QuizIllustrationProps> = ({ biasType, showIllustration }) => {
  if (!showIllustration || !biasType) {
    return null;
  }

  // Normalize the bias type
  const normalizedType = biasType.toLowerCase().trim();
  
  // Get the image key for this bias type
  const imageKey = biasTypeToImageMap[normalizedType] || normalizedType;
  
  // Try to find the custom illustration first, then fall back to bias image map
  const imageUrl = customIllustrations[imageKey] || biasImages[imageKey] || biasImages[normalizedType];
  
  // If no image is found, return null (empty box)
  if (!imageUrl) {
    console.log(`No illustration found for bias type: ${biasType}`);
    return null;
  }

  console.log(`Showing illustration for ${biasType}, using image: ${imageUrl}`);
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img 
        src={imageUrl} 
        alt={`${biasType} illustration`} 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default QuizIllustration;
