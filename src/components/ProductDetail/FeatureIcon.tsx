
import React from "react";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";

type FeatureType = "replacement" | "secure" | "delivery";

interface FeatureIconProps {
  type: FeatureType;
  text: string;
}

const FeatureIcon = ({ type, text }: FeatureIconProps) => {
  const getIcon = () => {
    switch (type) {
      case "replacement":
        return <RotateCcw className="w-5 h-5 text-blue-600" />;
      case "secure":
        return <ShieldCheck className="w-5 h-5 text-green-600" />;
      case "delivery":
        return <Truck className="w-5 h-5 text-orange-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="bg-gray-50 p-2 rounded-full">{getIcon()}</div>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
};

export default FeatureIcon;
