
import { Plus, Minus } from "lucide-react";

interface CardDeckProps {
  deck: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    backgroundColor: string;
    hoverColor: string;
    cardCount: string;
    price: number;
    mrp: number;
    discount: string;
    shipping: string;
  };
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
}: CardDeckProps) => {
  return (
    <div 
      className="flex gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-all cursor-pointer"
      onClick={() => onDeckClick(deck.title)}
    >
      <div 
        className="w-16 h-16 rounded-md flex items-center justify-center shrink-0"
        style={{ backgroundColor: deck.backgroundColor }}
      >
        <img 
          src={deck.imageUrl} 
          alt={deck.title} 
          className="w-12 h-12 object-contain" 
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h5 className="font-domine text-sm mb-1 truncate">{deck.title}</h5>
        <div className="text-xs text-muted-foreground mb-1">{deck.cardCount}</div>
        
        <div className="flex items-center gap-2 mt-auto">
          {/* Swapped the positions of MRP and current price here */}
          <span className="text-sm line-through text-muted-foreground">₹{deck.price}</span>
          <span className="font-medium">₹{deck.mrp}</span>
          <span className="text-xs text-green-600">{deck.discount}</span>
        </div>
      </div>
      
      <div className="flex flex-col items-end justify-between gap-2">
        <button 
          className="text-xs text-cognilense-blue hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(deck.id);
          }}
        >
          Add to cart
        </button>
        
        <div className="flex items-center border border-gray-200 rounded-md">
          <button 
            className="p-1 hover:bg-gray-50"
            onClick={(e) => {
              e.stopPropagation();
              onQuantityChange(deck.id, -1);
            }}
          >
            <Minus size={14} />
          </button>
          <span className="px-2 text-sm">{quantity}</span>
          <button 
            className="p-1 hover:bg-gray-50"
            onClick={(e) => {
              e.stopPropagation();
              onQuantityChange(deck.id, 1);
            }}
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDeckItem;
