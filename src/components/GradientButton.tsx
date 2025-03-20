
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
        "relative rounded-lg font-worksans font-bold transition-all duration-300",
        "bg-cognilense-background text-foreground py-3 px-6",
        "before:absolute before:inset-0 before:-z-10 before:rounded-lg before:p-[2px]",
        "before:bg-gradient-to-r before:from-cognilense-black before:via-cognilense-green before:via-cognilense-yellow before:via-cognilense-blue before:to-cognilense-orange",
        "before:bg-size-200 before:animate-shine",
        "hover:shadow-lg hover:shadow-black/20 hover:scale-[1.02] hover:before:bg-size-200",
        "active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2",
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
