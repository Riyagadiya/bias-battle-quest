
import { ExternalLink, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";

interface ActionButtonsProps {
  restartQuiz: () => void;
}

const ActionButtons = ({ restartQuiz }: ActionButtonsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <a 
        href="https://www.amazon.in/dp/8197752834?ref=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&ref_=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&social_share=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&bestFormat=true" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-between rounded-md py-3 px-6 font-medium text-white bg-cognilense-blue hover:bg-cognilense-blue/90 shadow-md transition-all gap-2"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 9V7C17 4.2 14.8 2 12 2C9.2 2 7 4.2 7 7V9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14V17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 22H16C20 22 21 21 21 17V14C21 10 20 9 16 9H8C4 9 3 10 3 14V17C3 21 4 22 8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-left">
            <h4 className="font-domine">Get Your Cards</h4>
            <p className="text-sm text-white/80">Cognitive bias card deck</p>
          </div>
        </div>
        <ExternalLink size={20} className="transition-transform group-hover:translate-x-1" />
      </a>
      
      <Button 
        onClick={restartQuiz}
        className="inline-flex items-center justify-between rounded-md py-3 px-6 font-medium text-white bg-cognilense-green hover:bg-cognilense-green/90 shadow-md transition-all h-auto gap-2"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <RotateCcw size={20} className="text-white" />
          </div>
          <div className="text-left">
            <h4 className="font-domine">Try Again</h4>
            <p className="text-sm text-white/80">Restart the quiz</p>
          </div>
        </div>
        <ExternalLink size={20} className="transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default ActionButtons;
