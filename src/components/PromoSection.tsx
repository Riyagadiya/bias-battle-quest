
import React from "react";
import GradientButton from "./GradientButton";

const PromoSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f9f9f9] z-0"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Gradient background container */}
        <div className="relative max-w-4xl mx-auto rounded-2xl p-10 overflow-hidden">
          {/* Subtle gradient background */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              background: "linear-gradient(135deg, #71BD45, #F7D465, #518FF7, #E59B72)",
              opacity: "0.15", // Subtle gradient
              borderRadius: "1rem"
            }}
          ></div>
          
          <div className="flex flex-col items-center text-center pt-14 pb-6 relative z-10">
            <h2 className="font-domine font-bold text-3xl md:text-[40px] leading-[58px] tracking-[-3%] mb-4">
              "Discover the full potential"<br />
              <span>of CogniLense!</span>
            </h2>
            
            <p className="font-inter font-normal text-lg md:text-[20px] leading-normal tracking-tight text-muted-foreground mb-8 max-w-2xl">
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
      </div>
    </section>
  );
};

export default PromoSection;
