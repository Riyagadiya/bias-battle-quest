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

const DISCOUNT_PERCENT = 25;

const calculateOriginalPrice = (price: number) => {
  return Math.round(price / (1 - DISCOUNT_PERCENT / 100));
};

const Checkout = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { items } = useCart();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      return;
    }
    setSubmitting(true);

    try {
      let product_name = items.length === 1
        ? items[0].title
        : `${items[0].title} and ${items.length - 1} more items`;
      let quantity = items.reduce((sum, item) => sum + item.quantity, 0);
      let amount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

      const resp = await fetch("https://nmmeipvqmshlxfynrnrr.supabase.co/functions/v1/create-razorpay-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbWVpcHZxbXNobHhmeW5ybnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMjcyOTEsImV4cCI6MjA2MDgwMzI5MX0.JxB2phn6aYpiBJlwbyaifhKV7d9xVRlU3o565DA1SEw",
        },
        body: JSON.stringify({
          orderData: {
            product_name,
            amount,
            quantity,
            currency: "INR",
            customer_name: form.fullName,
            customer_email: form.email,
            customer_mobile: form.mobile,
            address_line1: form.address1,
            address_line2: form.address2 || null,
            landmark: form.landmark || null,
            village: form.village || null,
            city: form.city,
            state: form.state,
            pincode: form.pincode,
          }
        })
      });
      const data = await resp.json();
      if (!data.success || !data.razorpay_order_id) {
        throw new Error("Could not create payment order");
      }

      const keyResp = await fetch("https://nmmeipvqmshlxfynrnrr.supabase.co/functions/v1/get-razorpay-key");
      const keyData = await keyResp.json();
      const razorpayKey = keyData.key;
      if (!razorpayKey) throw new Error("Razorpay Key not set in project");

      const options = {
        key: razorpayKey,
        amount: data.amount, // in paise (180000 = 1800.00 INR)
        currency: data.currency,
        name: "Your Store",
        description: product_name,
        order_id: data.razorpay_order_id,
        handler: async function (response: any) {
          try {
            const updateResp = await fetch("https://nmmeipvqmshlxfynrnrr.supabase.co/rest/v1/orders?order_id=eq." + encodeURIComponent(data.orderDetails.order_id), {
              method: "PATCH",
              headers: {
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbWVpcHZxbXNobHhmeW5ybnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMjcyOTEsImV4cCI6MjA2MDgwMzI5MX0.JxB2phn6aYpiBJlwbyaifhKV7d9xVRlU3o565DA1SEw",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbWVpcHZxbXNobHhmeW5ybnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMjcyOTEsImV4cCI6MjA2MDgwMzI5MX0.JxB2phn6aYpiBJlwbyaifhKV7d9xVRlU3o565DA1SEw",
                "Content-Type": "application/json",
                "Prefer": "return=representation"
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                status: "paid"
              }),
            });
            const orderRecords = await updateResp.json();
            setSubmitting(false);
            navigate("/thankyou", {
              state: { order: { ...data.orderDetails, ...form, ...orderRecords[0], status: "paid" } }
            });
            setForm(initialState);
          } catch (err) {
            setSubmitting(false);
            toast({
              title: "Order error",
              description: "Payment succeeded, but could not save your order! Please contact support.",
              variant: "destructive",
            });
          }
        },
        modal: {
          ondismiss: function () {
            setSubmitting(false);
          }
        },
        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.mobile,
        },
        theme: {
          color: "#22223f",
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setSubmitting(false);
      toast({
        title: "Payment Error",
        description: (err as any).message || "There was a problem placing your order.",
        variant: "destructive"
      });
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalOriginal = items.reduce(
    (sum, item) => sum + calculateOriginalPrice(item.price) * item.quantity,
    0
  );
  const discountAmount = totalOriginal - subtotal;
  const totalSaved = discountAmount;
  const finalPrice = subtotal;

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
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Placing Order...
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
                          src={"/lovable-uploads/6bf3fb70-b012-4b8c-bbca-84f43109f746.png"}
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
                          <span className="font-bold text-lg font-worksans text-black">₹{item.price * item.quantity}</span>
                          <span className="line-through text-gray-400 font-worksans text-base">
                            ₹{calculateOriginalPrice(item.price) * item.quantity}
                          </span>
                          <span className="text-green-600 text-xs font-medium ml-0.5">
                            {DISCOUNT_PERCENT}% off
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 my-1 mb-4" />
                  <div className="flex justify-between py-1 text-base font-worksans">
                    <span className="text-gray-800">Number of Items</span>
                    <span className="font-medium">{totalItems}</span>
                  </div>
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
                    <span className="text-green-800 font-semibold">₹{totalSaved}</span>
                  </div>
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
