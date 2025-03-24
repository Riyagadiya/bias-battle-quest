
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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
        "gradient-border-button relative rounded-lg font-worksans font-normal",
        "bg-cognilense-background text-foreground py-3 px-6",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-glow hover:scale-[1.02] hover:font-medium",
        "focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2",
        disabled && "opacity-70 pointer-events-none",
        className
      )}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
        {icon && (
          <ArrowUpRight 
            size={18} 
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
    </button>
  );
};

export default GradientButton;
