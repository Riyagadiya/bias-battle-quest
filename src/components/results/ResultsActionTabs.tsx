
import { useState } from "react";
import { 
  Award, 
  ExternalLink, 
  RotateCcw, 
  Code, 
  Share2
} from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useQuiz } from "@/context/QuizContext";

const ResultsActionTabs = () => {
  const { restartQuiz } = useQuiz();
  const [isCopied, setIsCopied] = useState(false);
  const discountCode = "COGNIQUIZ25";
  
  const copyDiscountCode = () => {
    navigator.clipboard.writeText(discountCode);
    setIsCopied(true);
    toast.success("Discount code copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };

  const shareQuiz = () => {
    const shareUrl = window.location.origin;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Quiz URL copied to clipboard!");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
      <Tabs defaultValue="discount" className="h-full flex flex-col">
        <TabsList className="grid grid-cols-4 bg-cognilense-background mb-1">
          <TabsTrigger value="discount">
            <Code size={16} className="mr-1 md:mr-2" />
            <span className="hidden md:inline">Code</span>
          </TabsTrigger>
          <TabsTrigger value="restart">
            <RotateCcw size={16} className="mr-1 md:mr-2" />
            <span className="hidden md:inline">Retry</span>
          </TabsTrigger>
          <TabsTrigger value="cards">
            <Award size={16} className="mr-1 md:mr-2" />
            <span className="hidden md:inline">Cards</span>
          </TabsTrigger>
          <TabsTrigger value="share">
            <Share2 size={16} className="mr-1 md:mr-2" />
            <span className="hidden md:inline">Share</span>
          </TabsTrigger>
        </TabsList>
        
        <div className="flex-grow">
          {/* Discount Code Tab */}
          <TabsContent value="discount" className="h-full m-0">
            <Card className="border-0 shadow-none h-full">
              <CardContent className="p-4 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code size={20} className="text-cognilense-orange" />
                    <h4 className="font-domine font-semibold">Exclusive Code</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use this code for 25% off Cognilense card decks
                  </p>
                </div>
                
                <div className="mt-4 flex items-center gap-2">
                  <div className="bg-cognilense-background px-4 py-2 rounded border shadow-sm font-medium tracking-wider">
                    {discountCode}
                  </div>
                  <button 
                    onClick={copyDiscountCode}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    aria-label="Copy discount code"
                  >
                    {isCopied ? (
                      <Code size={20} className="text-green-600" />
                    ) : (
                      <Code size={20} />
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Try Again Tab */}
          <TabsContent value="restart" className="h-full m-0">
            <Card className="border-0 shadow-none h-full">
              <CardContent className="p-4 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <RotateCcw size={20} className="text-cognilense-green" />
                    <h4 className="font-domine font-semibold">Try Again</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ready to test your knowledge again? Restart the quiz and try to improve your score.
                  </p>
                </div>
                
                <button 
                  onClick={restartQuiz}
                  className="mt-4 w-full py-2 px-4 bg-cognilense-green/10 text-cognilense-green border border-cognilense-green/20 rounded-md hover:bg-cognilense-green/20 transition-colors"
                >
                  Restart Quiz
                </button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Get Cards Tab */}
          <TabsContent value="cards" className="h-full m-0">
            <Card className="border-0 shadow-none h-full">
              <CardContent className="p-4 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={20} className="text-cognilense-blue" />
                    <h4 className="font-domine font-semibold">Get Your Cards</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Purchase our cognitive bias card deck to help you identify biases in your daily life.
                  </p>
                </div>
                
                <a 
                  href="https://www.amazon.in/dp/8197752834?ref=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&ref_=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&social_share=cm_sw_r_ffobk_cso_wa_apan_dp_SYFEQFSMP8D62S65AANR_1&bestFormat=true"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-4 block w-full py-2 px-4 bg-cognilense-blue/10 text-cognilense-blue border border-cognilense-blue/20 rounded-md hover:bg-cognilense-blue/20 transition-colors text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Buy Now 
                    <ExternalLink size={16} />
                  </span>
                </a>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Share Tab */}
          <TabsContent value="share" className="h-full m-0">
            <Card className="border-0 shadow-none h-full">
              <CardContent className="p-4 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Share2 size={20} className="text-cognilense-orange" />
                    <h4 className="font-domine font-semibold">Share the Quiz</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Share this quiz with friends and colleagues to help them learn about cognitive biases.
                  </p>
                </div>
                
                <button 
                  onClick={shareQuiz}
                  className="mt-4 w-full py-2 px-4 bg-cognilense-orange/10 text-cognilense-orange border border-cognilense-orange/20 rounded-md hover:bg-cognilense-orange/20 transition-colors"
                >
                  Copy Quiz Link
                </button>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ResultsActionTabs;
