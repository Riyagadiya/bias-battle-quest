
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";
import * as crypto from "https://deno.land/std@0.177.0/crypto/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Helper function to create HMAC
function createHmac(key: string, message: string): string {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(key);
  const messageData = encoder.encode(message);
  
  const hmacKey = crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  
  return hmacKey.then(key => {
    return crypto.subtle.sign(
      "HMAC",
      key,
      messageData
    );
  }).then(signature => {
    return Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  });
}

serve(async (req) => {
  console.log("Verify payment function called");
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Processing payment verification request");
    
    // Parse request body
    let requestData;
    try {
      requestData = await req.json();
      console.log("Request data:", JSON.stringify(requestData));
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
    
    // Get signature verification key
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
      // Generate the expected signature
      const payload = razorpay_order_id + "|" + razorpay_payment_id;
      const generated_signature = await createHmac(secret, payload);
      
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
