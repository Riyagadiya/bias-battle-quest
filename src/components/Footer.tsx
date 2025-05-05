
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-white border-t border-gray-100 py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex ${isMobile ? 'flex-col space-y-6' : 'flex-row items-center justify-between'}`}>
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/edf5b2d2-b28c-4ff8-9e6a-458af9b1b8f8.png" 
              alt="Cognilense Logo" 
              className="h-6 md:h-8 w-auto mb-3"
            />
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © 2023 Cognilense. All rights reserved.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="https://monsoonfish.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://monsoonfish.com/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="https://monsoonfish.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
