
import React from "react";
import { Clock } from "lucide-react";
import { Progress } from "../ui/progress";

interface QuizTimerProps {
  timeLeft: number;
  totalTime: number;
}

const QuizTimer = ({ timeLeft, totalTime }: QuizTimerProps) => {
  const timerProgress = (timeLeft / totalTime) * 100;

  return (
    <div className="mb-6 flex items-center gap-2">
      <Clock className="w-4 h-4 text-muted-foreground" />
      <Progress 
        value={timerProgress} 
        className="h-1.5 bg-gray-100" 
      />
      <span className="text-xs font-medium">{timeLeft}s</span>
    </div>
  );
};

export default QuizTimer;
