
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
}

interface RecommendedProductsProps {
  products: Product[];
  currentProductTitle: string;
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ products }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Only show 2 products on mobile
  const displayProducts = isMobile ? products.slice(0, 2) : products;

  return (
    <div className="mt-8 md:mt-12">
      <h2 className="text-xl md:text-2xl font-domine font-semibold mb-4 md:mb-6">
        You may also like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {displayProducts.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden border-none shadow hover:shadow-md transition-shadow">
              <CardContent className="p-0 h-full">
                <div className="flex flex-col h-full">
                  <div 
                    className="h-28 md:h-36 flex items-center justify-center"
                    style={{ backgroundColor: product.backgroundColor }}
                  >
                    <img 
                      src={product.imageUrl} 
                      alt={product.title} 
                      className="max-h-20 md:max-h-28 w-auto object-contain"
                    />
                  </div>
                  
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-domine font-medium text-lg mb-2">
                      {product.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                      {product.description}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-auto justify-start"
                      onClick={() => navigate(`/product/${encodeURIComponent(product.title)}`)}
                    >
                      View Details
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
