
import { useState } from "react";
import { Share2, Plus, Minus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface CardItemProps {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  hoverColor: string;
  cardCount: string;
  price: string;
  mrp: string;
  discount: string;
  shipping: string;
}

const CardItem = ({ 
  title, 
  description, 
  imageUrl,
  backgroundColor,
  hoverColor,
  cardCount,
  price,
  mrp,
  discount,
  shipping
}: CardItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const navigate = useNavigate();

  const basePrice = 900;

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the button
    toast({
      title: "Added to cart",
      description: `${quantity} x ${title} added to cart - Total: ₹${basePrice * quantity}`,
    });
    console.log('Added to cart:', { title, quantity, total: basePrice * quantity });
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the button
    setQuantity(1);
  };

  const handleCardClick = () => {
    console.log('Navigating to product detail:', title);
    navigate(`/product/${encodeURIComponent(title)}`);
  };

  return (
    <div 
      className="rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col h-full relative cursor-pointer"
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
      onClick={handleCardClick}
    >
      <button 
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
        onClick={(e) => {
          e.stopPropagation(); // Prevent navigation when clicking the share button
          console.log('Share clicked');
        }}
      >
        <Share2 size={20} />
      </button>

      <div className="mb-6 flex justify-center">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-36 h-36 object-contain"
        />
      </div>
      
      <h3 className="text-xl font-domine font-semibold mb-2">{title}</h3>
      
      <p className="text-muted-foreground mb-4 text-[95%]">
        {description}
      </p>

      <div className="space-y-3 mb-6">
        <p className="font-medium">{cardCount}</p>
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold">₹{basePrice * quantity}</span>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {discount}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-through">MRP: ₹{1200 * quantity}</p>
        <p className="text-sm text-muted-foreground">{shipping}</p>
      </div>

      <div className="mt-auto space-y-4">
        <div className="flex items-center justify-between border rounded-full p-2">
          <button
            onClick={quantity === 1 ? (e) => handleDelete(e) : (e) => {
              e.stopPropagation();
              decreaseQuantity();
            }}
            className="p-1 hover:bg-black/5 rounded-full"
            disabled={quantity === 1}
          >
            {quantity === 1 ? (
              <img 
                src="/lovable-uploads/05866d0c-5d21-48e5-9975-14282b3238d7.png" 
                alt="Delete" 
                className="w-5 h-5" 
              />
            ) : (
              <Minus size={20} />
            )}
          </button>
          <span className="font-medium">{quantity}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              increaseQuantity();
            }}
            className="p-1 hover:bg-black/5 rounded-full"
          >
            <Plus size={20} />
          </button>
        </div>

        <Button 
          className="w-full rounded-full bg-white text-black border border-black/20 hover:bg-black/5"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2" size={20} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
