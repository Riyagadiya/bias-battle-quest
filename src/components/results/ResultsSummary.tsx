
import { motion } from "framer-motion";

interface ResultsSummaryProps {
  percentage: number;
  correctAnswers: number;
  totalQuestions: number;
  resultMessage: string;
}

const ResultsSummary = ({
  percentage,
  correctAnswers,
  totalQuestions,
  resultMessage
}: ResultsSummaryProps) => {
  return (
    <motion.div
      className="flex flex-col items-center"
    >
      <motion.div 
        className="relative w-40 h-40 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          delay: 0.5,
          type: "spring",
          stiffness: 100
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="#f1f1f1" 
            strokeWidth="10" 
          />
          <motion.circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="url(#gradient)" 
            strokeWidth="10" 
            strokeDasharray="282.7" 
            initial={{ strokeDashoffset: 282.7 }}
            animate={{ 
              strokeDashoffset: 282.7 - (282.7 * percentage / 100)
            }}
            transition={{ 
              duration: 1.5, 
              delay: 0.8,
              ease: "easeOut"
            }}
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
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="text-lg font-medium text-muted-foreground">
            {correctAnswers}/{totalQuestions} correct
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ResultsSummary;
