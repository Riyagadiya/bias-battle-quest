
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const initialState = {
  address1: "",
  address2: "",
  landmark: "",
  village: "",
  city: "",
  pincode: "",
  mobile: "",
  email: "",
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
      !form.address1 ||
      !form.city ||
      !form.pincode ||
      !form.mobile ||
      !form.email
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container max-w-xl py-12">
          <Card className="shadow-xl border-2 border-muted bg-white">
            <CardContent className="p-8">
              <h1 className="text-2xl font-semibold mb-6">
                Checkout - Delivery Address
              </h1>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="address1">
                    Address Line 1 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address1"
                    name="address1"
                    value={form.address1}
                    onChange={handleChange}
                    placeholder="House No., Street, Area"
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
                    placeholder="Apartment, Suite, Floor etc."
                  />
                </div>
                <div>
                  <Label htmlFor="landmark">Landmark</Label>
                  <Input
                    id="landmark"
                    name="landmark"
                    value={form.landmark}
                    onChange={handleChange}
                    placeholder="Near XYZ, opposite ABC"
                  />
                </div>
                <div>
                  <Label htmlFor="village">Village</Label>
                  <Input
                    id="village"
                    name="village"
                    value={form.village}
                    onChange={handleChange}
                    placeholder="Village (if applicable)"
                  />
                </div>
                <div>
                  <Label htmlFor="city">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
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
                    required
                  />
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
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full mt-4 rounded-full text-lg font-semibold"
                  loading={submitting ? "true" : undefined}
                  disabled={submitting}
                >
                  {submitting ? "Placing Order..." : "Place Order"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;

