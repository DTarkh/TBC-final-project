"use client";

import { Link } from "@/i18n/routing";
import { GiHolosphere, GiHamburgerMenu } from "react-icons/gi";
import { useTranslations } from "next-intl";
import { IoIosCloseCircle } from "react-icons/io";
import Burger from "./Burger";
import { useEffect, useState } from "react";
import Cart from "@/app/[locale]/Components/Cart";
import Profile from "@/app/[locale]/Components/Profile";
import Search from "../Components/Search";
import DarkMode2 from "./DarkMode2";
import LanguageSwitch from "./LanguageSwitch";

const NavAdd = () => {
  const t = useTranslations("Navigation");
  const [isVisible, setIsVisible] = useState(false);


  const onBurgerClick = () => {
    setIsVisible(!isVisible);
  };
 
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isVisible]);

  return (
    <nav className="w-full flex  space-x-6 items-center max-sm:px-[2%]  px-[10%] py-2 justify-between bg-[#E5E5E5] dark:bg-[#14213D]">
      {isVisible && <Menu setIsVisible={setIsVisible} />}
      <div className="relative">
        <div className="flex gap-2 items-center">
          <GiHamburgerMenu
            className="text-3xl lg:hidden font-bold dark:text-[#E5E5E5]"
            onClick={onBurgerClick}
          />
          <Link
            href="/home"
            className="flex items-center gap-1 font-bold text-2xl text-[#14213D] dark:text-[#E5E5E5]"
          >
            <GiHolosphere className="text-3xl text-red-700" />
            SPHERE.
          </Link>

        </div>
        <p className="absolute top-5 right-1 text-zinc-600 dark:text-[#E5E5E5]">eCommerce</p>
      </div>
      <Search />
      <div className="flex items-center gap-2 justify-between">
        <Profile />
        <Cart />
      </div>
      <Burger />
    </nav>
  );
};

export default NavAdd;

const Menu = ({
  setIsVisible,
}: {
  setIsVisible: (isVisible: boolean) => void;
}) => {
  const t = useTranslations("Footer");

  const MenuItems = [
    { link: "/home", text: t("home") },
    { link: "/store", text: t("store") },
    { link: "/blog", text: t("blog") },
    { link: "/about", text: t("about") },
    { link: "/contact", text: t("contact") },
  ];

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="bg-[#E5E5E5] dark:bg-[#14213D] w-full h-[100vh] absolute z-20 left-0 top-0 lg:hidden pt-20 flex flex-col items-center">
      <IoIosCloseCircle
        className="absolute top-3 right-7 text-2xl cursor-pointer text-[#FCA311]"
        onClick={onClose}
      />
      <LanguageSwitch/>
      <DarkMode2/>
      <h3 className="text-[#14213D] dark:text-[#E5E5E5] text-4xl font-bold  pb-10">
        {t("menu")}
      </h3>
      
      {MenuItems.map((menuItem, index) => (
        <div className="flex flex-col items-center w-full" key={index}>
          <Link
            href={menuItem.link}
            className="text-[#14213D] dark:text-[#E5E5E5] pb-5 max-md:pb-2 text-3xl hover:underline"
            onClick={onClose}
          >
            {menuItem.text}
          </Link>
          <div className="w-full h-[1px] bg-[#FCA311] my-2"></div>
        </div>
      ))}
    </div>
  );
};
