"use client";

import { createClient } from "@/utils/supabase/client";
import { useCartContext } from "./Hooks/useCartContext";
import { CartItem } from "@/app/[locale]//Components/Hooks/useCart";
import { useState } from "react";
import Alert from "./Alert";
import toast from "react-hot-toast";

interface AddToCartProps {
  productId: number;
  productName: string;
  productPrice: number;
  thumbnail: string;
}
const AddToCart = ({
  productId,
  productName,
  productPrice,
  thumbnail,
}: AddToCartProps) => {
  const { cart, setCart, setCartItemsNumber, setTotalPrice } = useCartContext();

  async function AddProduct() {
    const supabase = createClient();
    const userResponse = await supabase.auth.getUser();

    if (!userResponse.data.user) {
      // console.error("User not authenticated");
      toast.error("User not authenticated");
      

      return;
    }

    const userId = userResponse.data.user.id;

    const newProduct: CartItem = {
      id: Math.floor(Math.random() * 1000000),
      created_at: "",
      product_id: productId,
      user_id: userId,
      stripe_product_id: "",
      stripe_price_id: "",
      quantity: 1,
      products: {
        price: productPrice,
        title_en: productName,
        thumbnail: thumbnail,
      },
    };

    // Check if the product exists in the cart
    if (cart) {
      const existingCartItem = cart.find(
        (item) => item.product_id === productId
      );

      if (existingCartItem) {
        const updatedCart = cart.map((item) =>
          item.product_id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updatedCart);
        toast.success("Item Added Successfully!");
       

        // Update cart items number and total price
        const totalItems = updatedCart.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        const totalAmount = updatedCart.reduce(
          (total, item) => total + item.products.price * item.quantity,
          0
        );
        setCartItemsNumber(totalItems);
        setTotalPrice(totalAmount);

        const { error: updateError } = await supabase
          .from("cart")
          .update({ quantity: existingCartItem.quantity + 1 })
          .eq("product_id", productId)
          .eq("user_id", userId);

        if (updateError) {
          console.error("Error updating quantity:", updateError);
        }
      } else {
        const updatedCart: CartItem[] = cart
          ? [...cart, newProduct]
          : [newProduct];

        setCart(updatedCart);
        toast.success("Item Added Successfully!");
        

        const totalItems = updatedCart.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        const totalAmount = updatedCart.reduce(
          (total, item) => total + item.products.price * item.quantity,
          0
        );
        setCartItemsNumber(totalItems);
        setTotalPrice(totalAmount);

        // Insert the new product into the database
        const { error: insertError } = await supabase.from("cart").insert({
          product_id: productId,
          user_id: userId,
          stripe_product_id: "",
          stripe_price_id: "",
          quantity: 1,
        });

        if (insertError) {
          console.error("Error inserting new item:", insertError);
          toast.error("Error inserting new item");
        }
      }
    } else {
      <div>
        <h2>Cart doesnt exist!</h2>
      </div>;
    }
  }

  return (
    <div className="relative">
      <button className="w-full" type="submit" onClick={AddProduct}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
