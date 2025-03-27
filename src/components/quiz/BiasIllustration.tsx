
import React from "react";
import { Brain } from "lucide-react";

interface BiasIllustrationProps {
  biasType: string;
}

const BiasIllustration = ({ biasType }: BiasIllustrationProps) => {
  // Line drawing illustrations for each bias type
  switch (biasType) {
    case "framing":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <span className="text-lg font-semibold">Framing Effect</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <svg width="240" height="200" viewBox="0 0 240 200" className="mx-auto">
              <rect x="20" y="50" width="90" height="100" fill="none" stroke="#000" strokeWidth="2" />
              <rect x="130" y="50" width="90" height="100" fill="none" stroke="#000" strokeWidth="2" />
              <text x="65" y="100" textAnchor="middle" className="text-sm font-semibold">70%</text>
              <text x="65" y="120" textAnchor="middle" className="text-xs">Success</text>
              <text x="175" y="100" textAnchor="middle" className="text-sm font-semibold">30%</text>
              <text x="175" y="120" textAnchor="middle" className="text-xs">Failure</text>
              <path d="M120 30 C 80 30, 80 20, 65 70" fill="none" stroke="#000" strokeWidth="1" />
              <path d="M120 30 C 160 30, 160 20, 175 70" fill="none" stroke="#000" strokeWidth="1" />
              <circle cx="120" cy="30" r="20" fill="none" stroke="#000" strokeWidth="2" />
              <path d="M110 25 C 115 20, 125 20, 130 25" fill="none" stroke="#000" strokeWidth="1.5" />
            </svg>
            <p className="text-sm text-center mt-4">Same data framed differently affects perception</p>
          </div>
        </div>
      );
    case "availability":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <span className="text-lg font-semibold">Availability Heuristic</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <svg width="240" height="200" viewBox="0 0 240 200" className="mx-auto">
              <path d="M120 40 C 100 40, 90 60, 90 80 C 90 100, 100 120, 120 120 C 140 120, 150 100, 150 80 C 150 60, 140 40, 120 40" fill="none" stroke="#000" strokeWidth="2" />
              <path d="M105 65 C 110 60, 130 60, 135 65" fill="none" stroke="#000" strokeWidth="1.5" />
              <path d="M110 95 C 115 100, 125 100, 130 95" fill="none" stroke="#000" strokeWidth="1.5" />
              <path d="M120 120 L 120 150" fill="none" stroke="#000" strokeWidth="2" />
              <rect x="70" y="150" width="100" height="30" fill="none" stroke="#000" strokeWidth="2" />
              <text x="120" y="170" textAnchor="middle" className="text-xs">Recent memory bias</text>
              <path d="M170 80 L 200 80" fill="none" stroke="#000" strokeWidth="1.5" />
              <path d="M40 80 L 70 80" fill="none" stroke="#000" strokeWidth="1.5" />
              <path d="M200 60 L 200 100" fill="none" stroke="#000" strokeWidth="1.5" />
              <path d="M40 60 L 40 100" fill="none" stroke="#000" strokeWidth="1.5" />
              <text x="40" y="50" textAnchor="middle" className="text-xs">Reality</text>
              <text x="200" y="50" textAnchor="middle" className="text-xs">Perception</text>
            </svg>
            <p className="text-sm text-center mt-4">Judgments based on readily available examples</p>
          </div>
        </div>
      );
    case "anchoring":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <span className="text-lg font-semibold">Anchoring Bias</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <svg width="240" height="200" viewBox="0 0 240 200" className="mx-auto">
              <line x1="60" y1="40" x2="60" y2="160" stroke="#000" strokeWidth="2" />
              <line x1="50" y1="160" x2="190" y2="160" stroke="#000" strokeWidth="2" />
              <line x1="60" y1="60" x2="180" y2="60" stroke="#000" strokeWidth="1.5" strokeDasharray="4" />
              <line x1="60" y1="100" x2="180" y2="100" stroke="#000" strokeWidth="1.5" strokeDasharray="4" />
              <line x1="60" y1="140" x2="180" y2="140" stroke="#000" strokeWidth="1.5" strokeDasharray="4" />
              <circle cx="80" cy="60" r="5" fill="none" stroke="#000" strokeWidth="1.5" />
              <circle cx="120" cy="100" r="5" fill="none" stroke="#000" strokeWidth="1.5" />
              <circle cx="160" cy="140" r="5" fill="none" stroke="#000" strokeWidth="1.5" />
              <text x="80" y="45" textAnchor="middle" className="text-xs">$10,000</text>
              <text x="120" y="85" textAnchor="middle" className="text-xs">$8,500</text>
              <text x="160" y="125" textAnchor="middle" className="text-xs">$7,000</text>
              <text x="80" y="175" textAnchor="middle" className="text-xs">Initial price</text>
              <text x="120" y="175" textAnchor="middle" className="text-xs">Final price</text>
              <text x="160" y="175" textAnchor="middle" className="text-xs">Market value</text>
              <path d="M80 65 C 90 75, 100 85, 120 95" fill="none" stroke="#000" strokeWidth="1" />
              <path d="M120 105 C 130 115, 140 125, 160 135" fill="none" stroke="#000" strokeWidth="1" />
            </svg>
            <p className="text-sm text-center mt-4">First reference point influences judgment</p>
          </div>
        </div>
      );
    case "sunk-cost":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <span className="text-lg font-semibold">Sunk Cost Fallacy</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <svg width="240" height="200" viewBox="0 0 240 200" className="mx-auto">
              <path d="M120 40 C 100 40, 90 60, 90 80 C 90 100, 100 120, 120 120 C 140 120, 150 100, 150 80 C 150 60, 140 40, 120 40" fill="none" stroke="#000" strokeWidth="2" />
              <circle cx="110" cy="70" r="3" fill="#000" />
              <circle cx="130" cy="70" r="3" fill="#000" />
              <path d="M110 90 C 115 95, 125 95, 130 90" stroke="#000" strokeWidth="1.5" fill="none" />
              <rect x="60" y="140" width="120" height="40" rx="5" fill="none" stroke="#000" strokeWidth="2" />
              <line x1="60" y1="140" x2="180" y2="180" stroke="#000" strokeWidth="2" />
              <text x="120" y="165" textAnchor="middle" className="text-xs">Resources already spent</text>
              <path d="M40 60 C 50 50, 60 60, 70 70" stroke="#000" strokeWidth="1" fill="none" />
              <path d="M40 80 C 50 70, 60 80, 70 90" stroke="#000" strokeWidth="1" fill="none" />
              <path d="M170 70 C 180 60, 190 70, 200 80" stroke="#000" strokeWidth="1" fill="none" />
              <path d="M170 90 C 180 80, 190 90, 200 100" stroke="#000" strokeWidth="1" fill="none" />
              <text x="55" y="40" textAnchor="middle" className="text-xs">Past</text>
              <text x="185" y="40" textAnchor="middle" className="text-xs">Future</text>
            </svg>
            <p className="text-sm text-center mt-4">Continuing due to past investments despite losses</p>
          </div>
        </div>
      );
    case "groupthink":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <span className="text-lg font-semibold">Groupthink</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <svg width="240" height="200" viewBox="0 0 240 200" className="mx-auto">
              <circle cx="120" cy="100" r="60" fill="none" stroke="#000" strokeWidth="1.5" />
              <circle cx="100" cy="80" r="10" fill="none" stroke="#000" strokeWidth="1" />
              <circle cx="130" cy="70" r="10" fill="none" stroke="#000" strokeWidth="1" />
              <circle cx="150" cy="100" r="10" fill="none" stroke="#000" strokeWidth="1" />
              <circle cx="130" cy="130" r="10" fill="none" stroke="#000" strokeWidth="1" />
              <circle cx="90" cy="110" r="10" fill="none" stroke="#000" strokeWidth="1" />
              <circle cx="165" cy="60" r="15" fill="none" stroke="#000" strokeWidth="1.5" strokeDasharray="4" />
              <text x="165" y="63" textAnchor="middle" className="text-[8px]">Silent</text>
              <text x="165" y="71" textAnchor="middle" className="text-[8px]">dissent</text>
              <text x="120" y="170" textAnchor="middle" className="text-xs">Consensus over critical thinking</text>
              <line x1="150" y1="55" x2="155" y2="47" stroke="#000" strokeWidth="1" />
            </svg>
            <p className="text-sm text-center mt-4">Groups prioritize harmony over critical evaluation</p>
          </div>
        </div>
      );
    case "clustering":
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <span className="text-lg font-semibold">Clustering Illusion</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <svg width="240" height="200" viewBox="0 0 240 200" className="mx-auto">
              <line x1="40" y1="160" x2="200" y2="160" stroke="#000" strokeWidth="2" />
              <line x1="40" y1="40" x2="40" y2="160" stroke="#000" strokeWidth="2" />
              <path d="M40 140 C 60 130, 80 145, 100 120 C 120 100, 140 90, 160 65 C 180 45, 200 35, 200 35" fill="none" stroke="#000" strokeWidth="1.5" />
              <circle cx="100" cy="120" r="3" fill="#000" />
              <circle cx="120" cy="100" r="3" fill="#000" />
              <circle cx="140" cy="90" r="3" fill="#000" />
              <circle cx="160" cy="65" r="3" fill="#000" />
              <ellipse cx="140" cy="90" rx="35" ry="25" stroke="#000" strokeWidth="1" strokeDasharray="4" fill="none" />
              <text x="140" y="65" textAnchor="middle" className="text-xs">"Pattern"</text>
              <text x="120" y="180" textAnchor="middle" className="text-xs">Seeing patterns in randomness</text>
            </svg>
            <p className="text-sm text-center mt-4">Finding patterns in truly random sequences</p>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <span className="text-lg font-semibold">Cognitive Bias</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <Brain className="w-32 h-32 mx-auto opacity-80" />
            <p className="text-sm text-center mt-4">Systematic patterns of deviation from rationality</p>
          </div>
        </div>
      );
  }
};

export default BiasIllustration;
