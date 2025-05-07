
import { useState } from "react";
import { toast } from "sonner";
import { Award, Copy, CheckCircle } from "lucide-react";

const DiscountSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const discountCode = "COGNIQUIZ30";
  const discountPercent = 30;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountCode);
    setIsCopied(true);
    toast.success("Discount code copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-cognilense-green/10 via-cognilense-yellow/10 to-cognilense-blue/10 p-6 rounded-lg mb-8">
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Award size={20} className="text-cognilense-orange" />
            <h4 className="font-domine font-semibold">Exclusive {discountPercent}% Discount</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">Use this code for {discountPercent}% off Cognilense card decks</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="bg-white px-4 py-2 rounded border shadow-sm font-medium tracking-wider">
            {discountCode}
          </div>
          <button 
            onClick={copyToClipboard}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Copy discount code"
          >
            {isCopied ? (
              <CheckCircle size={20} className="text-green-600" />
            ) : (
              <Copy size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
