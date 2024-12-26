'use client'

import { useState, useEffect } from "react";

interface CartItem {
  id: number;
  created_at: string;
  product_id: number;
  user_id: string;
  stripe_product_id: string;
  stripe_price_id: string;
  products: Product;
  quantity: number;
}

interface Product {
  title_en: string;
  thumbnail: string;
  price: number;
}


const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(); // Initializing with a type

  useEffect(() => {
  

    fetch('http://localhost:3000/api/cart')
      .then(response => response.json())
      .then(cart => {
        console.log(cart);  // This logs the cart data returned from the API
        setCart(cart); // Update state with fetched data (modify as needed)
        
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });

  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return { cart, setCart }
  
}

export default useCart;
