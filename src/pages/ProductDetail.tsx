import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import FeatureIcon from "@/components/ProductDetail/FeatureIcon";
import RecommendedProducts from "@/components/ProductDetail/RecommendedProducts";
import GradientButton from "@/components/GradientButton";
import { useCart } from "@/context/CartContext";

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
    shipping: "Ships only in India",
    dimensions: "12.3 x 7.9 x 2 cm",
    images: [
      "/lovable-uploads/e2f6c9a6-de98-414b-ab11-9d986bc15f8f.png",
      "/lovable-uploads/e7f760c9-51aa-4063-b97d-6126cc75c8f6.png",
      "/lovable-uploads/127df004-c4c0-4733-a1a1-511e730bbc3b.png"
    ]
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
    shipping: "Ships only in India",
    dimensions: "12.3 x 7.9 x 2 cm",
    images: [
      "/lovable-uploads/e64a3165-39cf-43df-bade-1cd41991cf97.png",
      "/lovable-uploads/059b502b-7f97-4a43-9c41-3788ac3a0a9d.png",
      "/lovable-uploads/9b7c8643-f4a8-4489-aa83-d6bd8564fa83.png"
    ]
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
    shipping: "Ships only in India",
    dimensions: "12.3 x 7.9 x 2 cm",
    images: [
      "/lovable-uploads/fd80351d-b396-4b23-ad6d-03e387f35f3e.png",
      "/lovable-uploads/89d61a08-dc89-46ce-8b4d-6f27cbeea0db.png",
      "/lovable-uploads/32cc47e7-c453-42c7-8b97-f1dab707c9ad.png"
    ]
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
    shipping: "Ships only in India",
    dimensions: "12.3 x 7.9 x 2 cm",
    images: [
      "/lovable-uploads/063475da-7147-4ad6-9584-fe8c2e87706d.png",
      "/lovable-uploads/2c1a6075-7e9b-44d3-806d-10cfa2a28a3a.png",
      "/lovable-uploads/887500cd-9161-4cb4-99cf-262104bee34a.png"
    ]
  }
];

const ProductDetail = () => {
  const { title } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = cardDecks.find(deck => deck.title === decodeURIComponent(title || ""));
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-12 px-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
            <Button onClick={() => navigate('/card-decks')}>
              Return to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const basePrice = 900; // Base price without discount
  const originalPrice = Math.round(basePrice * 1.25); // 25% higher

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      title: product.title,
      quantity,
      price: basePrice
    });
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.title} added to cart - Total: ₹${basePrice * quantity}`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: `Buying ${quantity} x ${product.title} - Total: ₹${basePrice * quantity}`,
    });
    // In a real app, this would navigate to checkout
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
            {/* Product Detail Box */}
            <div className="border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images with Carousel */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div 
                    className="rounded-xl p-8 flex items-center justify-center"
                    style={{ backgroundColor: product.backgroundColor }}
                  >
                    <img 
                      src={product.images[selectedImageIndex]} 
                      alt={product.title}
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                  
                  {/* Thumbnail Carousel */}
                  <div className="flex justify-center gap-4">
                    {product.images.map((image, index) => (
                      <div 
                        key={index} 
                        className={`cursor-pointer rounded-lg overflow-hidden border-2 p-2 w-16 h-16 transition-all
                          ${index === selectedImageIndex ? 'border-black' : 'border-transparent'}`}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <img 
                          src={image} 
                          alt={`${product.title} - view ${index + 1}`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-3xl font-domine font-semibold">
                    {product.title}
                  </h1>
                  
                  <p className="text-lg text-muted-foreground">
                    {product.description}
                  </p>

                  <p className="text-sm text-muted-foreground">by Siddharth Kabra</p>
                  
                  <div className="space-y-1">
                    <p className="text-sm"><span className="font-medium">Size:</span> {product.dimensions}</p>
                    <p className="text-sm"><span className="font-medium">Quantity:</span> {product.cardCount}</p>
                    <p className="text-sm text-muted-foreground">{product.shipping}</p>
                  </div>

                  <div className="flex items-center gap-3 my-4">
                    <span className="text-2xl font-semibold">₹{basePrice * quantity}</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {product.discount}
                    </Badge>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{originalPrice * quantity}
                    </span>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-4">
                    {/* Quantity Controls */}
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
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="rounded-full bg-white text-black border border-black/20 hover:bg-black/5 flex-1"
                        onClick={handleAddToCart}
                      >
                        <ShoppingCart className="mr-2" size={20} />
                        Add to Cart
                      </Button>
                      
                      <GradientButton
                        className="flex-1 py-3"
                        onClick={handleBuyNow}
                        icon={false}
                      >
                        Buy Now
                      </GradientButton>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Feature Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FeatureIcon type="replacement" text="7 Days Replacement" />
                    <FeatureIcon type="secure" text="Secure Transaction" />
                    <FeatureIcon type="delivery" text="Fast Delivery" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Products */}
            <RecommendedProducts 
              products={cardDecks}
              currentProductTitle={product.title}
            />
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
