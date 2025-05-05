
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: boolean;
  variant?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const GradientButton = ({ 
  children, 
  className = "", 
  onClick, 
  icon = true,
  variant = "primary",
  type = "button",
  disabled = false
}: GradientButtonProps) => {
  return (
    <button
      className={cn(
        "gradient-border-button bg-black text-white rounded-full font-medium px-6 py-3",
        "hover:bg-gray-800 transition-colors flex items-center justify-center gap-2",
        variant === "secondary" && "bg-white text-black hover:bg-gray-100 border border-gray-200",
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};

export default GradientButton;
