"use client"; // If using app directory

import { useEffect, useState } from "react";

interface CartItem {
  id: number;
  cart: number;
  product: string;
  quantity: number;
  total: number;
}

interface Cart {
  id: number;
  user: number;
  items: CartItem[];
}

const Page = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token")
      

      try {
        const response = await fetch("http://127.0.0.1:8000/orders/cart/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }

        const data = await response.json();
        setCart(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "An unexpected error occurred.");
      }
    };

    fetchCart();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Cart</h1>
      {cart.items.length > 0 ? (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              <p>Product: {item.product}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.total.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Page;