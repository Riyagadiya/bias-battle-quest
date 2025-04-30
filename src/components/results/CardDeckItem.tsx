
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus } from "lucide-react";

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
          <div className="text-xs text-cognilense-green mt-1 font-medium">
            Subtotal: ₹{deck.price * quantity}
          </div>
        )}
      </div>
      
      <div className="shrink-0 flex items-center gap-2">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => onQuantityChange(deck.id, -1)}
          disabled={quantity <= 0}
          className="h-8 w-8 rounded-full"
        >
          <Minus size={16} />
        </Button>
        
        <span className="w-8 text-center">{quantity || 0}</span>
        
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => onQuantityChange(deck.id, 1)}
          className="h-8 w-8 rounded-full"
        >
          <Plus size={16} />
        </Button>
        
        <Button 
          className="ml-2"
          variant="default"
          size="sm"
          onClick={() => onAddToCart(deck.id)}
          disabled={quantity <= 0}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default CardDeckItem;
