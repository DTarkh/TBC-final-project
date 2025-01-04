"use client";

import Navbar from "../Components/NavBar";
import NavAdd from "../Components/NavAdd";
import Footer from "../Components/Footer";
import useCart from "../Components/Hooks/useCart";
import { useEffect, useState } from "react";
import { CartItemsContext } from "../Components/Contexts/CartItemsContext";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { cart } = useCart();
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = cart.reduce(
        (total, item) => total + item.products.price * item.quantity,
        0
      );
      setCartItemsNumber(totalItems);
      setTotalPrice(totalAmount);
    } else {
      setCartItemsNumber(0);
      setTotalPrice(0);
    }
  }, [cart]);

  return (
    <CartItemsContext.Provider
      value={{ cartItemsNumber, totalPrice, setCartItemsNumber,setTotalPrice }}
    >
      <NavAdd />
      <Navbar />
      <main className="bg-[#E5E5E5] flex flex-col justify-center items-center dark:bg-[#14213D] relative min-h-[50vh] pb-[10vh]">
        {children}
      </main>
      <Footer />
    </CartItemsContext.Provider>
  );
};

export default Layout;