"use client";

import Navbar from "../Components/NavBar";
import NavAdd from "../Components/NavAdd";
import Footer from "../Components/Footer";




type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
 


  return (
    <>
      <NavAdd /> 
      <Navbar />
      <main className="bg-[#E5E5E5]  flex flex-col justify-center items-center dark:bg-[#14213D] relative min-h-[50vh] pb-[10vh]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
