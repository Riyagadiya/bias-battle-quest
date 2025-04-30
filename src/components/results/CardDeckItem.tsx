
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  
  return (
    <div 
      key={deck.id} 
      className="flex flex-col md:flex-row items-center gap-4 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div 
        className="w-20 h-20 rounded-lg flex items-center justify-center p-2 cursor-pointer"
        style={{ backgroundColor: deck.backgroundColor }}
        onClick={() => onDeckClick(deck.title)}
      >
        <img src={deck.imageUrl} alt={deck.title} className="object-contain max-h-full" />
      </div>
      
      <div className="flex-1 cursor-pointer" onClick={() => onDeckClick(deck.title)}>
        <h4 className="font-medium line-clamp-1">{deck.title}</h4>
        <p className="text-xs text-gray-600 mb-1">{deck.oneLiner}</p>
        <p className="text-xs text-muted-foreground">{deck.cardCount}</p>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold">₹{deck.price}</span>
          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
            {deck.discount}
          </Badge>
          <span className="text-xs text-muted-foreground line-through">
            ₹{deck.mrp}
          </span>
        </div>
        
        {quantity > 0 && (
          <div className="text-xs font-medium mt-1">
            Subtotal: ₹{deck.price * quantity}
          </div>
        )}
      </div>
      
      <div className="shrink-0 flex flex-col items-center gap-2">
        {/* Unified quantity control in a single rounded rectangle */}
        <div className="flex items-center border rounded-full overflow-hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onQuantityChange(deck.id, -1)}
            disabled={quantity <= 0}
            className="h-8 w-8 rounded-none border-r border-gray-100"
          >
            <Minus size={16} />
          </Button>
          
          <span className="w-8 text-center font-medium">{quantity || 0}</span>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onQuantityChange(deck.id, 1)}
            className="h-8 w-8 rounded-none border-l border-gray-100"
          >
            <Plus size={16} />
          </Button>
        </div>
        
        {/* Side-by-side Add and Buy buttons */}
        <div className="flex items-center gap-2 mt-2 w-full">
          <Button 
            variant="outline"
            size="sm"
            onClick={() => {
              onAddToCart(deck.id);
              // Navigate to cart page after adding
              navigate('/cart');
            }}
            className="rounded-full px-4 py-1 text-xs h-8"
          >
            Add
          </Button>
          
          <Button 
            variant="default"
            size="sm"
            className="bg-cognilense-blue hover:bg-cognilense-blue/90 rounded-full px-4 py-1 text-xs h-8 flex items-center gap-1"
            onClick={() => {
              onAddToCart(deck.id);
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
