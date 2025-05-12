
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/context/QuizContext";
import { useCart } from "@/context/CartContext";
import { useDiscount } from "@/context/DiscountContext";
import { useIsMobile } from "@/hooks/use-mobile";
import CardDeckItem from "./CardDeckItem";
import PriceSummary from "./PriceSummary";
import OrderInformation from "./OrderInformation";

// Constants for pricing
const ORIGINAL_PRICE = 999; // Original price is always 999 per deck
const DISCOUNT_PERCENT = 30; // 30% discount when applicable

// Card deck data
const cardDecks = [
  {
    id: 1,
    title: "Cognitive Biases Card Deck",
    oneLiner: "",
    description: "Cognitive biases are mental shortcuts. Our tool helps you harness them to solve problems, challenge assumptions, and make better decisions.",
    imageUrl: "/lovable-uploads/bfa3ac45-7fda-4588-b9a6-2b8aeae3aa5f.png",
    backgroundColor: "#FDDE81",
    hoverColor: "#FCD14D",
    cardCount: "39 Cards",
    price: 699,
    mrp: ORIGINAL_PRICE,
    discount: `${DISCOUNT_PERCENT}% off`,
    shipping: "Free Shipping",
  },
  {
    id: 2,
    title: "Research Method Card Deck",
    oneLiner: "",
    description: "Explore the design process—a structured framework for creative thinking and crafting meaningful, user-centered solutions.",
    imageUrl: "/lovable-uploads/5a5bfd84-16d2-4308-a4f3-099fe574dc51.png",
    backgroundColor: "#D4E3A6",
    hoverColor: "#C4D985",
    cardCount: "39 Cards",
    price: 699,
    mrp: ORIGINAL_PRICE,
    discount: `${DISCOUNT_PERCENT}% off`,
    shipping: "Free Shipping",
  },
  {
    id: 3,
    title: "Thinking Hat Card Deck",
    oneLiner: "",
    description: "Delve into UX laws—fundamental principles that shape the way we think about design, encouraging deeper insights and fostering more intuitive, human-centered solutions.",
    imageUrl: "/lovable-uploads/587a795b-4e10-45d4-b143-5047a2be78a3.png",
    backgroundColor: "#F8C1A6",
    hoverColor: "#F3986B",
    cardCount: "36 Cards",
    price: 699,
    mrp: ORIGINAL_PRICE,
    discount: `${DISCOUNT_PERCENT}% off`,
    shipping: "Free Shipping",
  },
  {
    id: 4,
    title: "UX Laws Card Deck",
    oneLiner: "",
    description: "Dive into UX laws, essential principles that streamline design decisions and empower you to create intuitive, user-centered experiences with ease.",
    imageUrl: "/lovable-uploads/ec436adc-58d5-41f3-aeac-d47aafacef08.png",
    backgroundColor: "#BEE5FA",
    hoverColor: "#92D4F6",
    cardCount: "40 Cards",
    price: 699,
    mrp: ORIGINAL_PRICE,
    discount: `${DISCOUNT_PERCENT}% off`,
    shipping: "Free Shipping",
  },
];

const ResultsActionTabs = () => {
  const navigate = useNavigate();
  const { addToCart, getCartCount } = useCart();
  const { showDiscount } = useDiscount();
  const isMobile = useIsMobile();
  const [quantities, setQuantities] = useState<{[key: number]: number}>({
    1: 0, 2: 0, 3: 0, 4: 0
  });
  
  // Get current cart count
  const cartCount = getCartCount();
  
  // State for price calculations
  const [priceSummary, setPriceSummary] = useState({
    subtotal: 0,
    mrpTotal: 0,
    discount: 0,
    total: 0,
    itemCount: 0
  });
  
  // Calculate price whenever quantities change
  useEffect(() => {
    let subtotal = 0;
    let mrpTotal = 0;
    let itemCount = 0;
    
    Object.entries(quantities).forEach(([deckId, quantity]) => {
      const deck = cardDecks.find(d => d.id === parseInt(deckId));
      if (deck && quantity > 0) {
        // Always calculate mrpTotal using original price
        mrpTotal += deck.mrp * quantity;
        
        // Use discounted price only if discount is active
        const actualPrice = showDiscount ? deck.price : deck.mrp;
        subtotal += actualPrice * quantity;
        
        itemCount += quantity;
      }
    });
    
    const discount = showDiscount ? (mrpTotal - subtotal) : 0;
    const total = showDiscount ? subtotal : mrpTotal;
    
    setPriceSummary({
      subtotal,
      mrpTotal,
      discount,
      total,
      itemCount
    });
  }, [quantities, showDiscount]);

  const handleQuantityChange = (deckId: number, change: number) => {
    setQuantities(prev => {
      const newQuantity = Math.max(0, (prev[deckId] || 0) + change);
      return { ...prev, [deckId]: newQuantity };
    });
  };

  const handleAddToCart = (deckId: number) => {
    const quantity = 1; // Add one at a time
    const deck = cardDecks.find(d => d.id === deckId);
    
    if (deck) {
      // Use original price if no discount is active
      const actualPrice = showDiscount ? deck.price : deck.mrp;
      
      addToCart({
        title: deck.title,
        quantity,
        price: actualPrice
      });
      
      toast.success(`${deck.title} added to cart`);
    }
  };

  const handleDeckClick = (title: string) => {
    navigate(`/product/${encodeURIComponent(title)}`);
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-auto">
      <Card className="border-0 shadow-none h-full">
        <CardContent className="pt-4 md:pt-6 px-3 md:px-4 h-full">
          <div className="text-center mb-4 md:mb-6">
            <h3 className="font-domine text-xl md:text-2xl font-semibold">
              {showDiscount ? "Boom! You Just Unlocked 30% Off!" : "Check Out Our Card Decks!"}
            </h3>
            <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
              {showDiscount 
                ? "Grab your Card Decks now – offer valid for a limited time!" 
                : "Complete the quiz to unlock special discounts!"}
            </p>
          </div>
          
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h4 className="font-domine text-base md:text-lg font-medium">Card Decks</h4>
            <button 
              className="text-xs md:text-sm flex items-center text-cognilense-blue hover:underline relative" 
              onClick={handleViewCart}
            >
              View Cart 
              <ShoppingCart size={isMobile ? 14 : 16} className="ml-1" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black/20 text-black text-xs w-4 md:w-5 h-4 md:h-5 rounded-full flex items-center justify-center backdrop-blur-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {cardDecks.map((deck) => (
              <CardDeckItem
                key={deck.id}
                deck={deck}
                quantity={quantities[deck.id] || 0}
                onQuantityChange={handleQuantityChange}
                onAddToCart={handleAddToCart}
                onDeckClick={handleDeckClick}
              />
            ))}
          </div>
          
          {/* Dynamic Price Summary Section */}
          <PriceSummary 
            {...priceSummary}
            onViewCart={handleViewCart}
            showDiscount={showDiscount}
          />
          
          {/* Order Information Section */}
          <OrderInformation />
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsActionTabs;
