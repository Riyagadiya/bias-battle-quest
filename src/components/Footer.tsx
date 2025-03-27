
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-8 bg-cognilense-background relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-16">
          <div className="space-y-6">
            <div>
              <img 
                src="/lovable-uploads/edf5b2d2-b28c-4ff8-9e6a-458af9b1b8f8.png" 
                alt="Cognilense Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <p className="text-muted-foreground max-w-md">
              Cognilense brings the power of cognitive science to life through beautifully designed
              card decks that help you understand the hidden biases shaping your decisions.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black bg-opacity-5 flex items-center justify-center transition hover:bg-opacity-10"
                aria-label="Twitter"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.897c-.75.33-1.5.577-2.333.698.85-.5 1.5-1.288 1.834-2.231-.833.5-1.667.833-2.583 1.033-.833-.833-1.917-1.333-3.083-1.333-2.334 0-4.167 1.833-4.167 4.167 0 .333 0 .666.083.917-3.5-.167-6.583-1.833-8.583-4.333-.417.666-.583 1.333-.583 2.166 0 1.5.75 2.75 1.833 3.5-.667 0-1.333-.167-1.833-.5v.083c0 2 1.417 3.667 3.333 4-.333.084-.75.167-1.167.167-.25 0-.5 0-.75-.083.5 1.667 2 2.833 3.75 2.833-1.333 1.083-3.083 1.75-4.917 1.75-.333 0-.666 0-1-.083 1.75 1.167 3.833 1.833 6 1.833 7.167 0 11.083-5.917 11.083-11.083v-.5c.75-.5 1.417-1.167 1.917-1.917L22 5.897Z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black bg-opacity-5 flex items-center justify-center transition hover:bg-opacity-10"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black bg-opacity-5 flex items-center justify-center transition hover:bg-opacity-10"
                aria-label="Instagram"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.982c2.937 0 3.285.011 4.445.064 1.072.05 1.655.228 2.042.379.514.2.88.44 1.265.824.384.384.624.75.824 1.264.15.387.33.97.378 2.042.053 1.16.064 1.508.064 4.445 0 2.937-.011 3.285-.064 4.445-.049 1.072-.228 1.655-.378 2.042-.2.514-.44.88-.824 1.265-.385.384-.751.624-1.265.824-.387.15-.97.33-2.042.378-1.16.053-1.508.064-4.445.064-2.937 0-3.285-.011-4.445-.064-1.072-.049-1.655-.228-2.042-.378-.514-.2-.88-.44-1.265-.824a3.479 3.479 0 0 1-.824-1.265c-.15-.387-.33-.97-.379-2.042-.053-1.16-.064-1.508-.064-4.445 0-2.937.011-3.285.064-4.445.049-1.072.228-1.655.379-2.042.2-.514.44-.88.824-1.264a3.478 3.478 0 0 1 1.265-.824c.387-.15.97-.33 2.042-.379 1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066-1.171.054-1.97.24-2.67.512a5.46 5.46 0 0 0-1.97 1.283 5.46 5.46 0 0 0-1.283 1.97c-.272.7-.458 1.499-.512 2.67C.983 8.638.97 9.013.97 12c0 2.987.013 3.362.066 4.535.054 1.171.24 1.97.512 2.67a5.46 5.46 0 0 0 1.283 1.97 5.46 5.46 0 0 0 1.97 1.283c.7.272 1.499.458 2.67.512C8.638 23.017 9.013 23.03 12 23.03c2.987 0 3.362-.013 4.535-.066 1.171-.054 1.97-.24 2.67-.512a5.46 5.46 0 0 0 1.97-1.283 5.46 5.46 0 0 0 1.283-1.97c.272-.7.458-1.499.512-2.67.053-1.173.066-1.548.066-4.535 0-2.987-.013-3.362-.066-4.535-.054-1.171-.24-1.97-.512-2.67a5.46 5.46 0 0 0-1.283-1.97 5.46 5.46 0 0 0-1.97-1.283c-.7-.272-1.499-.458-2.67-.512C15.362 1.013 14.987 1 12 1Zm0 5.351A5.649 5.649 0 0 0 6.352 12 5.649 5.649 0 0 0 12 17.648 5.649 5.649 0 0 0 17.648 12 5.649 5.649 0 0 0 12 6.352Zm0 9.316A3.668 3.668 0 0 1 8.333 12 3.668 3.668 0 0 1 12 8.333 3.668 3.668 0 0 1 15.667 12 3.668 3.668 0 0 1 12 15.667Zm7.192-9.539a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-domine text-xl font-semibold">Know More About Cognilense</h3>
            
            <p className="text-muted-foreground max-w-md">
              Explore our complete collection of cognitive bias cards, designed to help you 
              recognize and overcome the mental shortcuts that affect your decision-making.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:shadow-md transition duration-300">
                <h4 className="font-domine font-semibold mb-1">Decision Making</h4>
                <p className="text-sm text-muted-foreground">Understand the biases that influence your choices</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:shadow-md transition duration-300">
                <h4 className="font-domine font-semibold mb-1">Memory Biases</h4>
                <p className="text-sm text-muted-foreground">Discover how your memory can trick you</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:shadow-md transition duration-300">
                <h4 className="font-domine font-semibold mb-1">Social Biases</h4>
                <p className="text-sm text-muted-foreground">Learn about biases in group settings</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:shadow-md transition duration-300">
                <h4 className="font-domine font-semibold mb-1">Belief Biases</h4>
                <p className="text-sm text-muted-foreground">Explore how beliefs shape perception</p>
              </div>
            </div>
            
            <a 
              href="https://www.amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cognilense-blue hover:underline"
            >
              View our Amazon store
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Cognilense. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-black transition">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-black transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
