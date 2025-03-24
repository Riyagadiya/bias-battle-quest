
import React from "react";
import GradientButton from "./GradientButton";

const PromoSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f9f9f9] z-0"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Gradient background container */}
        <div className="relative max-w-4xl mx-auto rounded-2xl p-10 overflow-hidden">
          {/* Freeform gradient background */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(113, 189, 69, 0.15) 0%, rgba(113, 189, 69, 0) 50%),
                radial-gradient(circle at 80% 20%, rgba(247, 212, 101, 0.15) 0%, rgba(247, 212, 101, 0) 60%),
                radial-gradient(circle at 40% 80%, rgba(81, 143, 247, 0.15) 0%, rgba(81, 143, 247, 0) 50%),
                radial-gradient(circle at 70% 70%, rgba(229, 155, 114, 0.15) 0%, rgba(229, 155, 114, 0) 60%)
              `,
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
