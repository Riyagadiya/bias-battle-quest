
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useDiscount } from "@/context/DiscountContext";

interface CardItemProps {
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
  const { showDiscount } = useDiscount();

  // Calculate actual price based on discount status
  const actualPrice = showDiscount ? price : mrp;
  
  // Calculate discount percentage dynamically - always 30% exactly
  const discountPercent = 30;

  // Special image handling for specific deck types
  const getImageUrl = () => {
    if (title.includes("Cognitive Bias")) {
      return "/lovable-uploads/bfa3ac45-7fda-4588-b9a6-2b8aeae3aa5f.png";
    } else if (title.includes("Research Method")) {
      return "/lovable-uploads/5a5bfd84-16d2-4308-a4f3-099fe574dc51.png";
    } else if (title.includes("Thinking Hat")) {
      return "/lovable-uploads/587a795b-4e10-45d4-b143-5047a2be78a3.png";
    } else if (title.includes("UX Laws")) {
      return "/lovable-uploads/ec436adc-58d5-41f3-aeac-d47aafacef08.png";
    }
    return imageUrl;
  };

  const handleViewDetails = () => {
    navigate(`/product/${encodeURIComponent(title)}`);
  };

  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <motion.div 
            className="h-48 md:h-auto flex items-center justify-center p-6"
            style={{ backgroundColor }}
            whileHover={{ backgroundColor: hoverColor }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src={getImageUrl()} 
              alt={title}
              className="max-h-full w-auto object-contain"
            />
          </motion.div>
          
          <div className="col-span-2 p-6 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold font-domine">{title}</h2>
                <p className="text-sm text-muted-foreground">{cardCount}</p>
              </div>
              {showDiscount && (
                <Badge className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-100">
                  {discountPercent}% off
                </Badge>
              )}
            </div>
            
            <p className="text-gray-600 line-clamp-2">{description}</p>
            
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold">₹{actualPrice}</span>
              {showDiscount && (
                <span className="text-sm text-muted-foreground line-through">₹{mrp}</span>
              )}
              <span className="text-sm text-green-600">{shipping}</span>
            </div>
            
            <Button 
              className="mt-4 rounded-full"
              onClick={handleViewDetails}
            >
              View Details
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
