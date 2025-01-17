"use client";

import { Link } from "@/i18n/routing";
import { GiHolosphere } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Burger from "./Burger";
import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import Cart from "@/app/[locale]/Components/Cart";
import Profile from "@/app/[locale]/Components/Profile";
import { useTranslations } from "next-intl";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import Search from "../Components/Search";

const NavAdd = () => {
  // const router = useRouter();
  // const [query, setQuery] = useState<string>("");
  const t = useTranslations("Navigation");
  const [isVisible, setIsVisible] = useState(false)

  // const handleClick = () => {
  //   if (query.length > 0) {
  //     router.push(`/store/?search=${query}`);
  //   } else {
  //     router.push(`/store`);
  //   }

  //   setQuery("");
  // };

  const onBurgerClick =() =>{

    setIsVisible(!isVisible)
  }
   // Add/remove `no-scroll` class when `isVisible` changes
   useEffect(() => {
    if (isVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup in case the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isVisible]);

  return (
    <nav className="w-full flex  space-x-6 items-center max-sm:px-[2%]  px-[10%] py-2 justify-between bg-[#E5E5E5] dark:bg-[#14213D]">
      {isVisible && <Menu setIsVisible={setIsVisible}/>}
      <div className="w-full flex gap-2 items-center">
      <GiHamburgerMenu className="text-3xl lg:hidden font-bold" onClick={onBurgerClick}/>
        <Link
          href="/home"
          className="flex items-center gap-1 font-bold text-2xl text-[#14213D] dark:text-[#E5E5E5]"
        >
          <GiHolosphere className="text-3xl text-red-700" />
          SPHERE.
        </Link>

        {/* <div className="relative w-full max-w-full">
          <span className="absolute top-[10px] right-3 flex items-center text-gray-500">
            <CiSearch
              size={27}
              className="hover:cursor-pointer max-lg:hidden"
              onClick={handleClick}
            />
          </span>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder={t("search")}
            className="input w-full max-w-full max-lg:hidden border-[#14213D]"
          />
        </div> */}
        <Search />
      </div>
      <div className="flex items-center gap-2 justify-between">
        <Profile />
        <Cart />
      </div>
      <Burger />
    </nav>
  );
};

export default NavAdd;


const Menu = ({ setIsVisible }: { setIsVisible: (isVisible: boolean) => void }) => {
  const t = useTranslations("Footer");
  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="bg-red-600 w-full h-[100vh] absolute z-20 left-0 top-0 lg:hidden p-11 flex flex-col items-center">
      <IoIosCloseCircle
        className="absolute top-3 right-7 text-2xl cursor-pointer"
        onClick={onClose}
      />
      <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-6 max-md:pb-4">
            {t("menu")}
          </h3>
          <ul className="flex flex-col">
            <Link
              href="/home"
              className="dark:text-[#FFFFFF] text-[#14213D] pb-5 max-md:pb-2"
              onClick={onClose}
            >
              {t("home")}
            </Link>
            <Link
              href="/store"
              className="dark:text-[#FFFFFF] text-[#14213D] pb-5 max-md:pb-2"
              onClick={onClose}
            >
              {t("store")}
            </Link>
            <Link
              href="/blog"
              className="dark:text-[#FFFFFF] text-[#14213D] pb-5 max-md:pb-2"
              onClick={onClose}
            >
              {t("blog")}
            </Link>
            <Link
              href="/about"
              className="dark:text-[#FFFFFF] text-[#14213D] pb-5 max-md:pb-2"
              onClick={onClose}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="dark:text-[#FFFFFF] text-[#14213D] pb-5 max-md:pb-2"
              onClick={onClose}
            >
              {t("contact")}
            </Link>
          </ul>
    </div>
  );
};