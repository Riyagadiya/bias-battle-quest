
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const GradientButton = ({
  children,
  onClick,
  className,
  icon = true,
  disabled = false,
  type = "button",
}: GradientButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "gradient-border group relative px-6 py-3 font-worksans font-semibold bg-cognilense-background text-black transition-all duration-300 ease-in-out",
        "hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-black/30 focus:ring-offset-2",
        disabled && "opacity-70 pointer-events-none",
        className
      )}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
        {icon && (
          <ArrowRight 
            size={18} 
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
    </button>
  );
};

export default GradientButton;
