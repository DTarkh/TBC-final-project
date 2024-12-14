"use client"; // If using app directory

import { useEffect, useState } from "react";

interface CartItem {
  id: number;
  cart: number;
  product: Product;
  quantity: number;
  total: number;
}

interface Cart {
  id: number;
  user: number;
  items: CartItem[];
}
interface Product {
  id: number;
  title: string;
  thumbnail: string;
}



const useCart = () => {
    const [cart, setCart] = useState<Cart | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");

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

    return {cart, error}
}

export default useCart;