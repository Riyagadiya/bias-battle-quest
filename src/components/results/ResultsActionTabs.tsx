
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/context/QuizContext";
import { useCart } from "@/context/CartContext";
import CardDeckItem from "./CardDeckItem";
import PriceSummary from "./PriceSummary";
import OrderInformation from "./OrderInformation";

// Card deck data
const cardDecks = [{
  id: 1,
  title: "Cognitive Biases Card Deck",
  oneLiner: "",
  description: "Cognitive biases are mental shortcuts. Our tool helps you harness them to solve problems, challenge assumptions, and make better decisions.",
  imageUrl: "/lovable-uploads/e2f6c9a6-de98-414b-ab11-9d986bc15f8f.png",
  backgroundColor: "#FDDE81",
  hoverColor: "#FCD14D",
  cardCount: "38 Cards",
  price: 699,
  mrp: 999,
  discount: "30% off",
  shipping: "Free Shipping",
}, {
  id: 2,
  title: "Research Method Card Deck",
  oneLiner: "",
  description: "Explore the design process—a structured framework for creative thinking and crafting meaningful, user-centered solutions.",
  imageUrl: "/lovable-uploads/e64a3165-39cf-43df-bade-1cd41991cf97.png",
  backgroundColor: "#D4E3A6",
  hoverColor: "#C4D985",
  cardCount: "42 Cards",
  price: 699,
  mrp: 999,
  discount: "30% off",
  shipping: "Free Shipping",
}, {
  id: 3,
  title: "Thinking Hat Card Deck",
  oneLiner: "",
  description: "Delve into UX laws—fundamental principles that shape the way we think about design, encouraging deeper insights and fostering more intuitive, human-centered solutions.",
  imageUrl: "/lovable-uploads/fd80351d-b396-4b23-ad6d-03e387f35f3e.png",
  backgroundColor: "#F8C1A6",
  hoverColor: "#F3986B",
  cardCount: "36 Cards",
  price: 699,
  mrp: 999,
  discount: "30% off",
  shipping: "Free Shipping",
}, {
  id: 4,
  title: "UX Laws Card Deck",
  oneLiner: "",
  description: "Dive into UX laws, essential principles that streamline design decisions and empower you to create intuitive, user-centered experiences with ease.",
  imageUrl: "/lovable-uploads/063475da-7147-4ad6-9584-fe8c2e87706d.png",
  backgroundColor: "#BEE5FA",
  hoverColor: "#92D4F6",
  cardCount: "40 Cards",
  price: 699,
  mrp: 999,
  discount: "30% off",
  shipping: "Free Shipping",
}];

const ResultsActionTabs = () => {
  const navigate = useNavigate();
  const { addToCart, getCartCount } = useCart();
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
        subtotal += deck.price * quantity;
        mrpTotal += deck.mrp * quantity;
        itemCount += quantity;
      }
    });
    
    const discount = mrpTotal - subtotal;
    
    setPriceSummary({
      subtotal,
      mrpTotal,
      discount,
      total: subtotal,
      itemCount
    });
  }, [quantities]);

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
      addToCart({
        title: deck.title,
        quantity,
        price: deck.price
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
    // Modified to have h-full to take full height of parent container
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
      <Card className="border-0 shadow-none h-full flex-1">
        <CardContent className="pt-6 px-4 h-full flex flex-col">
          <div className="text-center mb-6">
            <h3 className="font-domine text-2xl font-semibold">Boom! You Just Unlocked 30% Off!</h3>
            <p className="text-muted-foreground mt-2">Grab your Card Decks now – offer valid for a limited time!</p>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-domine text-lg font-medium">Card Decks</h4>
            <button 
              className="text-sm flex items-center text-cognilense-blue hover:underline relative" 
              onClick={handleViewCart}
            >
              View Cart 
              <ShoppingCart size={16} className="ml-1" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black/20 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center backdrop-blur-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          
          {/* Make this div flex-grow to take available space */}
          <div className="space-y-4 flex-grow overflow-y-auto">
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
          />
          
          {/* Order Information Section */}
          <OrderInformation />
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsActionTabs;
