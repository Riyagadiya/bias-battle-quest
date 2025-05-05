
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useDiscount } from "@/context/DiscountContext";

interface CardDeck {
  id: number;
  title: string;
  oneLiner: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  hoverColor: string;
  cardCount: string;
  price: number;
  mrp: number;
  discount: string;
  shipping: string;
}

interface CardDeckItemProps {
  deck: CardDeck;
  quantity: number;
  onQuantityChange: (deckId: number, change: number) => void;
  onAddToCart: (deckId: number) => void;
  onDeckClick: (title: string) => void;
}

const CardDeckItem = ({ 
  deck, 
  quantity, 
  onQuantityChange, 
  onAddToCart,
  onDeckClick
}: CardDeckItemProps) => {
  const navigate = useNavigate();
  const { showDiscount } = useDiscount();
  
  // Special image handling for specific decks
  const isCognitiveBiasDeck = deck.title.includes("Cognitive Bias");
  const isResearchMethodDeck = deck.title.includes("Research Method");
  const isThinkingHatDeck = deck.title.includes("Thinking Hat");
  const isUXLawsDeck = deck.title.includes("UX Laws");
  
  let imageUrl = deck.imageUrl;
  
  if (isCognitiveBiasDeck) {
    imageUrl = "/lovable-uploads/bfa3ac45-7fda-4588-b9a6-2b8aeae3aa5f.png";
  } else if (isResearchMethodDeck) {
    imageUrl = "/lovable-uploads/5a5bfd84-16d2-4308-a4f3-099fe574dc51.png";
  } else if (isThinkingHatDeck) {
    imageUrl = "/lovable-uploads/587a795b-4e10-45d4-b143-5047a2be78a3.png";
  } else if (isUXLawsDeck) {
    imageUrl = "/lovable-uploads/ec436adc-58d5-41f3-aeac-d47aafacef08.png";
  }
  
  // Handle quantity change and update cart directly
  const handleQuantityChange = (change: number) => {
    onQuantityChange(deck.id, change);
    // If quantity is increasing, add to cart immediately
    if (change > 0) {
      onAddToCart(deck.id);
    }
  };
  
  // Calculate actual price based on discount status
  const actualPrice = showDiscount ? deck.price : deck.mrp;
  
  // Calculate total price based on quantity
  const totalPrice = quantity > 0 ? actualPrice * quantity : actualPrice;
  
  return (
    <div 
      key={deck.id} 
      className="flex flex-col md:flex-row items-center gap-4 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div
        className="relative w-22 h-22 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer"
        style={{ 
          backgroundColor: deck.backgroundColor, 
          width: "5.5rem", 
          height: "5.5rem" 
        }}
        onClick={() => onDeckClick(deck.title)}
      >
        <AspectRatio ratio={1/1} className="w-full h-full">
          <img 
            src={imageUrl} 
            alt={deck.title} 
            className={`object-cover w-full h-full`} 
          />
        </AspectRatio>
      </div>
      
      <div className="flex-1 cursor-pointer" onClick={() => onDeckClick(deck.title)}>
        <h4 className="font-medium line-clamp-1 text-black hover:text-gray-500 transition-colors">{deck.title}</h4>
        <p className="text-xs text-gray-600 mb-1">{deck.oneLiner}</p>
        <p className="text-xs text-muted-foreground">{deck.cardCount}</p>
        
        <div className="flex items-center gap-2 mt-1">
          {showDiscount && (
            <>
              <span className="text-xs text-muted-foreground line-through">
                ₹{deck.mrp}
              </span>
              <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                {deck.discount}
              </Badge>
            </>
          )}
          <span className="font-medium">₹{actualPrice}</span>
        </div>
        
        {quantity > 0 && (
          <div className="text-xs font-medium mt-1 flex items-center gap-2">
            <span>Subtotal:</span>
            <span className="text-sm font-semibold">₹{totalPrice}</span>
            <span className="text-xs text-muted-foreground">
              (₹{actualPrice} × {quantity})
            </span>
          </div>
        )}
      </div>
      
      <div className="shrink-0 flex flex-col items-center gap-2">
        {/* Unified quantity control in a single rounded rectangle */}
        <div className="flex items-center border rounded-full overflow-hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 0}
            className="h-8 w-8 rounded-none border-r border-gray-100"
          >
            <Minus size={16} />
          </Button>
          
          <span className="w-8 text-center font-medium">{quantity || 0}</span>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleQuantityChange(1)}
            className="h-8 w-8 rounded-none border-l border-gray-100"
          >
            <Plus size={16} />
          </Button>
        </div>
        
        {/* Buy button only (removed View details) */}
        <div className="flex items-center justify-center gap-2 mt-2 w-full">
          <Button 
            variant="default"
            size="sm"
            className="bg-cognilense-blue hover:bg-cognilense-blue/90 rounded-full px-4 py-1 text-xs h-8 flex items-center gap-1"
            onClick={() => {
              // If there's no quantity selected yet, add 1 first
              if (quantity <= 0) {
                handleQuantityChange(1);
              }
              // Navigate directly to checkout page
              navigate('/checkout');
            }}
          >
            <ShoppingCart size={12} />
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardDeckItem;
