
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

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
  const handleCardClick = () => {
    console.log('Navigating to product detail:', title);
    navigate(`/product/${encodeURIComponent(title)}`);
  };
  
  return (
    <div 
      style={{
        backgroundColor,
        ['--hover-color' as string]: hoverColor
      }} 
      className="rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col h-full relative overflow-hidden py-[49px]"
    >
      <div 
        className="mb-8 flex justify-center flex-grow cursor-pointer"
        onClick={handleCardClick}
      >
        <img src={imageUrl} alt={title} className="w-72 h-72 object-contain transform transition-transform hover:scale-105" />
      </div>
      
      <div className="mt-auto">
        <h3 className="text-xl font-domine font-semibold mb-2 cursor-pointer" onClick={handleCardClick}>{title}</h3>
        
        <p className="text-muted-foreground mb-4 text-sm">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-sm mb-1">{cardCount}</p>
            <p className="text-sm text-muted-foreground">{shipping}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-1">
              <span className="text-xl font-semibold">{price}</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {discount}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground line-through">MRP: {mrp}</p>
          </div>
        </div>
        
        {/* View details link */}
        <button 
          onClick={handleCardClick} 
          className="text-xs text-cognilense-blue hover:underline mt-3 flex items-center gap-1"
        >
          View details <ExternalLink size={10} />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
