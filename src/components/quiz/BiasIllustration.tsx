
import React from "react";
import BiasImage from "./BiasImageMap";

interface BiasIllustrationProps {
  biasType: string;
}

const BiasIllustration = ({ biasType }: BiasIllustrationProps) => {
  return (
    <div className="w-full h-full">
      <BiasImage biasType={biasType} />
    </div>
  );
};

export default BiasIllustration;
