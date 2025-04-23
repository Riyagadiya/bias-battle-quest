
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// A simple component to show each item in the order
function OrderItems({ items }: { items: any[] }) {
  return (
    <ul className="divide-y mt-2 mb-6">
      {items.map((item) => (
        <li key={item.id} className="py-3 flex items-center gap-4">
          <img
            src={"/lovable-uploads/6bf3fb70-b012-4b8c-bbca-84f43109f746.png"}
            alt={item.title}
            className="w-14 h-14 object-cover rounded border"
          />
          <div>
            <div className="font-medium">{item.title}</div>
            <div className="text-xs text-gray-500">
              Qty: {item.quantity} &middot; Price: ₹{item.price * item.quantity}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

const OrderSuccess = () => {
  // Get routed order and payment data from location.state
  const location = useLocation();
  const navigate = useNavigate();
  // If no state is present, redirect to cart
  React.useEffect(() => {
    if (!location.state) navigate("/cart");
    // eslint-disable-next-line
  }, []);
  if (!location.state) return null; // Nothing to show if accessed directly

  const {
    fullName,
    email,
    mobile,
    address1,
    address2,
    city,
    state,
    pincode,
    items,
    subtotal,
    razorpay,
  } = location.state as any;

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F6F7]">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-lg mx-auto mt-12 mb-20">
          <Card className="bg-white border border-[#eee] shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col items-center">
                <img
                  src="https://img.icons8.com/color/96/000000/checked-checkbox.png"
                  alt="Success"
                  className="w-20 h-20 mb-2"
                />
                <h2 className="text-3xl font-bold text-green-700 mb-2">Order Successful!</h2>
                <div className="text-black/80 text-base mb-8 text-center">
                  Thank you, <span className="font-semibold">{fullName}</span>.<br />
                  We've received your payment (Payment ID: <span className="font-mono">{razorpay?.razorpay_payment_id}</span>).
                </div>
                <div className="w-full text-left">
                  <div className="font-semibold mb-1 text-lg">Order Details:</div>
                  <OrderItems items={items} />
                  <div>
                    <div><span className="font-semibold">Order Total:</span> ₹{subtotal}</div>
                    <div><span className="font-semibold">Name:</span> {fullName}</div>
                    <div><span className="font-semibold">Email:</span> {email}</div>
                    <div><span className="font-semibold">Mobile:</span> {mobile}</div>
                    <div>
                      <span className="font-semibold">Shipping Address:</span><br />
                      {address1} {address2 && `, ${address2}`}, {city}, {state} - {pincode}
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full mt-8"
                  onClick={() => navigate("/")}
                >
                  Shop More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
