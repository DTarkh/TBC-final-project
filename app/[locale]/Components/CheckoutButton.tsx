"use client";

import { CartItem } from "@/app/[locale]/Components/Hooks/useCart"

interface Props {
    cart: CartItem[];
  }
const CheckoutButton= ({cart}: Props) => {

  const transformCartToLineItems = () =>
    cart.map((item) => {
      if (!item.products.title_en || !item.products.price) {
        console.error("Invalid item data: ", item);
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.products.title_en,
            images: item.products.thumbnail? [item.products.thumbnail] : [],
          },
          unit_amount: Math.round(item.products.price * 100), // Convert price to cents
        },
        quantity: item.quantity,
      };
    });

  const handleCheckout = async () => {
    const lineItems = transformCartToLineItems();

    const invalidItems = lineItems.filter(
      (item) =>
        !item.quantity || !item.price_data || !item.price_data.unit_amount
    );
    if (invalidItems.length > 0) {
      console.log("Invalid line items:", invalidItems);
      alert("One or more items are incomplete. Please review your cart.");
      return;
    }

    console.log("Valid Line Items to Send:", JSON.stringify(lineItems));

    const res = await fetch("/api/stripe/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lineItems }),
    });

    if (!res.ok) {
      throw new Error("Failed to create Stripe Checkout session.");
    }

    const { url } = await res.json();

    if (url) {
      window.location.href = url;
    } else {
      console.error("No URL returned from API.");
    }
    window.location.href = url;
  };

  return (
    <button
      onClick={handleCheckout}
      className="btn btn-success"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
