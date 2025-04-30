
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
      onMouseEnter={e => {
        (e.target as HTMLElement).style.backgroundColor = hoverColor;
      }} 
      onMouseLeave={e => {
        (e.target as HTMLElement).style.backgroundColor = backgroundColor;
      }} 
      className="rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col h-full relative cursor-pointer overflow-hidden py-[49px]"
    >
      <div className="mb-8 flex justify-center flex-grow">
        <img src={imageUrl} alt={title} className="w-72 h-72 object-contain transform transition-transform hover:scale-105" onClick={handleCardClick} />
      </div>
      
      <div className="mt-auto">
        <h3 
          className="text-xl font-domine font-semibold mb-2 text-black hover:text-gray-500 transition-colors" 
          onClick={handleCardClick}
        >
          {title}
        </h3>
        
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
        
        <div className="mt-4">
          <button 
            onClick={handleCardClick}
            className="text-cognilense-blue hover:text-cognilense-blue/80 text-sm flex items-center gap-1"
          >
            View details <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
