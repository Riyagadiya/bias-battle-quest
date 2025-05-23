
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Razorpay from "npm:razorpay@2.9.2";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Initialize Razorpay
const razorpayKeyId = Deno.env.get('RAZORPAY_KEY_ID') || '';
const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET') || '';

if (!razorpayKeyId || !razorpayKeySecret) {
  console.error("Missing Razorpay credentials");
}

const razorpay = new Razorpay({
  key_id: razorpayKeyId,
  key_secret: razorpayKeySecret
});

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received request to create Razorpay order");
    
    // Parse request body
    let requestData;
    try {
      requestData = await req.json();
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError);
      return new Response(
        JSON.stringify({ error: "Invalid request body" }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      );
    }
    
    const { amount, orderData } = requestData;
    
    if (!amount || !orderData) {
      console.error("Missing required fields:", { amount, orderData });
      return new Response(
        JSON.stringify({ error: "Missing required fields: amount or orderData" }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      );
    }
    
    console.log("Creating Razorpay order with amount:", amount);
    
    // Create Razorpay order
    let order;
    try {
      const orderReceipt = `order_${Date.now()}`;
      order = await razorpay.orders.create({
        amount: Math.round(amount * 100), // Convert to smallest currency unit (paise)
        currency: 'INR',
        receipt: orderReceipt,
        payment_capture: 1, // Auto capture payment
      });
      
      console.log("Razorpay order created:", JSON.stringify(order));
      
      if (!order || !order.id) {
        throw new Error("Invalid order response from Razorpay");
      }
      
      // Create order record in database
      const { data: orderRecord, error } = await supabase
        .from('orders')
        .insert([{
          ...orderData,
          order_number: orderReceipt,
          payment_id: order.id, // Store Razorpay order ID here
          payment_status: 'pending' // Explicitly set initial status
        }])
        .select()
        .single();

      if (error) {
        console.error("Database error:", error);
        throw error;
      }

      console.log("Order record created in database:", orderRecord);

      return new Response(
        JSON.stringify({ 
          orderId: order.id,
          orderNumber: order.receipt,
          apiKey: razorpayKeyId,
          ...orderRecord 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      );
    } catch (razorpayError) {
      console.error("Razorpay order creation failed:", razorpayError);
      return new Response(
        JSON.stringify({ 
          error: "Failed to create Razorpay order",
          details: razorpayError.message || "Unknown Razorpay error",
          stack: razorpayError.stack
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        },
      );
    }
  } catch (error) {
    console.error("Function error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Server error",
        details: error.message || "Unknown server error",
        stack: error.stack
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
});
