
import React from "react";

type BiasImageMapType = {
  [key: string]: string;
};

export const biasImages: BiasImageMapType = {
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
  // Add default image for any bias type not specifically mapped
  "default": "/placeholder.svg"
};

interface BiasImageProps {
  biasType: string;
  className?: string;
}

const BiasImage: React.FC<BiasImageProps> = ({ biasType, className = "" }) => {
  // Normalize the bias type to match our keys
  const normalizedType = biasType.toLowerCase().replace(/\s+/g, "");
  
  // Get the image URL or default if not found
  const imageUrl = biasImages[normalizedType] || biasImages.default;
  
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <img 
        src={imageUrl} 
        alt={`${biasType} illustration`} 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default BiasImage;
