"use client";

import Navbar from "../Components/NavBar";
import NavAdd from "../Components/NavAdd";
import Footer from "../Components/Footer";
import CartItemsProvider from "../Components/Providers/CartProvider";
import { Toaster } from "react-hot-toast";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <CartItemsProvider>
      <NavAdd />
      <Navbar />
      <main className="bg-[#E5E5E5] flex flex-col justify-center items-center dark:bg-[#14213D] relative min-h-[50vh] py-[10vh] px-[10%] max-lg:px-[2%]">
        {children}
      </main>
      <Toaster position="top-center" />
      <Footer />
    </CartItemsProvider>
  );
};

export default Layout;
