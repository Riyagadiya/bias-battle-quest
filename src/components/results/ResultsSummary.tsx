
import { motion } from "framer-motion";

interface ResultsSummaryProps {
  percentage: number;
  correctAnswers: number;
  totalQuestions: number;
  resultMessage: string;
  resultDescription: string;
}

const ResultsSummary = ({
  percentage,
  correctAnswers,
  totalQuestions,
  resultMessage,
  resultDescription
}: ResultsSummaryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center mb-10"
    >
      <div className="relative w-40 h-40 mb-6">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="#f1f1f1" 
            strokeWidth="10" 
          />
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="url(#gradient)" 
            strokeWidth="10" 
            strokeDasharray="282.7" 
            strokeDashoffset={282.7 - (282.7 * percentage / 100)}
            transform="rotate(-90 50 50)" 
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#71BD45" />
              <stop offset="50%" stopColor="#F7D465" />
              <stop offset="100%" stopColor="#518FF7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{percentage}%</span>
          <span className="text-sm text-muted-foreground">
            {correctAnswers}/{totalQuestions} correct
          </span>
        </div>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-domine font-medium mb-3">
        {resultMessage}
      </h3>
      <p className="text-center text-muted-foreground max-w-md">
        {resultDescription}
      </p>
    </motion.div>
  );
};

export default ResultsSummary;
