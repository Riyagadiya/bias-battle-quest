
import { useState } from "react";
import { Share2, Plus, Minus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardItemProps {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  hoverColor: string;
}

const CardItem = ({ 
  title, 
  description, 
  imageUrl,
  backgroundColor,
  hoverColor
}: CardItemProps) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div 
      className="rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col h-full relative"
      style={{ 
        backgroundColor,
        ['--hover-color' as string]: hoverColor 
      }}
      onMouseEnter={e => {
        (e.target as HTMLElement).style.backgroundColor = hoverColor;
      }}
      onMouseLeave={e => {
        (e.target as HTMLElement).style.backgroundColor = backgroundColor;
      }}
    >
      <button 
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
        onClick={() => {
          console.log('Share clicked');
        }}
      >
        <Share2 size={20} />
      </button>

      <div className="mb-6 flex justify-center">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-32 h-32 object-contain"
        />
      </div>
      
      <h3 className="text-xl font-domine font-semibold mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-6 flex-grow">
        {description}
      </p>
      
      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex items-center justify-between border rounded-full p-2">
          <button
            onClick={decreaseQuantity}
            className="p-1 hover:bg-black/5 rounded-full"
            disabled={quantity === 0}
          >
            <Minus size={20} />
          </button>
          <span className="font-medium">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="p-1 hover:bg-black/5 rounded-full"
          >
            <Plus size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <Button 
            className="w-full rounded-full bg-white text-black border border-black/20 hover:bg-black/5"
            onClick={() => console.log('Add to cart')}
          >
            <ShoppingCart className="mr-2" size={20} />
            Add to Cart
          </Button>
          <Button 
            className="w-full rounded-full"
            onClick={() => console.log('Buy now')}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
