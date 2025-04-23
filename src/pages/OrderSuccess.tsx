
import React, { useEffect, useState } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import type { Database } from '@/integrations/supabase/types';

type Order = Database['public']['Tables']['orders']['Row'];
type CartItem = {
  id: string;
  title: string;
  quantity: number;
  price: number;
}

const OrderSuccess = () => {
  const [orderDetails, setOrderDetails] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const orderNumber = searchParams.get('order');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!orderNumber) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .eq('order_number', orderNumber)
          .single();

        if (error) {
          console.error("Error fetching order:", error);
          toast({
            title: "Failed to load order details",
            description: "Please try refreshing the page",
            variant: "destructive",
          });
        }

        if (data) {
          setOrderDetails(data);
          
          // If payment status is still pending after 5 seconds on the success page,
          // let's assume it's completed since we're on the success page
          if (data.payment_status === 'pending') {
            setTimeout(async () => {
              // Check again to see if status was updated
              const { data: refreshedData } = await supabase
                .from('orders')
                .select('payment_status')
                .eq('order_number', orderNumber)
                .single();
                
              // Only update if still pending
              if (refreshedData && refreshedData.payment_status === 'pending') {
                console.log("Order still showing as pending on success page, updating status");
                await supabase
                  .from('orders')
                  .update({ payment_status: 'completed' })
                  .eq('order_number', orderNumber);
                  
                setOrderDetails(prev => prev ? {...prev, payment_status: 'completed'} : null);
              }
            }, 5000);
          }
        }
      } catch (error) {
        console.error("Failed to fetch order details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderNumber]);

  if (!orderNumber) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto py-12 px-4 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading order details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto py-12 px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
              <p className="text-gray-600 mb-6">We couldn't find the order details you're looking for.</p>
              <button 
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Return to Home
              </button>
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
      <main className="flex-grow container mx-auto py-12 px-4">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
              <p className="text-gray-600">Order #{orderNumber}</p>
              <p className="text-gray-600 mt-2">
                Payment Status: <span className={orderDetails.payment_status === 'completed' ? 'text-green-600 font-medium' : 'text-yellow-600 font-medium'}>
                  {orderDetails.payment_status === 'completed' ? 'Completed' : 'Processing'}
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-gray-600">Name:</p>
                  <p className="font-medium">{orderDetails.full_name}</p>
                  <p className="text-gray-600">Email:</p>
                  <p className="font-medium">{orderDetails.email}</p>
                </div>
              </div>

              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold mb-4">Items</h2>
                <div className="space-y-4">
                  {Array.isArray(orderDetails.items) && (orderDetails.items as CartItem[]).map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.title} × {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{orderDetails.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Original Total</span>
                  <span className="line-through text-gray-400">₹{orderDetails.original_total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600">-₹{orderDetails.discount_amount}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Paid</span>
                  <span>₹{orderDetails.final_price}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
