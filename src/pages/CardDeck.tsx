
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartIcon from "@/components/CartIcon";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import GradientButton from "@/components/GradientButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useDiscount } from "@/context/DiscountContext";
import { useIsMobile } from "@/hooks/use-mobile";

type CardDeckProps = {
  id: number;
  title: string;
  oneLiner: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  hoverColor: string;
  cardCount: string;
  price: number;
  shipping: string;
}

const cardDecks: CardDeckProps[] = [
  {
    id: 1,
    title: "Cognitive Biases Card Deck",
    oneLiner: "Harness mental shortcuts for better decisions",
    description: "Cognitive biases are mental shortcuts. Our tool helps you harness them to solve problems, challenge assumptions, and make better decisions.",
    imageUrl: "/lovable-uploads/bfa3ac45-7fda-4588-b9a6-2b8aeae3aa5f.png", // Updated image URL
    backgroundColor: "#FDDE81",
    hoverColor: "#FCD14D",
    cardCount: "38 Cards",
    price: 999,
    shipping: "Free Shipping"
  },
  {
    id: 2,
    title: "Research Method Card Deck",
    oneLiner: "Explore structured creative thinking frameworks",
    description: "Explore the design process—a structured framework for creative thinking and crafting meaningful, user-centered solutions.",
    imageUrl: "/lovable-uploads/5a5bfd84-16d2-4308-a4f3-099fe574dc51.png", // Updated with new image
    backgroundColor: "#D4E3A6",
    hoverColor: "#C4D985",
    cardCount: "42 Cards",
    price: 999,
    shipping: "Free Shipping"
  },
  {
    id: 3,
    title: "Thinking Hat Card Deck",
    oneLiner: "Deeper insights for human-centered solutions",
    description: "Delve into UX laws—fundamental principles that shape the way we think about design, encouraging deeper insights and fostering more intuitive, human-centered solutions.",
    imageUrl: "/lovable-uploads/587a795b-4e10-45d4-b143-5047a2be78a3.png", // Updated with new thinking hats image
    backgroundColor: "#F8C1A6",
    hoverColor: "#F3986B",
    cardCount: "36 Cards",
    price: 999,
    shipping: "Free Shipping"
  },
  {
    id: 4,
    title: "UX Laws Card Deck",
    oneLiner: "Create intuitive user experiences with ease",
    description: "Dive into UX laws, essential principles that streamline design decisions and empower you to create intuitive, user-centered experiences with ease.",
    imageUrl: "/lovable-uploads/ec436adc-58d5-41f3-aeac-d47aafacef08.png", // Updated with new UX Laws image
    backgroundColor: "#BEE5FA",
    hoverColor: "#92D4F6",
    cardCount: "40 Cards",
    price: 999,
    shipping: "Free Shipping"
  }
];

const CardDeck = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const { showDiscount } = useDiscount();
  const isMobile = useIsMobile();
  const [quantities, setQuantities] = useState<{[key: number]: number}>({
    1: 0, 2: 0, 3: 0, 4: 0
  });
  
  const handleQuantityChange = (deckId: number, change: number) => {
    setQuantities(prev => {
      const newQuantity = Math.max(0, (prev[deckId] || 0) + change);
      return { ...prev, [deckId]: newQuantity };
    });
  };
  
  const handleAddToCart = (deck: CardDeckProps) => {
    const quantity = quantities[deck.id] || 1;
    // Price based on discount status
    const price = showDiscount ? 699 : 999;
    
    // If quantity is 0, set it to 1 before adding to cart
    if (quantities[deck.id] <= 0) {
      handleQuantityChange(deck.id, 1);
    }
    
    addToCart({
      title: deck.title,
      quantity: quantity > 0 ? quantity : 1,
      price: price
    });
    
    toast({
      title: "Added to cart",
      description: `${quantity > 0 ? quantity : 1} x ${deck.title} added to cart`
    });
  };
  
  const handleBuyNow = (deck: CardDeckProps) => {
    const quantity = quantities[deck.id] || 1;
    
    // If quantity is 0, set it to 1 before buying
    if (quantities[deck.id] <= 0) {
      handleQuantityChange(deck.id, 1);
    }
    
    addToCart({
      title: deck.title,
      quantity: quantity > 0 ? quantity : 1,
      price: deck.price
    });
    
    navigate('/checkout');
  };
  
  const handleViewDetails = (title: string) => {
    navigate(`/product/${encodeURIComponent(title)}`);
  };
  
  // Calculate subtotal based on discount status
  const calculateSubtotal = (deckId: number) => {
    const quantity = quantities[deckId] || 0;
    // Apply actual price based on discount
    const actualPrice = showDiscount ? 699 : 999;
    return quantity > 0 ? quantity * actualPrice : actualPrice;
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartIcon />
      
      <main className="flex-grow py-8 md:py-16 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.4 }} 
          className="container mx-auto"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-domine font-semibold text-left md:text-center mb-6 md:mb-12">Ready, Set, Grab a Deck!</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {cardDecks.map((deck, index) => (
                <motion.div 
                  key={deck.title} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-3 md:p-5">
                    <div className="flex flex-col">
                      {/* Image section with 1:1 ratio */}
                      <div 
                        className="w-full mb-3 md:mb-5 cursor-pointer"
                        onClick={() => handleViewDetails(deck.title)}
                      >
                        <div 
                          className="aspect-square rounded-lg overflow-hidden flex items-center justify-center relative"
                          style={{ backgroundColor: deck.backgroundColor }}
                        >
                          <AspectRatio ratio={1/1} className="w-full h-full">
                            <img 
                              src={deck.imageUrl} 
                              alt={deck.title} 
                              className="object-cover w-full h-full transition-all duration-300 hover:scale-105" 
                            />
                          </AspectRatio>
                        </div>
                      </div>
                      
                      {/* Content section */}
                      <div className="flex flex-col sm:flex-row justify-between">
                        {/* Left side: Title, description, card count */}
                        <div className="flex-1 mb-3 sm:mb-0 sm:pr-4 text-left">
                          <h3 
                            className="text-base md:text-xl font-domine font-semibold mb-1 cursor-pointer hover:text-gray-700 transition-colors"
                            onClick={() => handleViewDetails(deck.title)}
                          >
                            {deck.title}
                          </h3>
                          <p className="text-gray-600 text-xs md:text-sm mb-1 line-clamp-2">{deck.oneLiner}</p>
                          <p className="text-gray-500 text-xs">{deck.cardCount}</p>
                        </div>
                        
                        {/* Right side: Price, shipping, quantity, buttons */}
                        <div className={`flex flex-col items-start ${isMobile ? "" : "md:items-end"}`}>
                          {/* Single price with dynamic subtotal */}
                          <div className="flex flex-col items-start md:items-end">
                            <div className="flex items-center">
                              <span className="font-bold text-base md:text-lg">₹{showDiscount ? 699 : 999}</span>
                              
                              {showDiscount && (
                                <>
                                  <span className="text-xs text-gray-500 ml-2 line-through">₹999</span>
                                  <span className="text-xs text-green-600 ml-2">30% off</span>
                                </>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 mb-3">{deck.shipping}</p>
                          </div>
                          
                          {/* Quantity control */}
                          <div className="flex items-center justify-between border rounded-full p-1 w-24 md:w-28 mb-3 md:mb-4">
                            <button 
                              onClick={() => handleQuantityChange(deck.id, -1)} 
                              className="p-1 hover:bg-gray-100 rounded-full"
                              disabled={quantities[deck.id] <= 0}
                            >
                              <Minus size={isMobile ? 14 : 16} className={quantities[deck.id] <= 0 ? "text-gray-300" : ""} />
                            </button>
                            <span className="font-medium text-xs md:text-sm">{quantities[deck.id] || 0}</span>
                            <button 
                              onClick={() => handleQuantityChange(deck.id, 1)} 
                              className="p-1 hover:bg-gray-100 rounded-full"
                            >
                              <Plus size={isMobile ? 14 : 16} />
                            </button>
                          </div>
                          
                          {/* Display calculated subtotal when quantity > 0 */}
                          {quantities[deck.id] > 0 && (
                            <div className="text-xs md:text-sm mb-3 flex flex-col items-start md:items-end">
                              <div className="flex items-center gap-1">
                                <span className="text-gray-600">Subtotal:</span>
                                <span className="font-semibold">₹{calculateSubtotal(deck.id)}</span>
                              </div>
                              <span className="text-xs text-gray-500">
                                (₹{showDiscount ? 699 : 999} × {quantities[deck.id]})
                              </span>
                            </div>
                          )}
                          
                          {/* Action buttons side by side */}
                          <div className="flex justify-center gap-2 w-full">
                            <Button 
                              variant="outline" 
                              className="w-full rounded-full text-xs md:text-sm py-1 md:py-2 flex items-center justify-center"
                              onClick={() => handleAddToCart(deck)}
                            >
                              Add to Cart
                              <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                            </Button>
                            
                            <GradientButton 
                              className="w-full text-xs md:text-sm py-1 md:py-2 flex items-center justify-center"
                              onClick={() => handleBuyNow(deck)}
                              icon={false}
                            >
                              Buy Now
                              <ShoppingBag className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                            </GradientButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CardDeck;
