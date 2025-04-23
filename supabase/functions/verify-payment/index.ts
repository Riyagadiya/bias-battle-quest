
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Razorpay from "npm:razorpay@2.9.2";
import * as crypto from "https://deno.land/std@0.177.0/crypto/mod.ts";

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
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = await req.json();

    const generated_signature = crypto
      .createHmac('sha256', Deno.env.get('RAZORPAY_KEY_SECRET')!)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest('hex');

    if (generated_signature === razorpay_signature) {
      // Update order status in database
      const { error } = await supabase
        .from('orders')
        .update({ payment_status: 'completed' })
        .eq('payment_id', razorpay_order_id);

      if (error) throw error;

      return new Response(
        JSON.stringify({ success: true }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      );
    } else {
      throw new Error('Payment verification failed');
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    );
  }
});
