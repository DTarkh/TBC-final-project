'use client'

import { useState, useEffect } from "react";

interface Cart {
  stripe_product_id: string;
}

const useCart = () => {
  const [priceId, setPriceId] = useState<string | null>(null); // Initializing with a type

  useEffect(() => {
    // Log to check if useEffect is triggered
    console.log("useEffect triggered");

    fetch('http://localhost:3000/api/cart')
      .then(response => response.json())
      .then(cart => {
        console.log(cart);  // This logs the cart data returned from the API
        setPriceId(cart.stripe_product_id); // Update state with fetched data (modify as needed)
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });

  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return priceId;
  
}

export default useCart;
