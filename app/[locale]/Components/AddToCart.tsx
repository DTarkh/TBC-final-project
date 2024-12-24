"use server";

import { createClient } from "@/utils/supabase/server";
import Stripe from "stripe"

const AddToCart = (productId: any) => {
  async function AddProduct(formData: FormData) {
    "use server";

    const supabase = await createClient();
    const user = await supabase.auth.getUser();


    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    
    
    // const stripeProduct = await stripe.products.create({
    //   name: productName,
    // })

    // const stripePrice = await stripe.prices.create({
    //   product: stripeProduct.id,
    //   unit_amount: productPrice,
    //   currency: "usd",
    // })



    const { data, error } = await supabase
      .from("cart")
      .insert({
        product_id: productId.productId,
        user_id: user.data.user?.id,
        stripe_product_id: "efr",
        stripe_price_id: "rgrg",
      })
      .single();

    console.log(user.data.user?.id);
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
