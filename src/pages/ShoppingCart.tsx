
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Save, Trash2, Plus, Minus, ArrowLeft, ReceiptIndianRupee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import React from "react";
import GradientButton from "@/components/GradientButton";

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
  const navigate = useNavigate();

  const DISCOUNT_PERCENT = 25;
  // Calculate the original price of a single item by undoing the 25% discount
  const calculateOriginalPrice = (price: number) => {
    return Math.round(price / (1 - DISCOUNT_PERCENT / 100));
  };

  // --- ORDER SUMMARY LOGIC ---
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalOriginal = items.reduce(
    (sum, item) => sum + calculateOriginalPrice(item.price) * item.quantity,
    0
  );
  const discountAmount = totalOriginal - subtotal;
  const totalSaved = discountAmount;
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
    toast.success("Proceeding to buy functionality coming soon");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto py-24 px-4">
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

        <Tabs defaultValue="items" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="items">Items ({items.length})</TabsTrigger>
            <TabsTrigger value="saved">
              Saved for Later ({savedItems?.length || 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="items">
            <Card>
              <CardContent className="pt-6">
                {items.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex items-start gap-6 py-4">
                      <div className="w-56 h-56 bg-muted rounded-lg shrink-0"></div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Premium Quality Card Deck
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-9 w-9 rounded-lg border-2 border-muted"
                              onClick={() =>
                                handleUpdateQuantity(item.title, item.quantity - 1)
                              }
                            >
                              <Minus className="h-5 w-5" />
                            </Button>
                            <span className="w-12 text-center text-base font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-9 w-9 rounded-lg border-2 border-muted"
                              onClick={() =>
                                handleUpdateQuantity(item.title, item.quantity + 1)
                              }
                            >
                              <Plus className="h-5 w-5" />
                            </Button>
                          </div>

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
                      <div className="text-right min-w-[150px]">
                        <div className="flex flex-col items-end gap-1">
                          <p className="font-semibold text-lg">₹{item.price}</p>
                          <p className="text-sm text-muted-foreground line-through">
                            ₹{calculateOriginalPrice(item.price)}
                          </p>
                          <p className="text-green-600 text-sm font-medium">
                            {DISCOUNT_PERCENT}% off
                          </p>
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
            </Card>

            {/* HORIZONTAL ORDER SUMMARY BOX */}
            <div className="mt-8">
              <div className="w-full flex flex-col gap-5">
                {items.length > 0 && (
                  <div className="w-full bg-white border-2 border-muted rounded-lg shadow-sm flex flex-row items-center px-7 py-6 gap-8">
                    <div className="flex items-center gap-2 mr-4">
                      <ReceiptIndianRupee className="text-primary" size={28} />
                      <h2 className="text-xl sm:text-2xl font-bold">
                        Order Summary
                      </h2>
                    </div>
                    <Separator orientation="vertical" className="mx-4 h-14 hidden sm:block" />
                    <div className="flex flex-wrap gap-x-8 gap-y-2 flex-grow text-sm sm:text-base">
                      <span>
                        <span className="font-medium text-muted-foreground">Items: </span>
                        <span className="font-bold">{totalItems}</span>
                      </span>
                      <span>
                        <span className="font-medium text-muted-foreground">Total MRP: </span>
                        <span className="font-semibold line-through text-slate-400">₹{totalOriginal}</span>
                      </span>
                      <span>
                        <span className="font-medium text-muted-foreground">Discount: </span>
                        <span className="text-green-700 font-semibold">
                          {DISCOUNT_PERCENT}% / -₹{totalOriginal - subtotal}
                        </span>
                      </span>
                      <span>
                        <span className="font-medium text-muted-foreground">Saved: </span>
                        <span className="text-green-700 font-semibold">
                          ₹{totalSaved}
                        </span>
                      </span>
                      <span>
                        <span className="font-medium text-black">Final Price: </span>
                        <span className="text-primary font-bold text-xl sm:text-2xl ml-2">
                          ₹{finalPrice}
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                {/* Proceed to Buy Button */}
                {items.length > 0 && (
                  <div className="w-full flex justify-end">
                    <GradientButton
                      className="w-full sm:w-fit py-4 px-10 text-base font-semibold"
                      onClick={handleProceedToBuy}
                    >
                      Proceed to Buy
                    </GradientButton>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <Card>
              <CardContent className="pt-6">
                {savedItems && savedItems.length > 0 ? (
                  savedItems.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex items-start gap-6 py-4">
                        <div className="w-56 h-56 bg-muted rounded-lg shrink-0"></div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Premium Quality Card Deck
                          </p>
                          <div className="flex items-center gap-4 mt-4">
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
                        <div className="text-right min-w-[150px]">
                          <div className="flex flex-col items-end gap-1">
                            <p className="font-semibold text-lg">₹{item.price}</p>
                            <p className="text-sm text-muted-foreground line-through">
                              ₹{calculateOriginalPrice(item.price)}
                            </p>
                            <p className="text-green-600 text-sm font-medium">
                              {DISCOUNT_PERCENT}% off
                            </p>
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
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ShoppingCart;
