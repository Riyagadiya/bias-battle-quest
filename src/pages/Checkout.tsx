import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Loader2, CreditCard, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GradientButton from "@/components/GradientButton";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { useDiscount } from "@/hooks/use-discount";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      console.log("Razorpay already loaded");
      resolve(true);
      return;
    }

    console.log("Loading Razorpay script");
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    
    script.onload = () => {
      console.log("Razorpay script loaded successfully");
      resolve(true);
    };
    
    script.onerror = () => {
      console.error("Failed to load Razorpay script");
      resolve(false);
    };
    
    document.body.appendChild(script);
  });
};

const initialState = {
  fullName: "",
  email: "",
  mobile: "",
  address1: "",
  address2: "",
  landmark: "",
  village: "",
  city: "",
  state: "",
  pincode: "",
};

// Constants for pricing
const ORIGINAL_PRICE = 999; // Original price is always 999 per deck
const DISCOUNT_PERCENT = 30; // 30% discount when applicable

// Card deck image mapping
const cardDeckImages = {
  "Cognitive Biases Card Deck": "/lovable-uploads/bfa3ac45-7fda-4588-b9a6-2b8aeae3aa5f.png",
  "Research Method Card Deck": "/lovable-uploads/5a5bfd84-16d2-4308-a4f3-099fe574dc51.png",
  "Thinking Hat Card Deck": "/lovable-uploads/587a795b-4e10-45d4-b143-5047a2be78a3.png",
  "UX Laws Card Deck": "/lovable-uploads/ec436adc-58d5-41f3-aeac-d47aafacef08.png",
};

const Checkout = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const [orderCreated, setOrderCreated] = useState<{
    orderId: string;
    orderNumber: string;
  } | null>(null);
  const navigate = useNavigate();
  const { items, clear } = useCart();
  const { showDiscount } = useDiscount();
  
  useEffect(() => {
    loadRazorpayScript()
      .then((loaded) => {
        setIsRazorpayLoaded(loaded);
        if (!loaded) {
          toast({
            title: "Payment system unavailable",
            description: "Failed to load payment system. Please refresh the page or try again later.",
            variant: "destructive",
          });
        }
      })
      .catch(error => {
        console.error("Error loading Razorpay:", error);
        toast({
          title: "Payment system error",
          description: "Failed to initialize payment system. Please try again later.",
          variant: "destructive",
        });
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !form.fullName ||
      !form.email ||
      !form.mobile ||
      !form.address1 ||
      !form.city ||
      !form.state ||
      !form.pincode
    ) {
      toast({
        title: "Missing details",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return false;
    }

    if (items.length === 0) {
      toast({
        title: "Empty cart",
        description: "Your cart is empty. Please add items before checkout.",
        variant: "destructive",
      });
      return false;
    }

    if (!isRazorpayLoaded) {
      toast({
        title: "Payment system not ready",
        description: "Please wait for the payment system to load or refresh the page.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const notifyPaymentFailure = async (orderId: string) => {
    try {
      console.log("Notifying backend of payment failure for order:", orderId);
      const response = await supabase.functions.invoke('verify-payment', {
        body: {
          status: 'failed',
          razorpay_order_id: orderId
        }
      });
      
      if (response.error) {
        console.error("Failed to notify payment failure:", response.error);
      } else {
        console.log("Payment failure notification sent successfully:", response.data);
      }
    } catch (error) {
      console.error("Error notifying payment failure:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setSubmitting(true);
      
      console.log("Creating Razorpay order with amount:", finalPrice);

      const orderResponse = await supabase.functions.invoke('create-razorpay-order', {
        body: {
          amount: finalPrice,
          orderData: {
            full_name: form.fullName,
            email: form.email,
            mobile: form.mobile,
            address: `${form.address1} ${form.address2 || ''}`.trim(),
            city: form.city,
            state: form.state,
            pincode: form.pincode,
            items: items,
            subtotal,
            original_total: totalOriginal,
            discount_amount: discountAmount,
            final_price: finalPrice
          }
        }
      });

      if (orderResponse.error) {
        throw new Error(`Order creation failed: ${orderResponse.error.message || "Unknown error"}`);
      }

      if (!orderResponse.data) {
        throw new Error("No data returned from order creation");
      }

      const { orderId, orderNumber, apiKey } = orderResponse.data;
      
      console.log("Order created successfully:", { orderId, orderNumber });
      
      setOrderCreated({ orderId, orderNumber });
      
      if (!orderId) {
        throw new Error("Invalid order response - missing orderId");
      }

      if (!apiKey) {
        throw new Error("Missing API key in server response");
      }
      
      const razorpayOptions = {
        key: apiKey,
        amount: finalPrice * 100,
        currency: "INR",
        name: "Cogni Lense",
        description: "Purchase",
        order_id: orderId,
        handler: async function (response: any) {
          try {
            console.log("Payment successful, verifying payment:", response);
            const verifyResponse = await supabase.functions.invoke('verify-payment', {
              body: {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature
              }
            });

            if (verifyResponse.error) {
              console.error("Payment verification error:", verifyResponse.error);
              toast({
                title: "Payment verification failed",
                description: "Please contact support if you've been charged",
                variant: "destructive",
              });
              return;
            }
            
            console.log("Payment verification successful:", verifyResponse.data);
            
            // Clear the cart after successful payment verification
            clear();
            
            console.log("Cart cleared, redirecting to success page");
            navigate(`/order-success?order=${orderNumber}`);
          } catch (error) {
            console.error('Payment verification failed:', error);
            setSubmitting(false);
            toast({
              title: "Payment verification failed",
              description: response.error.description || "Please try again",
              variant: "destructive",
            });
          }
        },
        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.mobile,
        },
        theme: {
          color: "#6366f1",
        },
        modal: {
          ondismiss: function() {
            console.log("Payment modal dismissed");
            setSubmitting(false);
            toast({
              title: "Payment cancelled",
              description: "You can try again when you're ready",
              variant: "default",
            });
          }
        }
      };

      console.log("Initializing Razorpay with options:", razorpayOptions);
      
      const razorpay = new window.Razorpay(razorpayOptions);
      
      razorpay.on('payment.failed', function (response: any) {
        console.error('Payment failed:', response.error);
        setSubmitting(false);
        
        if (orderCreated?.orderId) {
          notifyPaymentFailure(orderCreated.orderId);
        }
        
        toast({
          title: "Payment failed",
          description: response.error.description || "Please try again",
          variant: "destructive",
        });
      });
      
      console.log("Opening Razorpay payment form");
      razorpay.open();
      
    } catch (error) {
      console.error('Payment initialization failed:', error);
      setSubmitting(false);
      
      if (orderCreated?.orderId) {
        notifyPaymentFailure(orderCreated.orderId);
      }
      
      toast({
        title: "Payment initialization failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  // Calculate the number of items
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate total based on original price (always 999 per item)
  const totalOriginal = items.reduce(
    (sum, item) => sum + ORIGINAL_PRICE * item.quantity, 
    0
  );
  
  // Apply discount only if showDiscount is true
  const discountAmount = showDiscount ? Math.round(totalOriginal * (DISCOUNT_PERCENT / 100)) : 0;
  
  // Calculate the subtotal (after discount if applicable)
  const subtotal = totalOriginal - discountAmount;
  
  // Final price is the subtotal (which accounts for discount if applicable)
  const finalPrice = subtotal;

  // Get image for a card deck based on title
  const getCardDeckImage = (title: string) => {
    return cardDeckImages[title as keyof typeof cardDeckImages] || "/lovable-uploads/6bf3fb70-b012-4b8c-bbca-84f43109f746.png";
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F6F7]">
      <Header />
      <main className="flex-grow w-full relative py-16 md:py-24 lg:py-28">
        <Button
          variant="outline"
          size="icon"
          onClick={handleBackClick}
          className="fixed left-6 top-16 z-50 rounded-lg bg-white shadow-md border border-black/10"
          type="button"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="container mx-auto py-12 flex flex-col lg:flex-row gap-8 justify-center">
          <Card className="flex-1 max-w-2xl mx-auto shadow-lg border border-[#eee] bg-white">
            <CardContent className="p-0">
              <div className="px-10 pt-10 pb-0">
                <h1 className="text-3xl font-bold text-left mb-6 tracking-tight font-domine">Shipping Details</h1>
              </div>
              <form onSubmit={handleSubmit} autoComplete="off" className="p-10 pt-0 space-y-5">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <Label htmlFor="fullName">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="mobile">
                    Mobile Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    inputMode="tel"
                    maxLength={10}
                    placeholder="Enter 10-digit mobile number"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address1">
                    Address Line 1 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address1"
                    name="address1"
                    value={form.address1}
                    onChange={handleChange}
                    placeholder="House number, Building name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address2">Address Line 2</Label>
                  <Input
                    id="address2"
                    name="address2"
                    value={form.address2}
                    onChange={handleChange}
                    placeholder="Street, Area"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <Label htmlFor="landmark">Landmark</Label>
                    <Input
                      id="landmark"
                      name="landmark"
                      value={form.landmark}
                      onChange={handleChange}
                      placeholder="Nearby landmark"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="village">Village/Town</Label>
                    <Input
                      id="village"
                      name="village"
                      value={form.village}
                      onChange={handleChange}
                      placeholder="Village or town name"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <Label htmlFor="city">
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="state">
                      State <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="State"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="pincode">
                      Pincode <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={form.pincode}
                      onChange={handleChange}
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="6-digit pincode"
                      required
                    />
                  </div>
                </div>
                <GradientButton
                  type="submit"
                  className="w-full mt-8 h-14 text-lg font-semibold rounded-full tracking-wide shadow-lg gradient-border-rectangle"
                  disabled={submitting || !isRazorpayLoaded}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      Place Order
                    </>
                  )}
                </GradientButton>
              </form>
            </CardContent>
          </Card>
          <Card className="w-full max-w-sm mx-auto h-fit self-start border border-[#eee] shadow-md bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-left font-domine tracking-tight">Order Summary</h2>
              {items.length === 0 ? (
                <div className="text-center text-muted-foreground py-6">Your cart is empty</div>
              ) : (
                <>
                  {items.map((item, idx) => (
                    <div className="flex items-center gap-4 mb-6" key={item.id}>
                      <div>
                        <img
                          src={getCardDeckImage(item.title)}
                          alt={item.title}
                          className="w-20 h-20 rounded object-cover border border-gray-200"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-base font-domine truncate">{item.title}</div>
                        <div className="font-worksans text-sm text-gray-700 mt-1">
                          Quantity: <span className="font-semibold">{item.quantity}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-bold text-lg font-worksans text-black">
                            ₹{showDiscount ? Math.round(ORIGINAL_PRICE * (1 - DISCOUNT_PERCENT / 100)) * item.quantity : ORIGINAL_PRICE * item.quantity}
                          </span>
                          {showDiscount && (
                            <>
                              <span className="line-through text-gray-400 font-worksans text-base">
                                ₹{ORIGINAL_PRICE * item.quantity}
                              </span>
                              <span className="text-green-600 text-xs font-medium ml-0.5">
                                {DISCOUNT_PERCENT}% off
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 my-1 mb-4" />
                  <div className="flex justify-between py-1 text-base font-worksans">
                    <span className="text-gray-800">Number of Items</span>
                    <span className="font-medium">{totalItems}</span>
                  </div>
                  {showDiscount ? (
                    <>
                      <div className="flex justify-between py-1 text-base font-worksans">
                        <span className="text-gray-800">Total Original MRP</span>
                        <span className="line-through text-gray-400">₹{totalOriginal}</span>
                      </div>
                      <div className="flex justify-between py-1 text-base font-worksans">
                        <span className="text-gray-800">Discount Applied</span>
                        <span className="text-green-600 font-semibold">
                          -{DISCOUNT_PERCENT}% / -₹{discountAmount}
                        </span>
                      </div>
                      <div className="flex justify-between py-1 text-base font-worksans">
                        <span className="text-gray-800">Total Saved</span>
                        <span className="text-green-800 font-semibold">₹{discountAmount}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between py-1 text-base font-worksans">
                      <span className="text-gray-800">Total MRP</span>
                      <span>₹{totalOriginal}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 my-4" />
                  <div className="flex justify-between items-center text-xl font-bold font-worksans mt-2">
                    <span className="text-black">Total Amount</span>
                    <span className="text-primary text-2xl font-bold">₹{finalPrice}</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
