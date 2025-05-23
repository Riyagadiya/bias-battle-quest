
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ReceiptIndianRupee, ArrowLeft, Save, Trash2, Plus, Minus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import React from "react";
import GradientButton from "@/components/GradientButton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDiscount } from "@/context/DiscountContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Constants for pricing
const ORIGINAL_PRICE = 999; // Original price is always 999 per deck
const DISCOUNT_PERCENT = 30; // 30% discount when applicable

const ShoppingCart = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    saveForLater,
    savedItems,
    removeSavedItem,
    moveToCart,
  } = useCart();
  const { showDiscount } = useDiscount();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Calculate the total number of items
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate subtotal based on whether discount applies
  const subtotal = items.reduce((sum, item) => {
    // Get price based on whether discount applies
    const itemPrice = showDiscount ? 
      Math.round(ORIGINAL_PRICE * (1 - DISCOUNT_PERCENT / 100)) : 
      ORIGINAL_PRICE;
    
    return sum + itemPrice * item.quantity;
  }, 0);
  
  // Calculate original total (always the original/MRP price)
  const totalOriginal = items.reduce(
    (sum, item) => sum + ORIGINAL_PRICE * item.quantity,
    0
  );
  
  // Calculate discount amount
  const discountAmount = showDiscount ? (totalOriginal - subtotal) : 0;
  
  // Final price is subtotal
  const finalPrice = subtotal;

  const handleRemoveFromCart = (title: string) => {
    removeFromCart(title);
    toast.success("Item removed from cart");
  };

  const handleUpdateQuantity = (title: string, newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= 10) {
      updateQuantity(title, newQuantity);
    }
  };

  const handleSaveForLater = (item: any) => {
    saveForLater(item);
    toast.success("Item saved for later");
  };

  const handleMoveToCart = (item: any) => {
    moveToCart(item);
    toast.success("Item moved to cart");
  };

  const handleRemoveSavedItem = (title: string) => {
    removeSavedItem(title);
    toast.success("Saved item removed");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleProceedToBuy = () => {
    navigate("/checkout");
  };

  // Function to get the display price for an item
  const getDisplayPrice = (basePrice: number) => {
    return showDiscount ? 
      Math.round(ORIGINAL_PRICE * (1 - DISCOUNT_PERCENT / 100)) : 
      ORIGINAL_PRICE;
  };

  // Function to get image URL based on item title
  const getItemImage = (title: string) => {
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

  // Function to get background color based on item title
  const getItemBackgroundColor = (title: string) => {
    if (title.includes("Cognitive Bias")) {
      return "#FDDE81";
    } else if (title.includes("Research Method")) {
      return "#D4E3A6";
    } else if (title.includes("Thinking Hat")) {
      return "#F8C1A6";
    } else if (title.includes("UX Laws")) {
      return "#BEE5FA";
    }
    return "#f3f4f6"; // Default gray background
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto py-8 md:py-16 px-4">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={handleGoBack}
            className="rounded-lg"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-semibold">Shopping Cart</h1>
        </div>

        {/* Main content container - flex row from top */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left side - Tabs content */}
          <div className="flex-grow w-full lg:max-w-[65%] order-2 lg:order-1">
            <Tabs defaultValue="items" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="items">Items ({items.length})</TabsTrigger>
                <TabsTrigger value="saved">
                  Saved for Later ({savedItems?.length || 0})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="items" className="h-full">
                <Card className="h-full">
                  <ScrollArea className="h-full">
                    <CardContent className="pt-6 pb-6">
                      {items.map((item, index) => (
                        <div key={item.id}>
                          <div className={`flex ${isMobile ? "flex-row" : "flex-col sm:flex-row"} items-start gap-6 py-4`}>
                            {/* Image with colored background */}
                            <div 
                              className={`${isMobile ? "w-[4.5rem] h-[4.5rem]" : "w-full sm:w-36 h-36"} rounded-lg shrink-0 mx-auto sm:mx-0 overflow-hidden`}
                              style={{ backgroundColor: getItemBackgroundColor(item.title) }}
                            >
                              <AspectRatio ratio={1/1} className="w-full h-full">
                                <img 
                                  src={getItemImage(item.title)} 
                                  alt={item.title}
                                  className="object-cover w-full h-full" 
                                />
                              </AspectRatio>
                            </div>
                            
                            {/* Content - aligned left of image on mobile */}
                            <div className="flex-grow w-full">
                              <h3 className="text-lg font-medium">{item.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                Premium Quality Card Deck
                              </p>
                              
                              {/* Quantity controls and buttons */}
                              <div className="flex flex-wrap items-center gap-3 mt-4">
                                <div className="flex items-center justify-between border rounded-full p-2 w-32 bg-white">
                                  <button
                                    onClick={() => handleUpdateQuantity(item.title, item.quantity - 1)}
                                    className="p-1 hover:bg-black/5 rounded-full disabled:opacity-60"
                                    disabled={item.quantity === 1}
                                  >
                                    {item.quantity === 1 ? (
                                      <img 
                                        src="/lovable-uploads/05866d0c-5d21-48e5-9975-14282b3238d7.png" 
                                        alt="Delete" 
                                        className="w-5 h-5"
                                      />
                                    ) : (
                                      <Minus size={20} />
                                    )}
                                  </button>
                                  <span className="font-medium">{item.quantity}</span>
                                  <button
                                    onClick={() => handleUpdateQuantity(item.title, item.quantity + 1)}
                                    className="p-1 hover:bg-black/5 rounded-full"
                                  >
                                    <Plus size={20} />
                                  </button>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-red-600 rounded-lg border-2 border-muted"
                                    onClick={() => handleRemoveFromCart(item.title)}
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-lg border-2 border-muted"
                                    onClick={() => handleSaveForLater(item)}
                                  >
                                    <Save className="mr-2 h-4 w-4" />
                                    Save for later
                                  </Button>
                                </div>
                              </div>
                            </div>
                            
                            {/* Price - positioned at the top right */}
                            <div className="text-right min-w-[120px] mt-0 sm:mt-0 ml-auto">
                              <div className="flex flex-col items-end gap-1">
                                <p className="font-medium text-lg">
                                  ₹{getDisplayPrice(item.price) * item.quantity}
                                </p>
                                {showDiscount && (
                                  <>
                                    <p className="text-sm text-muted-foreground line-through">
                                      ₹{ORIGINAL_PRICE * item.quantity}
                                    </p>
                                    <p className="text-green-600 text-sm font-medium">
                                      {DISCOUNT_PERCENT}% off
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          {index < items.length - 1 && <Separator className="my-4" />}
                        </div>
                      ))}

                      {items.length === 0 && (
                        <p className="text-center text-muted-foreground py-8">
                          Your cart is empty
                        </p>
                      )}
                    </CardContent>
                  </ScrollArea>
                </Card>
              </TabsContent>

              <TabsContent value="saved" className="h-full">
                <Card className="h-full">
                  <ScrollArea className="h-full">
                    <CardContent className="pt-6 pb-6">
                      {savedItems && savedItems.length > 0 ? (
                        savedItems.map((item, index) => (
                          <div key={item.id}>
                            <div className={`flex ${isMobile ? "flex-row" : "flex-col sm:flex-row"} items-start gap-6 py-4`}>
                              {/* Image with colored background */}
                              <div 
                                className={`${isMobile ? "w-[4.5rem] h-[4.5rem]" : "w-full sm:w-36 h-36"} rounded-lg shrink-0 mx-auto sm:mx-0 overflow-hidden`}
                                style={{ backgroundColor: getItemBackgroundColor(item.title) }}
                              >
                                <AspectRatio ratio={1/1} className="w-full h-full">
                                  <img 
                                    src={getItemImage(item.title)} 
                                    alt={item.title}
                                    className="object-cover w-full h-full" 
                                  />
                                </AspectRatio>
                              </div>
                              
                              {/* Content - aligned left of image on mobile */}
                              <div className="flex-grow w-full">
                                <h3 className="text-lg font-medium">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Premium Quality Card Deck
                                </p>
                                
                                {/* Buttons */}
                                <div className="flex flex-wrap items-center gap-3 mt-4">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-lg border-2 border-muted"
                                    onClick={() => handleMoveToCart(item)}
                                  >
                                    Move to Cart
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-red-600 rounded-lg border-2 border-muted"
                                    onClick={() => handleRemoveSavedItem(item.title)}
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </Button>
                                </div>
                              </div>
                              
                              {/* Price - positioned at the top right */}
                              <div className="text-right min-w-[120px] mt-0 sm:mt-0 ml-auto">
                                <div className="flex flex-col items-end gap-1">
                                  <p className="font-medium text-lg">
                                    ₹{getDisplayPrice(item.price) * item.quantity}
                                  </p>
                                  {showDiscount && (
                                    <>
                                      <p className="text-sm text-muted-foreground line-through">
                                        ₹{ORIGINAL_PRICE * item.quantity}
                                      </p>
                                      <p className="text-green-600 text-sm font-medium">
                                        {DISCOUNT_PERCENT}% off
                                      </p>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                            {index < savedItems.length - 1 && <Separator className="my-4" />}
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-muted-foreground py-8">
                          No items saved for later
                        </p>
                      )}
                    </CardContent>
                  </ScrollArea>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right side - Order summary */}
          {items.length > 0 && (
            <div className="w-full lg:w-[300px] xl:w-[350px] order-1 lg:order-2 mb-6 lg:mb-0">
              <Card className="rounded-lg border-2 border-muted shadow-md bg-white sticky top-24">
                <CardContent className="py-6 px-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ReceiptIndianRupee className="text-primary" size={28} />
                    <h2 className="text-xl font-semibold">Order Summary</h2>
                  </div>
                  <Separator className="mb-4" />
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Number of Items</span>
                      <span className="font-medium">{totalItems}</span>
                    </div>
                    {showDiscount ? (
                      <>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Total Original MRP</span>
                          <span className="line-through text-slate-400">
                            ₹{totalOriginal}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Discount Applied</span>
                          <span className="text-green-600 font-semibold">
                            -{DISCOUNT_PERCENT}% / -₹{discountAmount}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Total Saved</span>
                          <span className="text-green-800 font-semibold">
                            ₹{discountAmount}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total MRP</span>
                        <span>₹{totalOriginal}</span>
                      </div>
                    )}
                    <Separator className="my-2" />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-black">Final Price</span>
                      <span className="text-primary text-2xl font-bold">
                        ₹{finalPrice}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <GradientButton
                      className="w-full h-14 text-lg font-semibold rounded-full tracking-wide"
                      onClick={handleProceedToBuy}
                    >
                      Proceed to Buy
                    </GradientButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShoppingCart;
