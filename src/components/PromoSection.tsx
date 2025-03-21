
import React from "react";
import GradientButton from "./GradientButton";
import { ArrowUpRight } from "lucide-react";

const PromoSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cognilense-background to-white/60 z-0"></div>
      
      {/* Card deck image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
        <img 
          src="/lovable-uploads/7230cc9c-7de8-4104-802f-c77a9810fe53.png" 
          alt="CogniLense Card Decks" 
          className="w-full h-auto object-contain" 
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center pt-[280px] md:pt-[320px] max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-domine font-bold mb-6">
            Discover the full potential of CogniLense!
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
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
