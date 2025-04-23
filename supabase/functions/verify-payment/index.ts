
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
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = await req.json();
    
    console.log("Verifying payment:", { razorpay_payment_id, razorpay_order_id });
    
    // Create signature
    const secret = Deno.env.get('RAZORPAY_KEY_SECRET') || '';
    const hmac = createHmac("sha256", secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generated_signature = hmac.digest("hex");

    // Verify signature
    if (generated_signature === razorpay_signature) {
      console.log("Signature verification successful");
      
      // Update order status in database
      const { error } = await supabase
        .from('orders')
        .update({ payment_status: 'completed' })
        .eq('payment_id', razorpay_order_id);

      if (error) {
        console.error("Database error:", error);
        throw error;
      }

      console.log("Order status updated to completed");

      return new Response(
        JSON.stringify({ success: true }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      );
    } else {
      console.error("Signature verification failed");
      throw new Error('Payment verification failed');
    }
  } catch (error) {
    console.error("Function error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    );
  }
});
