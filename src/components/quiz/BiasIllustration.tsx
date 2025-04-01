
import React from "react";
import BiasImage from "./BiasImageMap";

interface BiasIllustrationProps {
  biasType: string;
}

const BiasIllustration = ({ biasType }: BiasIllustrationProps) => {
  // Add a console log to help with debugging
  console.log(`Rendering illustration for bias type: ${biasType}`);
  
  return (
    <div className="w-full h-full">
      <BiasImage biasType={biasType} />
    </div>
  );
};

export default BiasIllustration;
