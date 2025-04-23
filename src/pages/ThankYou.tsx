
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, ArrowLeft, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface OrderDetails {
  id: string;
  order_id: string;
  customer_name: string;
  customer_email: string;
  customer_mobile: string;
  address_line1: string;
  address_line2: string | null;
  landmark: string | null;
  village: string | null;
  city: string;
  state: string;
  pincode: string;
  product_name: string;
  amount: number;
  quantity: number;
  status: string;
  created_at: string;
}

const ThankYou = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!orderId) {
        setError("No order ID provided");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("orders")
          .select("*")
          .eq("order_id", orderId)
          .single();

        if (error) throw new Error(error.message);
        if (!data) throw new Error("Order not found");

        setOrder(data as OrderDetails);
      } catch (err) {
        console.error("Error fetching order:", err);
        setError("Unable to fetch order details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  const formatAddress = (order: OrderDetails) => {
    const parts = [
      order.address_line1,
      order.address_line2,
      order.landmark,
      order.village,
      `${order.city}, ${order.state}, ${order.pincode}`
    ].filter(Boolean);
    
    return parts.join(', ');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F6F7]">
      <Header />
      <main className="flex-grow w-full relative py-16 md:py-24 lg:py-28">
        <div className="container mx-auto py-12 px-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
              <p className="text-center font-medium">Loading order details...</p>
            </div>
          ) : error ? (
            <Card className="max-w-2xl mx-auto shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="text-red-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold font-domine mb-2">Order Not Found</h1>
                  <p className="text-gray-600 mb-8">{error}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/cart">
                      <Button variant="outline" className="flex items-center">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Return to Cart
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button className="flex items-center">
                        <Home className="mr-2 h-4 w-4" />
                        Go to Homepage
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="max-w-3xl mx-auto shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-8 text-center">
                  <div className="text-green-600 mb-4">
                    <CheckCircle className="h-16 w-16" />
                  </div>
                  <h1 className="text-3xl font-bold font-domine mb-2">Thank You for Your Order!</h1>
                  <p className="text-gray-600">Your order has been successfully placed and payment received.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-bold font-domine mb-4">Order Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">Order ID</p>
                      <p className="font-semibold font-worksans">{order?.order_id}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Order Date</p>
                      <p className="font-semibold font-worksans">{order?.created_at ? formatDate(order.created_at) : '-'}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Product</p>
                      <p className="font-semibold font-worksans">{order?.product_name}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Order Status</p>
                      <p className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {order?.status === "completed" ? "Paid" : order?.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Total Amount</p>
                      <p className="font-semibold font-worksans">₹{order?.amount}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Quantity</p>
                      <p className="font-semibold font-worksans">{order?.quantity}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-bold font-domine mb-4">Customer Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">Name</p>
                      <p className="font-semibold font-worksans">{order?.customer_name}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Email</p>
                      <p className="font-semibold font-worksans">{order?.customer_email}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Phone</p>
                      <p className="font-semibold font-worksans">{order?.customer_mobile}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-bold font-domine mb-4">Shipping Address</h2>
                  <p className="font-worksans">{order ? formatAddress(order) : '-'}</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/">
                    <Button className="w-full sm:w-auto flex items-center">
                      <Home className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
