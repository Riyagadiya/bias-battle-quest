
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";
import { useDiscount } from "@/hooks/use-discount";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import GradientButton from "@/components/GradientButton";
import RecommendedProducts from "@/components/ProductDetail/RecommendedProducts";

// ProductDetailView props
interface ProductDetailViewProps {
  product: any;
}

const ProductDetailView = ({ product }: ProductDetailViewProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showDiscount } = useDiscount();
  const isMobile = useIsMobile();
  
  // Create a ref for the carousel API
  const [api, setApi] = useState(null);
  
  // Update carousel when selectedImageIndex changes
  useEffect(() => {
    if (api) {
      api.scrollTo(selectedImageIndex);
    }
  }, [selectedImageIndex, api]);
  
  // Update selectedImageIndex when carousel slides
  const handleCarouselSelect = () => {
    if (api) {
      setSelectedImageIndex(api.selectedScrollSnap());
    }
  };
  
  // Set up event listeners for the carousel
  useEffect(() => {
    if (!api) return;
    
    api.on('select', handleCarouselSelect);
    
    return () => {
      api.off('select', handleCarouselSelect);
    };
  }, [api]);

  const handleBackClick = () => {
    navigate('/card-decks');
  };
  
  // Check if it's a special deck that needs object-cover styling
  const isCognitiveBias = product?.title.includes("Cognitive Bias") || false;
  const isThinkingHat = product?.title.includes("Thinking Hat") || false;
  const isResearchMethod = product?.title.includes("Research Method") || false;
  const isUXLaws = product?.title.includes("UX Laws") || false;
  
  const needsObjectCover = isCognitiveBias || isThinkingHat || isResearchMethod || isUXLaws;
  
  // Calculate pricing based on discount status
  const originalPrice = parseInt(product.mrp); // Original price before discount
  const discountedPrice = parseInt(product.price); // Discounted price (after discount)
  const basePrice = showDiscount ? discountedPrice : originalPrice; // Price to use
  
  // Calculate total price based on quantity
  const totalPrice = basePrice * quantity;
  const totalOriginalPrice = originalPrice * quantity;

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
      description: `${quantity} x ${product.title} added to cart - Total: ₹${totalPrice}`
    });
  };
  const handleBuyNow = () => {
    navigate("/checkout");
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4 }} 
      className="container mx-auto py-6 md:py-[72px]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="border border-gray-200 rounded-xl shadow-sm p-4 md:p-8 py-[31px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              {/* Carousel for product images with 3:2 aspect ratio */}
              <div className="rounded-xl overflow-hidden relative">
                <Carousel className="w-full" setApi={setApi}>
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <AspectRatio ratio={3/2} className="w-full">
                          <div 
                            className="relative w-full h-full rounded-lg overflow-hidden"
                            style={{ backgroundColor: product.backgroundColor }}
                          >
                            <img 
                              src={image} 
                              alt={`${product.title} - view ${index + 1}`} 
                              className={`absolute inset-0 w-full h-full ${
                                needsObjectCover ? "object-cover" : "object-contain p-8"
                              }`}
                            />
                          </div>
                        </AspectRatio>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              
              <div className="flex justify-center gap-2 md:gap-4 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`cursor-pointer rounded-lg overflow-hidden w-12 h-12 md:w-16 md:h-16 flex-shrink-0 transition-all relative
                      ${selectedImageIndex === index ? 'border-2 border-black' : ''}`} 
                    onClick={() => setSelectedImageIndex(index)}
                    style={{ backgroundColor: product.backgroundColor }}
                  >
                    <img 
                      src={image} 
                      alt={`${product.title} - thumbnail ${index + 1}`} 
                      className={`absolute inset-0 w-full h-full ${
                        needsObjectCover ? "object-cover" : "object-contain p-2"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h1 className="text-xl md:text-3xl font-domine font-semibold">
                {product.title}
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground">
                {product.description}
              </p>

              <p className="text-sm text-muted-foreground">by Siddharth Kabra</p>
              
              <div className="space-y-1">
                <p className="text-sm"><span className="font-medium">Size:</span> {product.dimensions}</p>
                <p className="text-sm"><span className="font-medium">Quantity:</span> {product.cardCount}</p>
                <p className="text-sm text-muted-foreground">{product.shipping}</p>
              </div>

              <div className="flex items-center gap-3 my-3 md:my-4">
                <span className="text-xl md:text-2xl font-semibold">₹{totalPrice}</span>
                {showDiscount && (
                  <>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {product.discount}
                    </Badge>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{totalOriginalPrice}
                    </span>
                  </>
                )}
              </div>

              <Separator className="my-3 md:my-4" />

              <div className="space-y-4">
                <div className="flex flex-col xs:flex-row xs:items-center gap-3">
                  <div className="flex items-center justify-between border rounded-full p-2 w-32">
                    <button onClick={decreaseQuantity} className="p-1 hover:bg-black/5 rounded-full" disabled={quantity === 1}>
                      {quantity === 1 ? <img src="/lovable-uploads/05866d0c-5d21-48e5-9975-14282b3238d7.png" alt="Delete" className="w-5 h-5" /> : <Minus size={20} />}
                    </button>
                    <span className="font-medium">{quantity}</span>
                    <button onClick={increaseQuantity} className="p-1 hover:bg-black/5 rounded-full">
                      <Plus size={20} />
                    </button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Unit Price: ₹{basePrice} × {quantity}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="rounded-full bg-white text-black border border-black/20 hover:bg-black/5 flex-1" onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2" size={20} />
                    Add to Cart
                  </Button>
                  
                  <GradientButton className="flex-1 py-3" onClick={handleBuyNow} icon={false}>
                    Buy Now
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RecommendedProducts products={product.recommendedProducts} currentProductTitle={product.title} />
      </div>
    </motion.div>
  );
};

export default ProductDetailView;
