
import { Share2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      
      <h3 className="text-xl font-domine font-semibold mb-2">{title}</h3>
      
      <p className="text-muted-foreground mb-4">
        {description}
      </p>

      <div className="space-y-3 mb-6">
        <p className="font-medium">{cardCount}</p>
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold">{price}</span>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {discount}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-through">{mrp}</p>
        <p className="text-sm text-muted-foreground">{shipping}</p>
      </div>

      <div className="mt-auto">
        <Button 
          className="w-full rounded-full bg-white text-black border border-black/20 hover:bg-black/5"
          onClick={() => console.log('Add to cart')}
        >
          <ShoppingCart className="mr-2" size={20} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
