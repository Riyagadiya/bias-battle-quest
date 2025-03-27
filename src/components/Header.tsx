
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/edf5b2d2-b28c-4ff8-9e6a-458af9b1b8f8.png" 
              alt="Cognilense Logo" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="https://monsoonfish.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-worksans text-sm font-semibold transition-colors duration-200 hover:text-cognilense-blue"
            >
              monsoonfish.com
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-black transition-all duration-300 ease-in-out" />
            ) : (
              <Menu size={24} className="text-black transition-all duration-300 ease-in-out" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex flex-col space-y-4 pb-4">
            <a 
              href="https://monsoonfish.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-worksans text-sm font-semibold py-2 transition-colors duration-200 hover:text-cognilense-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              monsoonfish.com
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
