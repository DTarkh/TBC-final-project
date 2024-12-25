import Stripe from "stripe";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";





interface CartItem {
  stripe_price_id: string;
}

const Checkout = () => {
  const onCheckout = async () => {
    'use server'
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
      const supabase = await createClient();

      // 1. Fetch `stripe_price_id` from Supabase `cart` table
      const { data: cartItems, error } = await supabase
        .from("cart")
        .select("stripe_price_id");

      if (error) {
        console.error("Error fetching cart items:", error.message);
        return;
      }

      if (!cartItems || cartItems.length === 0) {
        console.error("No items in the cart.");
        return;
      }

      // 2. Map cart items to line items
      const lineItems = cartItems.map((item: CartItem) => ({
        price: item.stripe_price_id, // Stripe price ID
        quantity: 1, // Default quantity, can be dynamic
      }));

      // 3. Create a payment link
      const paymentLink = await stripe.paymentLinks.create({
        line_items: lineItems,
      });

      console.log("Payment Link created:", paymentLink.url);

      // 4. Redirect user to the payment link

   
      window.location.href = paymentLink.url
      
      
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <form action={onCheckout}>
       
  
      <button className="btn btn-success">Checkout</button>

    </form>
  );
};

export default Checkout;
