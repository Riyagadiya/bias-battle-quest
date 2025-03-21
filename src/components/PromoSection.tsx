
import React from "react";
import GradientButton from "./GradientButton";
import { ArrowUpRight } from "lucide-react";

const PromoSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cognilense-background to-white/60 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center pt-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-domine font-bold mb-4">
            Discover the full potential of CogniLense!
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
            Whether you're looking to solve product challenges or dive deeper into insights through our workshops, let's collaborate.
          </p>
          
          <a 
            href="https://monsoonfish.com/cognilense/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GradientButton className="px-8 py-4">
              Know more about card decks
            </GradientButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
