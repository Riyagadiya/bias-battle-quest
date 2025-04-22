
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductData {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  price: string;
  mrp: string;
  discount: string;
}

interface RecommendedProductsProps {
  products: ProductData[];
  currentProductTitle: string;
}

const RecommendedProducts = ({ products, currentProductTitle }: RecommendedProductsProps) => {
  const navigate = useNavigate();
  
  // Filter out the current product
  const filteredProducts = products.filter(product => product.title !== currentProductTitle);
  
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-domine font-semibold mb-6">Recommended Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card 
            key={product.title}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => {
              console.log(`Navigating to product: ${product.title}`);
              navigate(`/product/${encodeURIComponent(product.title)}`);
            }}
          >
            <CardContent className="p-4">
              <div 
                className="mb-4 p-4 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: product.backgroundColor }}
              >
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-24 h-24 object-contain" 
                />
              </div>
              
              <h3 className="font-medium text-base mb-1 line-clamp-1">{product.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center gap-2">
                <span className="font-semibold">₹{product.price}</span>
                <span className="text-sm text-muted-foreground line-through">₹{product.mrp}</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                  {product.discount}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
