
import React from "react";
import BiasImage from "./BiasImageMap";

interface BiasIllustrationProps {
  biasType: string;
}

const BiasIllustration = ({ biasType }: BiasIllustrationProps) => {
  return <BiasImage biasType={biasType} />;
};

export default BiasIllustration;
