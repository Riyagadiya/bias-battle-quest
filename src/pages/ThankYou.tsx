
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;
  // fallback (no state)
  if (!order) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center bg-[#F6F6F7]">
          <Card>
            <CardContent className="p-10">
              <h1 className="text-2xl font-bold mb-4 text-center">No Booking Details Found</h1>
              <Button onClick={() => navigate("/")} className="w-full mt-4">Back Home</Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-[#F6F6F7]">
        <Card>
          <CardContent className="p-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Thank You for Your Order!</h1>
            <div className="mb-6">
              <div><b>Order ID:</b> {order.order_id}</div>
              <div><b>Name:</b> {order.customer_name}</div>
              <div><b>Email:</b> {order.customer_email}</div>
              <div><b>Mobile:</b> {order.customer_mobile}</div>
              <div><b>Address:</b> {order.address_line1} {order.address_line2}</div>
              <div><b>City:</b> {order.city}</div>
              <div><b>State:</b> {order.state}</div>
              <div><b>Pincode:</b> {order.pincode}</div>
              <div><b>Products:</b> {order.product_name}</div>
              <div><b>Amount Paid:</b> ₹{order.amount}</div>
            </div>
            <Button onClick={() => navigate("/")} className="w-full">Back Home</Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
