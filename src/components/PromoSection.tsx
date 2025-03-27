
import React from "react";
import GradientButton from "./GradientButton";

const PromoSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cognilense-background to-white/60 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center pt-12 max-w-3xl mx-auto">
          <h2 className="font-domine font-bold text-3xl md:text-[40px] leading-[58px] tracking-[-3%] mb-4">
            Discover the full potential<br />
            <span>of CogniLense!</span>
          </h2>
          
          <p className="font-inter font-normal text-lg md:text-[20px] leading-[46px] tracking-[0%] text-muted-foreground mb-8 max-w-2xl">
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
