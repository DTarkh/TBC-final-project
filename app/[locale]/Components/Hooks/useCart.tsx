'use client'

import { useState, useEffect } from "react";

interface CartItem {
  stripe_price_id: string;
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

  return cart
  
}

export default useCart;
