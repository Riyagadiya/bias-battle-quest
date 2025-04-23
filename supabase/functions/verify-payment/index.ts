
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createHmac } from "https://deno.land/std@0.177.0/crypto/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received payment verification request");
    
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
    
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = requestData;
    
    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      console.error("Missing required verification parameters");
      return new Response(
        JSON.stringify({ error: "Missing required verification parameters" }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      );
    }
    
    console.log("Verifying payment:", { razorpay_payment_id, razorpay_order_id });
    
    // Create signature
    const secret = Deno.env.get('RAZORPAY_KEY_SECRET') || '';
    if (!secret) {
      console.error("Missing Razorpay key secret");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        },
      );
    }
    
    const hmac = createHmac("sha256", secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generated_signature = hmac.digest("hex");

    // Verify signature
    if (generated_signature === razorpay_signature) {
      console.log("Signature verification successful");
      
      try {
        // Update order status in database
        const { error } = await supabase
          .from('orders')
          .update({ payment_status: 'completed' })
          .eq('payment_id', razorpay_order_id);

        if (error) {
          console.error("Database error:", error);
          return new Response(
            JSON.stringify({ 
              error: "Failed to update order status",
              details: error.message 
            }),
            { 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
              status: 500,
            },
          );
        }

        console.log("Order status updated to completed");

        return new Response(
          JSON.stringify({ success: true }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200,
          },
        );
      } catch (dbError) {
        console.error("Database operation failed:", dbError);
        return new Response(
          JSON.stringify({ 
            error: "Failed to update order status",
            details: dbError.message || "Unknown database error"
          }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 500,
          },
        );
      }
    } else {
      console.error("Signature verification failed");
      return new Response(
        JSON.stringify({ 
          error: 'Payment verification failed',
          details: 'Invalid signature'
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      );
    }
  } catch (error) {
    console.error("Function error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Server error",
        details: error.message || "Unknown server error"
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
});
