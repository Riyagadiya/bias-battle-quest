
import { ExternalLink } from "lucide-react";

interface ActionButtonsProps {
  restartQuiz: () => void;
}

const ActionButtons = ({ restartQuiz }: ActionButtonsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <a 
        href="https://www.amazon.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center justify-between p-4 rounded-lg border hover:border-cognilense-blue hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-cognilense-blue/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 9V7C17 4.2 14.8 2 12 2C9.2 2 7 4.2 7 7V9" stroke="#518FF7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14V17" stroke="#518FF7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 22H16C20 22 21 21 21 17V14C21 10 20 9 16 9H8C4 9 3 10 3 14V17C3 21 4 22 8 22Z" stroke="#518FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h4 className="font-domine font-semibold">Get Your Cards</h4>
            <p className="text-sm text-muted-foreground">Cognitive bias card deck</p>
          </div>
        </div>
        <ExternalLink size={18} className="text-cognilense-blue transition-transform group-hover:translate-x-1" />
      </a>
      
      <button 
        onClick={restartQuiz}
        className="group flex items-center justify-between p-4 rounded-lg border hover:border-cognilense-green hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-cognilense-green/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44" stroke="#71BD45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12C2 17.52 6.48 22 12 22" stroke="#71BD45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3"/>
            </svg>
          </div>
          <div>
            <h4 className="font-domine font-semibold">Try Again</h4>
            <p className="text-sm text-muted-foreground">Restart the quiz</p>
          </div>
        </div>
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none"
          stroke="#71BD45"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-1"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      </button>
    </div>
  );
};

export default ActionButtons;
