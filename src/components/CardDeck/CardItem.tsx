
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import GradientButton from "@/components/GradientButton";

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
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const handleCardClick = () => {
    console.log('Navigating to product detail:', title);
    navigate(`/product/${encodeURIComponent(title)}`);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      title,
      quantity,
      price: parseInt(price.replace('₹', ''))
    });
    toast.success(`${quantity} x ${title} added to cart`);
  };
  
  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      title,
      quantity,
      price: parseInt(price.replace('₹', ''))
    });
    navigate('/checkout');
  };
  
  const increaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity(prev => Math.max(1, prev - 1));
  };
  
  return (
    <div 
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
      className="rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col h-full relative cursor-pointer overflow-hidden py-[49px]"
      onClick={handleCardClick}
    >
      <div className="mb-6 flex justify-center flex-grow">
        <img src={imageUrl} alt={title} className="w-72 h-72 object-contain transform transition-transform hover:scale-105" />
      </div>
      
      <div className="mt-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="flex-grow">
            <h3 className="text-xl font-domine font-semibold mb-2 text-black hover:text-gray-500 transition-colors">
              {title}
            </h3>
            
            <p className="text-muted-foreground mb-4 text-sm">
              {description}
            </p>

            <p className="font-medium text-sm mb-1">{cardCount}</p>
            <p className="text-sm text-muted-foreground mb-4">{shipping}</p>
          </div>
          
          {/* Price and quantity section - on the right */}
          <div className="flex flex-col items-end justify-between">
            {/* Price - only showing the final price */}
            <div className="text-right mb-4">
              <span className="text-xl font-semibold">{mrp}</span>
            </div>
            
            {/* Quantity control */}
            <div className="flex items-center justify-between border rounded-full p-2 w-32 mb-4">
              <button 
                onClick={decreaseQuantity} 
                className="p-1 hover:bg-black/5 rounded-full"
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
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Button 
            className="rounded-full bg-white text-black border border-black/20 hover:bg-black/5 h-11 flex items-center justify-center"
            onClick={handleAddToCart}
          >
            <span className="flex items-center">
              Add to Cart
              <ShoppingCart className="ml-2" size={18} />
            </span>
          </Button>
          
          <GradientButton 
            className="h-11 flex items-center justify-center" 
            onClick={(e: React.MouseEvent) => handleBuyNow(e)}
            icon={false}
          >
            <span className="flex items-center">
              Buy Now
              <ShoppingCart className="ml-2" size={18} />
            </span>
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
