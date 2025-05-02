import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartIcon from "@/components/CartIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";
import FeatureIcon from "@/components/ProductDetail/FeatureIcon";
import RecommendedProducts from "@/components/ProductDetail/RecommendedProducts";
import GradientButton from "@/components/GradientButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
  const product = cardDecks.find(deck => deck.title === decodeURIComponent(title || ""));
  const handleBackClick = () => {
    navigate('/card-decks');
  };
  if (!product) {
    return <div className="flex flex-col min-h-screen">
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
      </div>;
  }
  const basePrice = parseInt(product.price); // Base price after discount
  const originalPrice = parseInt(product.mrp); // Original price before discount

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
      description: `${quantity} x ${product.title} added to cart - Total: ₹${basePrice * quantity}`
    });
  };
  const handleBuyNow = () => {
    navigate("/checkout");
  };
  
  return <div className="flex flex-col min-h-screen">
      <Header />
      <CartIcon />
      
      <Button variant="outline" size="icon" onClick={handleBackClick} className="fixed left-6 top-16 z-50 rounded-lg">
        <ArrowLeft className="h-5 w-5" />
      </Button>

      <main className="flex-grow py-12 px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.4
      }} className="container mx-auto py-[72px]">
          <div className="max-w-6xl mx-auto">
            <div className="border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 py-[31px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {/* Carousel for product images with 3:2 aspect ratio (without navigation arrows) */}
                  <div className="rounded-xl overflow-hidden relative" style={{
                    backgroundColor: product.backgroundColor
                  }}>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {product.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <AspectRatio ratio={3/2} className="w-full">
                              <div className="flex items-center justify-center w-full h-full p-8">
                                <img 
                                  src={image} 
                                  alt={`${product.title} - view ${index + 1}`} 
                                  className="max-w-full max-h-full object-contain"
                                />
                              </div>
                            </AspectRatio>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    {product.images.map((image, index) => (
                      <div 
                        key={index} 
                        className={`cursor-pointer rounded-lg overflow-hidden border-2 p-2 w-16 h-16 transition-all
                          ${selectedImageIndex === index ? 'border-black' : 'border-transparent'}`} 
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <img src={image} alt={`${product.title} - thumbnail ${index + 1}`} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>

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
                    <div className="flex items-center justify-start gap-4">
                      <div className="flex items-center justify-between border rounded-full p-2 w-32">
                        <button onClick={decreaseQuantity} className="p-1 hover:bg-black/5 rounded-full" disabled={quantity === 1}>
                          {quantity === 1 ? <img src="/lovable-uploads/05866d0c-5d21-48e5-9975-14282b3238d7.png" alt="Delete" className="w-5 h-5" /> : <Minus size={20} />}
                        </button>
                        <span className="font-medium">{quantity}</span>
                        <button onClick={increaseQuantity} className="p-1 hover:bg-black/5 rounded-full">
                          <Plus size={20} />
                        </button>
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

                  <Separator className="my-4" />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FeatureIcon type="replacement" text="7 Days Replacement" />
                    <FeatureIcon type="secure" text="Secure Transaction" />
                    <FeatureIcon type="delivery" text="Fast Delivery" />
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
