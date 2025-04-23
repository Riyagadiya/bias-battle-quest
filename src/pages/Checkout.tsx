
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Loader2, CreditCard } from "lucide-react";

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

const MOCK_ORDER = {
  image: "/lovable-uploads/6bf3fb70-b012-4b8c-bbca-84f43109f746.png",
  title: "Cognitive Biases Card Deck",
  price: 2997,
  quantity: 3,
};

const Checkout = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation for required fields
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
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Order Placed (Demo)",
        description: "Your address has been submitted! (Demo only)",
      });
      setForm(initialState);
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F6F7]">
      <Header />
      <main className="flex-grow w-full">
        <div className="container mx-auto py-12 flex flex-col lg:flex-row gap-8 justify-center">
          {/* LEFT: SHIPPING DETAILS */}
          <Card className="flex-1 max-w-2xl mx-auto shadow-lg border border-[#eee] bg-white">
            <CardContent className="p-10">
              <h1 className="text-3xl font-semibold text-center mb-6">Shipping information</h1>
              <h2 className="text-xl font-medium text-center mb-8 tracking-wide text-gray-700">Shipping Details</h2>
              <form onSubmit={handleSubmit} autoComplete="off" className="space-y-5">
                {/* Row: Full Name + Email Address */}
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

                {/* Mobile */}
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

                {/* Address Line 1 */}
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

                {/* Address Line 2 */}
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

                {/* Landmark + Village/Town */}
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

                {/* City + State + Pincode */}
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

                <Button
                  type="submit"
                  className="w-full mt-6 rounded-full text-lg font-semibold bg-[#8B5CF6] hover:bg-[#7E69AB] transition-colors"
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
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* RIGHT: ORDER SUMMARY TAB */}
          <Card className="w-full max-w-sm mx-auto h-fit self-start border border-[#eee] shadow-md bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Order Summary</h2>
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={MOCK_ORDER.image}
                  alt={MOCK_ORDER.title}
                  className="w-20 h-20 rounded object-cover border border-gray-200"
                />
                <div>
                  <div className="font-medium text-lg">{MOCK_ORDER.title}</div>
                  <div className="font-semibold text-[#222] mt-2">₹{MOCK_ORDER.price}</div>
                  <span className="text-gray-400 text-xs block">Quantity: {MOCK_ORDER.quantity}</span>
                </div>
              </div>
              <div className="border-t border-gray-200 my-5" />
              <div className="flex justify-between py-1 text-base">
                <span className="text-gray-800">Subtotal</span>
                <span className="font-medium">₹{MOCK_ORDER.price}</span>
              </div>
              <div className="flex justify-between py-1 text-base">
                <span className="text-gray-800">Shipping</span>
                <span className="font-medium text-green-500">Free</span>
              </div>
              <div className="border-t border-gray-200 my-4" />
              <div className="flex justify-between text-xl font-bold mt-2">
                <span>Total</span>
                <span>₹{MOCK_ORDER.price}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
