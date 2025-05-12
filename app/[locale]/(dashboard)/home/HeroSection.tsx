'use client'

import { useTranslations } from "next-intl";
import ShopButton from "../../Components/ShopButton";
import Image from "next/image";
import image from "@/public/images/cart.jpg";
import { motion } from "framer-motion";


const HeroSection = () => {
    const t = useTranslations("HomePage");
    return (
      <div className="flex max-md:flex-col  w-full">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-1/2 max-md:w-full  flex flex-col gap-4 items-start">
          <h1 className=" text-[#14213D] dark:text-[#FCA311] text-8xl font-extrabold tracking-tighter drop-shadow-md">
            {t("heading")}
          </h1>
          <h2 className="  text-[#FCA311] dark:text-[#E5E5E5] text-5xl font-bold whitespace-pre-wrap drop-shadow-md">
            {t("description")}
          </h2>
          <div className="badge badge-outline dark:border-[#FCA311] text-[#14213D] my-4 p-4 font-medium bg-[#FCA311] whitespace-nowrap z-20">
            {t("badge")}
          </div>
  
          <ShopButton />
        </motion.div>
  
        <motion.div 
        initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 md:mt-0 w-1/2  max-md:w-full flex justify-center md:justify-end">
          <Image
            src={image}
            alt="Product Showcase"
            width={700}
            height={800}
            className="w-full min-h-[40vh]  rounded-lg shadow-lg object-cover "
          />
        </motion.div>
      </div>
    );
  };
  
  export default HeroSection;