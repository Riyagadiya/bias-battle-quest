
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const RAZORPAY_KEY_ID = Deno.env.get("RAZORPAY_KEY_ID");
  const RAZORPAY_KEY_SECRET = Deno.env.get("RAZORPAY_KEY_SECRET");
  const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
  const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");

  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    return new Response(
      JSON.stringify({ error: "Razorpay credentials not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const { orderData } = await req.json();
    
    // Create Razorpay order
    const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`)}`,
      },
      body: JSON.stringify({
        amount: orderData.amount * 100, // amount in smallest currency unit (paise)
        currency: orderData.currency || "INR",
        receipt: `order_rcpt_${Date.now()}`,
        notes: {
          description: orderData.product_name,
        },
      }),
    });

    const razorpayData = await razorpayResponse.json();
    
    if (!razorpayData.id) {
      throw new Error("Failed to create Razorpay order: " + JSON.stringify(razorpayData));
    }

    // Create order entry in Supabase
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    const { data: orderRecord, error: orderError } = await supabase
      .from('orders')
      .insert({
        ...orderData,
        razorpay_order_id: razorpayData.id,
        status: "created",
        order_id: `ORD-${Date.now()}`
      })
      .select()
      .single();

    if (orderError) {
      throw new Error(`Failed to create order record: ${orderError.message}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        razorpay_order_id: razorpayData.id,
        amount: razorpayData.amount,
        currency: razorpayData.currency,
        orderDetails: orderRecord
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing order:", error.message);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
