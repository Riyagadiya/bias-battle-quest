
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

const GradientButton = ({
  children,
  onClick,
  className,
  icon = true,
  disabled = false,
  type = "button",
  variant = "primary",
}: GradientButtonProps) => {
  const isMobile = useIsMobile();
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative rounded-full font-worksans font-normal",
        "text-foreground py-2 px-4 md:py-3 md:px-6",
        "text-sm md:text-base",
        "transition-all duration-300 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2",
        variant === "primary" && [
          "gradient-border-rectangle",
          "bg-white", // Changed from bg-cognilense-background to white
          "hover:shadow-glow hover:scale-[1.02] hover:font-medium",
        ],
        variant === "secondary" && [
          "border border-gray-200",
          "hover:border-cognilense-blue hover:shadow-md hover:scale-[1.02]",
        ],
        disabled && "opacity-70 pointer-events-none",
        className
      )}
    >
      <span className="flex items-center justify-center gap-1 md:gap-2">
        {children}
        {icon && variant === "primary" && (
          <ArrowUpRight 
            size={isMobile ? 16 : 18} 
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
    </button>
  );
};

export default GradientButton;
