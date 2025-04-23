
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Razorpay from "npm:razorpay@2.9.2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const razorpay = new Razorpay({
  key_id: Deno.env.get('RAZORPAY_KEY_ID'),
  key_secret: Deno.env.get('RAZORPAY_KEY_SECRET')
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, orderData } = await req.json();
    
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to smallest currency unit (paise)
      currency: 'INR',
      receipt: `order_${Date.now()}`,
    });

    // Create order record in database
    const { data: orderRecord, error } = await supabase
      .from('orders')
      .insert([{
        ...orderData,
        order_number: order.receipt,
        payment_id: order.id,
      }])
      .select()
      .single();

    if (error) throw error;

    return new Response(
      JSON.stringify({ 
        orderId: order.id,
        orderNumber: order.receipt,
        ...orderRecord 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
});
