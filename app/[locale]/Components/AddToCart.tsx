"use server";

import { createClient } from "@/utils/supabase/server";
import Stripe from "stripe"

interface AddToCartProps {
  productId: number;
  productName: string;
  productPrice: number;
}

const AddToCart = ({ productId, productName, productPrice }: AddToCartProps) => {
  async function AddProduct(formData: FormData) {
    "use server";

    const supabase = await createClient();
    const user = await supabase.auth.getUser();


    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    
    
    const stripeProduct = await stripe.products.create({
      name: productName,
    })

    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: Math.round(productPrice * 100), 
      currency: "usd",
    })



    const { data, error } = await supabase
      .from("cart")
      .insert({
        product_id: productId,
        user_id: user.data.user?.id,
        stripe_product_id: stripeProduct.id,
        stripe_price_id: stripePrice.id,
      })
      .single();

      console.log(productId);
    // console.log(user.data.user?.id);
    console.log("data", data, "error", error);
  }

  return (
    <form action={AddProduct}>
      <button className="w-full" type="submit">
        Add to Cart
      </button>
    </form>
  );
};

export default AddToCart;
