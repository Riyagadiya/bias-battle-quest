import React, { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from 'lucide-react';
import type { Database } from '@/integrations/supabase/types';

type Order = Database['public']['Tables']['orders']['Row'];

const OrderSuccess = () => {
  const [orderDetails, setOrderDetails] = useState<Order | null>(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderNumber = searchParams.get('order');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!orderNumber) return;

      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('order_number', orderNumber)
        .single();

      if (data && !error) {
        setOrderDetails(data);
      }
    };

    fetchOrderDetails();
  }, [orderNumber]);

  if (!orderNumber) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-12 px-4">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
              <p className="text-gray-600">Order #{orderNumber}</p>
            </div>

            {orderDetails && (
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
                    {orderDetails.items.map((item, index) => (
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
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
