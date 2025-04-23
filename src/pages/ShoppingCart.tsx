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

  const calculateOriginalPrice = (price: number) => {
    return Math.round(price / (1 - DISCOUNT_PERCENT / 100));
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalOriginal = items.reduce(
    (sum, item) => sum + calculateOriginalPrice(item.price) * item.quantity,
    0
  );
  const discountAmount = totalOriginal - subtotal;
  const discountPercent = totalOriginal > 0 ? Math.round((discountAmount / totalOriginal) * 100) : 0;
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
    toast("Proceeding to buy (demo only)");
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
                      <div className="w-48 h-48 bg-muted rounded-lg shrink-0"></div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-medium">{item.title}</h3>
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
                          <p className="font-medium text-lg">
                            ₹{item.price * item.quantity}
                          </p>
                          <p className="text-sm text-muted-foreground line-through">
                            ₹{calculateOriginalPrice(item.price) * item.quantity}
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

            <div className="mt-8 w-full flex flex-col items-center">
              <Card className="w-full max-w-3xl mx-auto rounded-lg border-2 border-muted shadow-md bg-white">
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
                        ₹{totalSaved}
                      </span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-black">Final Price</span>
                      <span className="text-primary text-2xl font-bold">
                        ₹{finalPrice}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="w-full max-w-3xl mx-auto my-6 flex">
                <GradientButton
                  className="w-full h-14 text-lg font-semibold rounded-full tracking-wide"
                  onClick={handleProceedToBuy}
                  type="button"
                >
                  Proceed to Buy
                </GradientButton>
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
                        <div className="w-48 h-48 bg-muted rounded-lg shrink-0"></div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-medium">{item.title}</h3>
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
                            <p className="font-medium text-lg">
                              ₹{item.price * item.quantity}
                            </p>
                            <p className="text-sm text-muted-foreground line-through">
                              ₹{calculateOriginalPrice(item.price) * item.quantity}
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
