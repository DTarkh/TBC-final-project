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




}

export default useCart;