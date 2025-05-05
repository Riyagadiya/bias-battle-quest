
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: boolean;
}

const GradientButton = ({ 
  children, 
  className = "", 
  onClick, 
  icon = true 
}: GradientButtonProps) => {
  return (
    <button
      className={cn(
        "gradient-border-button bg-black text-white rounded-full font-medium px-6 py-3",
        "hover:bg-gray-800 transition-colors flex items-center justify-center gap-2",
        className
      )}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};

export default GradientButton;
