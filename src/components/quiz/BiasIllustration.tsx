
import React from "react";
import { Brain, AlertTriangle } from "lucide-react";

interface BiasIllustrationProps {
  biasType: string;
}

const BiasIllustration = ({ biasType }: BiasIllustrationProps) => {
  switch (biasType) {
    case "framing":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-2">
            <span className="text-lg font-semibold">Framing Effect</span>
          </div>
          <div className="flex justify-between w-full">
            <div className="bg-green-100 p-4 rounded-lg text-center w-[45%]">
              <div className="font-bold text-green-600 text-lg">70%</div>
              <div className="text-sm">Success</div>
            </div>
            <div className="bg-red-100 p-4 rounded-lg text-center w-[45%]">
              <div className="font-bold text-red-600 text-lg">30%</div>
              <div className="text-sm">Failure</div>
            </div>
          </div>
        </div>
      );
    case "availability":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-2">
            <span className="text-lg font-semibold">Availability Heuristic</span>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <AlertTriangle className="text-yellow-500 mr-2" />
              <span>Recent memory: Plane crash documentary</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm">Reality:</span>
              <span className="text-xs bg-blue-100 p-1 rounded">1 in 11 million flight accident rate</span>
              <span className="mx-1 text-xs">vs</span>
              <span className="text-xs bg-red-100 p-1 rounded">1 in 107 driving accident rate</span>
            </div>
          </div>
        </div>
      );
    case "anchoring":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-2">
            <span className="text-lg font-semibold">Anchoring Bias</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-center">
              <div className="font-bold text-2xl">$10,000</div>
              <div className="text-xs">Initial anchor</div>
            </div>
            <div className="text-center">
              <div className="text-sm">↓</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-xl">$8,500</div>
              <div className="text-xs">Final price</div>
            </div>
            <div className="text-center">
              <div className="text-sm">↓</div>
            </div>
            <div className="text-center">
              <div className="text-sm">$7,000</div>
              <div className="text-xs">Market value</div>
            </div>
          </div>
        </div>
      );
    case "sunk-cost":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-2">
            <span className="text-lg font-semibold">Sunk Cost Fallacy</span>
          </div>
          <div className="flex flex-col">
            <div className="bg-gray-100 p-2 rounded-lg mb-2">
              <div className="text-sm">Resources already spent:</div>
              <div className="flex justify-between">
                <span>Time: 6 months</span>
                <span>Budget: $50,000</span>
              </div>
            </div>
            <div className="bg-red-50 p-2 rounded-lg">
              <div className="text-sm text-red-600">Evidence of failure:</div>
              <div className="text-xs">Competitors outperforming, negative user feedback, poor metrics</div>
            </div>
          </div>
        </div>
      );
    case "groupthink":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-2">
            <span className="text-lg font-semibold">Groupthink</span>
          </div>
          <div className="relative w-48 h-48">
            <div className="absolute inset-[15%] bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs text-center">Consensus Opinion</span>
            </div>
            <div className="absolute top-2 right-2 bg-yellow-100 p-1 rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-[10px] text-center">Silent Dissenter</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-gray-100 p-1 rounded-full w-10 h-10"></div>
            <div className="absolute bottom-8 right-12 bg-gray-100 p-1 rounded-full w-10 h-10"></div>
            <div className="absolute top-10 left-6 bg-gray-100 p-1 rounded-full w-10 h-10"></div>
          </div>
        </div>
      );
    case "clustering":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-2">
            <span className="text-lg font-semibold">Clustering Illusion</span>
          </div>
          <div className="w-full">
            <div className="h-20 bg-white relative">
              <div className="absolute inset-0 overflow-hidden">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  <path 
                    d="M0,25 L10,20 L20,22 L30,18 L40,15 L50,10 L60,8 L70,5 L80,3 L90,4 L100,2" 
                    fill="none" 
                    stroke="#4ade80" 
                    strokeWidth="2"
                  />
                  <circle cx="60" cy="8" r="3" fill="#4ade80" />
                  <circle cx="70" cy="5" r="3" fill="#4ade80" />
                  <circle cx="80" cy="3" r="3" fill="#4ade80" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 bg-green-200 rounded-md p-1 text-xs">
                "Pattern"
              </div>
              <div className="absolute bottom-0 right-0 bg-red-200 rounded-md p-1 text-xs">
                Randomness
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return <Brain className="w-32 h-32 mx-auto opacity-80" />;
  }
};

export default BiasIllustration;
