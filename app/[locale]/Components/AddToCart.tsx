"use server";

import { createClient } from "@/utils/supabase/server";

const AddToCart = (productId: any) => {
  async function AddProduct(formData: FormData) {
    "use server";

    const supabase = await createClient();
    const user = await supabase.auth.getUser();

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
