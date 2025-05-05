
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useDiscount } from "@/context/DiscountContext";

interface Product {
  title: string;
  backgroundColor: string;
  imageUrl: string;
}

interface RecommendedProductsProps {
  products: Product[];
  currentProductTitle: string;
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ products, currentProductTitle }) => {
  const navigate = useNavigate();
  const { showDiscount } = useDiscount();
  
  // Filter out the current product
  const recommendedProducts = products.filter(product => product.title !== currentProductTitle);
  
  // Special image handling for specific deck types
  const getImageUrl = (title: string) => {
    if (title.includes("Cognitive Bias")) {
      return "/lovable-uploads/bfa3ac45-7fda-4588-b9a6-2b8aeae3aa5f.png";
    } else if (title.includes("Research Method")) {
      return "/lovable-uploads/5a5bfd84-16d2-4308-a4f3-099fe574dc51.png";
    } else if (title.includes("Thinking Hat")) {
      return "/lovable-uploads/587a795b-4e10-45d4-b143-5047a2be78a3.png";
    } else if (title.includes("UX Laws")) {
      return "/lovable-uploads/ec436adc-58d5-41f3-aeac-d47aafacef08.png";
    }
    return "/placeholder.svg";
  };
  
  // Check if a product needs the object-cover styling
  const needsObjectCover = (title: string) => {
    return title.includes("Cognitive Bias") || 
           title.includes("Thinking Hat") || 
           title.includes("Research Method") ||
           title.includes("UX Laws");
  };
  
  const handleViewProduct = (title: string) => {
    navigate(`/product/${encodeURIComponent(title)}`);
  };
  
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-domine font-semibold mb-6">You may also like</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recommendedProducts.slice(0, 3).map((product) => (
          <motion.div 
            key={product.title}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <AspectRatio ratio={3/2}>
              <div 
                className="w-full h-full rounded-t-lg overflow-hidden"
                style={{ 
                  backgroundColor: product.backgroundColor,
                  position: 'relative'
                }}
              >
                <img 
                  src={getImageUrl(product.title)} 
                  alt={product.title} 
                  className={`w-full h-full absolute inset-0 ${
                    needsObjectCover(product.title) ? "object-cover" : "object-contain p-4"
                  }`}
                />
              </div>
            </AspectRatio>
            
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium text-lg line-clamp-1">{product.title}</h3>
                {showDiscount && (
                  <span className="text-sm text-green-600 font-medium">30% off</span>
                )}
              </div>
              
              <div className="flex items-center mb-2 gap-2">
                <span className="font-medium">₹{showDiscount ? 699 : 999}</span>
                {showDiscount && (
                  <span className="text-xs text-muted-foreground line-through">₹999</span>
                )}
              </div>
              
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900 p-0 h-auto font-normal"
                onClick={() => handleViewProduct(product.title)}
              >
                View details
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
