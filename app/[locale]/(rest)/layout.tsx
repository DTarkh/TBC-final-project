"use client";

import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";



type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
 


  return (
    <>
      <Navbar />
      <main className="bg-[#E5E5E5] flex flex-col justify-center items-center dark:bg-[#14213D] relative ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
