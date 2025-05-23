import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartIcon from "@/components/CartIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";
import RecommendedProducts from "@/components/ProductDetail/RecommendedProducts";
import GradientButton from "@/components/GradientButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useDiscount } from "@/hooks/use-discount";
import { useIsMobile } from "@/hooks/use-mobile";

const cardDecks = [{
  title: "Cognitive Biases Card Deck",
  description: "Cognitive biases are mental shortcuts. Our tool helps you harness them to solve problems, challenge assumptions, and make better decisions.",
  imageUrl: "/lovable-uploads/e2f6c9a6-de98-414b-ab11-9d986bc15f8f.png",
  backgroundColor: "#FDDE81",
  hoverColor: "#FCD14D",
  cardCount: "38 Cards",
  price: "699",
  mrp: "999",
  discount: "30% off",
  shipping: "Free Shipping",
  dimensions: "12.3 x 7.9 x 2 cm",
  images: [
    "/lovable-uploads/87f79b0e-a057-4477-bb79-d8eeadcb1e11.png",
    "/lovable-uploads/3c940b73-d08b-41af-b9d8-6be5ef9f234a.png",
    "/lovable-uploads/1ebce4a9-5e4b-4fca-8da5-abd34ce21c2b.png"
  ]
}, {
  title: "Research Method Card Deck",
  description: "Explore the design process—a structured framework for creative thinking and crafting meaningful, user-centered solutions.",
  imageUrl: "/lovable-uploads/e64a3165-39cf-43df-bade-1cd41991cf97.png",
  backgroundColor: "#D4E3A6",
  hoverColor: "#C4D985",
  cardCount: "42 Cards",
  price: "699",
  mrp: "999",
  discount: "30% off",
  shipping: "Free Shipping",
  dimensions: "12.3 x 7.9 x 2 cm",
  images: [
    "/lovable-uploads/493d6450-ae7d-4b04-a96c-bbbbf02d685d.png", 
    "/lovable-uploads/127562a9-62f7-4d18-836b-65b6dcdf808f.png", 
    "/lovable-uploads/43f61f6b-0705-492c-baf8-10b7602045c2.png"
  ]
}, {
  title: "Thinking Hat Card Deck",
  description: "Delve into UX laws—fundamental principles that shape the way we think about design, encouraging deeper insights and fostering more intuitive, human-centered solutions.",
  imageUrl: "/lovable-uploads/fd80351d-b396-4b23-ad6d-03e387f35f3e.png",
  backgroundColor: "#F8C1A6",
  hoverColor: "#F3986B",
  cardCount: "36 Cards",
  price: "699",
  mrp: "999",
  discount: "30% off",
  shipping: "Free Shipping",
  dimensions: "12.3 x 7.9 x 2 cm",
  images: [
    "/lovable-uploads/714c4bab-7924-4f4a-ab3a-2d45ae90a116.png", 
    "/lovable-uploads/bc34523c-f562-425e-b26a-d9a583d0a68e.png", 
    "/lovable-uploads/5f77be4b-9b96-4bc1-a8bc-04b1e70c19f9.png"
  ]
}, {
  title: "UX Laws Card Deck",
  description: "Dive into UX laws, essential principles that streamline design decisions and empower you to create intuitive, user-centered experiences with ease.",
  imageUrl: "/lovable-uploads/063475da-7147-4ad6-9584-fe8c2e87706d.png",
  backgroundColor: "#BEE5FA",
  hoverColor: "#92D4F6",
  cardCount: "40 Cards",
  price: "699",
  mrp: "999",
  discount: "30% off",
  shipping: "Free Shipping",
  dimensions: "12.3 x 7.9 x 2 cm",
  images: [
    "/lovable-uploads/53ae4095-d4dc-4908-8135-6855b7b99e88.png", 
    "/lovable-uploads/962f0884-2994-48a4-87a1-af8bf5ad8ef3.png", 
    "/lovable-uploads/076f1c47-53f3-455f-bf0e-f5644b1c5437.png"
  ]
}];

const ProductDetail = () => {
  const {
    title
  } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const {
    addToCart
  } = useCart();
  const { showDiscount } = useDiscount();
  const isMobile = useIsMobile();
  const product = cardDecks.find(deck => deck.title === decodeURIComponent(title || ""));
  const handleBackClick = () => {
    navigate('/card-decks');
  };
  
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
  
  if (!product) {
    return <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-8 md:py-12 px-4 md:px-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-semibold mb-4">Product not found</h1>
            <Button onClick={() => navigate('/card-decks')}>
              Return to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>;
  }
  
  // Check if it's a special deck that needs object-cover styling
  const isCognitiveBias = product?.title.includes("Cognitive Bias") || false;
  const isThinkingHat = product?.title.includes("Thinking Hat") || false;
  const isResearchMethod = product?.title.includes("Research Method") || false;
  const isUXLaws = product?.title.includes("UX Laws") || false;
  
  const needsObjectCover = isCognitiveBias || isThinkingHat || isResearchMethod || isUXLaws;
  
  // Calculate pricing based on discount status
  const originalPrice = parseInt(product?.mrp || "999"); // Original price before discount
  const discountedPrice = parseInt(product?.price || "699"); // Discounted price (after discount)
  const basePrice = showDiscount ? discountedPrice : originalPrice; // Price to use
  
  // Calculate total price based on quantity
  const totalPrice = basePrice * quantity;
  const totalOriginalPrice = originalPrice * quantity;
  
  // Calculate discount percentage - fixed at 30%
  const discountPercent = 30;
  
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
  
  return <div className="flex flex-col min-h-screen">
      <Header />
      <CartIcon />
      
      <Button variant="outline" size="icon" onClick={handleBackClick} className="fixed left-3 md:left-6 top-16 z-50 rounded-lg">
        <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
      </Button>

      <main className="flex-grow py-8 md:py-12 px-4 md:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.4
      }} className="container mx-auto py-8 md:py-[72px]">
          <div className="max-w-6xl mx-auto">
            <div className="border border-gray-200 rounded-xl shadow-sm p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4">
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
                                    needsObjectCover ? "object-cover" : "object-contain p-4 md:p-8"
                                  }`}
                                />
                              </div>
                            </AspectRatio>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                  
                  <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
                    {product.images.map((image, index) => (
                      <div 
                        key={index} 
                        className={`cursor-pointer rounded-lg overflow-hidden w-12 h-12 md:w-16 md:h-16 transition-all relative
                          ${selectedImageIndex === index ? 'border-2 border-black' : ''}`} 
                        onClick={() => setSelectedImageIndex(index)}
                        style={{ backgroundColor: product.backgroundColor }}
                      >
                        <img 
                          src={image} 
                          alt={`${product.title} - thumbnail ${index + 1}`} 
                          className={`absolute inset-0 w-full h-full ${
                            needsObjectCover ? "object-cover" : "object-contain p-1 md:p-2"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4 text-left">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-domine font-semibold">
                    {product?.title}
                  </h1>
                  
                  <p className="text-sm md:text-lg text-muted-foreground">
                    {product?.description}
                  </p>

                  <p className="text-xs md:text-sm text-muted-foreground">by Siddharth Kabra</p>
                  
                  <div className="space-y-1">
                    <p className="text-xs md:text-sm"><span className="font-medium">Size:</span> {product?.dimensions}</p>
                    <p className="text-xs md:text-sm"><span className="font-medium">Quantity:</span> {product?.cardCount}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{product?.shipping}</p>
                  </div>

                  <div className="flex items-center gap-3 my-3 md:my-4">
                    <span className="text-xl md:text-2xl font-semibold">₹{totalPrice}</span>
                    {showDiscount && (
                      <>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {discountPercent}% off
                        </Badge>
                        <span className="text-xs md:text-sm text-muted-foreground line-through">
                          ₹{totalOriginalPrice}
                        </span>
                      </>
                    )}
                  </div>

                  <Separator className="my-3 md:my-4" />

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-start gap-3 md:gap-4">
                      <div className="flex items-center justify-between border rounded-full p-1 md:p-2 w-24 md:w-32">
                        <button onClick={decreaseQuantity} className="p-1 hover:bg-black/5 rounded-full" disabled={quantity === 1}>
                          {quantity === 1 ? 
                            <img src="/lovable-uploads/05866d0c-5d21-48e5-9975-14282b3238d7.png" alt="Delete" className="w-4 h-4 md:w-5 md:h-5" /> : 
                            <Minus size={isMobile ? 16 : 20} />}
                        </button>
                        <span className="font-medium text-sm md:text-base">{quantity}</span>
                        <button onClick={increaseQuantity} className="p-1 hover:bg-black/5 rounded-full">
                          <Plus size={isMobile ? 16 : 20} />
                        </button>
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        Unit Price: ₹{basePrice} × {quantity}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                      <Button className="rounded-full bg-white text-black border border-black/20 hover:bg-black/5 flex-1 text-xs md:text-sm h-9 md:h-auto" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-1 md:mr-2" size={isMobile ? 16 : 20} />
                        Add to Cart
                      </Button>
                      
                      <GradientButton className="flex-1 py-1.5 md:py-3 text-xs md:text-sm" onClick={handleBuyNow} icon={false}>
                        Buy Now
                      </GradientButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <RecommendedProducts products={cardDecks} currentProductTitle={product.title} />
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>;
};

export default ProductDetail;
