
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
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative rounded-full font-worksans py-3 px-6",
        "flex items-center justify-center gap-2",
        "bg-cognilense-background text-foreground",
        "transition-all duration-300 ease-in-out",
        "before:content-[''] before:absolute before:inset-0",
        "before:rounded-full before:p-[2px]",
        "before:bg-gradient-to-r before:from-cognilense-green before:via-cognilense-yellow before:to-cognilense-blue",
        "before:bg-size-200 before:animate-shine before:opacity-100",
        "before:z-[-1]",
        "before:mask-gradient-border",
        "hover:scale-[1.02] hover:shadow-glow hover:font-medium",
        "focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2",
        disabled && "opacity-70 pointer-events-none",
        className
      )}
    >
      {children}
    </button>
  );
};

export default GradientButton;
