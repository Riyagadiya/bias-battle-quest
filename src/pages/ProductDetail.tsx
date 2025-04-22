
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// This should match the data structure from CardDeck.tsx
const cardDecks = [
  {
    title: "Cognitive Biases Card Deck",
    description: "Cognitive biases are mental shortcuts. Our tool helps you harness them to solve problems, challenge assumptions, and make better decisions.",
    imageUrl: "/lovable-uploads/e2f6c9a6-de98-414b-ab11-9d986bc15f8f.png",
    backgroundColor: "#FDDE81",
    hoverColor: "#FCD14D",
    cardCount: "38 Cards",
    price: "₹900",
    mrp: "₹1200",
    discount: "25% off",
    shipping: "Ships only in India"
  },
  {
    title: "Research Methods",
    description: "Explore the design process—a structured framework for creative thinking and crafting meaningful, user-centered solutions.",
    imageUrl: "/lovable-uploads/e64a3165-39cf-43df-bade-1cd41991cf97.png",
    backgroundColor: "#D4E3A6",
    hoverColor: "#C4D985",
    cardCount: "42 Cards",
    price: "₹900",
    mrp: "₹1200",
    discount: "25% off",
    shipping: "Ships only in India"
  },
  {
    title: "Thinking Hat",
    description: "Delve into UX laws—fundamental principles that shape the way we think about design, encouraging deeper insights and fostering more intuitive, human-centered solutions.",
    imageUrl: "/lovable-uploads/fd80351d-b396-4b23-ad6d-03e387f35f3e.png",
    backgroundColor: "#F8C1A6",
    hoverColor: "#F3986B",
    cardCount: "36 Cards",
    price: "₹900",
    mrp: "₹1200",
    discount: "25% off",
    shipping: "Ships only in India"
  },
  {
    title: "UX Laws",
    description: "Dive into UX laws, essential principles that streamline design decisions and empower you to create intuitive, user-centered experiences with ease.",
    imageUrl: "/lovable-uploads/063475da-7147-4ad6-9584-fe8c2e87706d.png",
    backgroundColor: "#BEE5FA",
    hoverColor: "#92D4F6",
    cardCount: "40 Cards",
    price: "₹900",
    mrp: "₹1200",
    discount: "25% off",
    shipping: "Ships only in India"
  }
];

const ProductDetail = () => {
  const { title } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  
  const product = cardDecks.find(deck => deck.title === decodeURIComponent(title || ""));
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const basePrice = 900; // Base price without discount

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.title} added to cart - Total: ₹${basePrice * quantity}`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product Image */}
              <div 
                className="rounded-xl p-12 flex items-center justify-center"
                style={{ backgroundColor: product.backgroundColor }}
              >
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className="w-64 h-64 object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-domine font-semibold">
                  {product.title}
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>

                <div className="space-y-3">
                  <p className="font-medium">{product.cardCount}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-semibold">₹{basePrice * quantity}</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {product.discount}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-through">
                    MRP: ₹{1200 * quantity}
                  </p>
                  <p className="text-sm text-muted-foreground">{product.shipping}</p>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="flex items-center justify-start gap-4">
                    <div className="flex items-center justify-between border rounded-full p-2 w-32">
                      <button
                        onClick={decreaseQuantity}
                        className="p-1 hover:bg-black/5 rounded-full"
                        disabled={quantity === 1}
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

                    <Button 
                      className="rounded-full bg-white text-black border border-black/20 hover:bg-black/5"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="mr-2" size={20} />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
