
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
    
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, status } = requestData;
    
    // Handle payment failure reports from client
    if (status === 'failed') {
      console.log("Handling failed payment for order:", razorpay_order_id);
      
      try {
        // Update order status to failed
        const { error } = await supabase
          .from('orders')
          .update({ payment_status: 'failed' })
          .eq('payment_id', razorpay_order_id);

        if (error) {
          console.error("Database error updating failed payment:", error);
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

        console.log("Order status updated to failed");

        return new Response(
          JSON.stringify({ success: true, status: 'failed' }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200,
          },
        );
      } catch (dbError) {
        console.error("Database operation failed for failed payment:", dbError);
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
    }
    
    // Handle successful payment verification
    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      console.error("Missing required verification parameters:", requestData);
      return new Response(
        JSON.stringify({ error: "Missing required verification parameters" }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      );
    }
    
    console.log("Verifying payment:", { 
      razorpay_payment_id, 
      razorpay_order_id, 
      razorpay_signature 
    });
    
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
    
    try {
      // Verification logic
      const hmac = createHmac("sha256", secret);
      hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
      const generated_signature = hmac.digest("hex");
      
      console.log("Signature verification:", {
        provided: razorpay_signature,
        generated: generated_signature,
        match: generated_signature === razorpay_signature
      });

      // Verify signature
      if (generated_signature === razorpay_signature) {
        console.log("Signature verification successful");
        
        // Update order status in database with payment ID
        const { error } = await supabase
          .from('orders')
          .update({ 
            payment_status: 'completed',
            payment_id: razorpay_payment_id // Store the actual payment ID
          })
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

        console.log("Order status updated to completed with payment ID:", razorpay_payment_id);

        return new Response(
          JSON.stringify({ success: true, status: 'completed' }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200,
          },
        );
      } else {
        console.error("Signature verification failed");
        
        // Update order status to failed if signature verification fails
        await supabase
          .from('orders')
          .update({ payment_status: 'failed' })
          .eq('payment_id', razorpay_order_id);
        
        return new Response(
          JSON.stringify({ 
            error: 'Payment verification failed',
            details: 'Invalid signature',
            status: 'failed'
          }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 400,
          },
        );
      }
    } catch (verificationError) {
      console.error("Verification process error:", verificationError);
      return new Response(
        JSON.stringify({ 
          error: "Verification process failed",
          details: verificationError.message || "Unknown verification error",
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
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
});
