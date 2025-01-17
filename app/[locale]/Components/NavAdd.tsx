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
  const [isVisible, setIsVisible] = useState(false);

  // const handleClick = () => {
  //   if (query.length > 0) {
  //     router.push(`/store/?search=${query}`);
  //   } else {
  //     router.push(`/store`);
  //   }

  //   setQuery("");
  // };

  const onBurgerClick = () => {
    setIsVisible(!isVisible);
  };
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
      {isVisible && <Menu setIsVisible={setIsVisible} />}
      <div className="relative">
        <div className="flex gap-2 items-center">
          <GiHamburgerMenu
            className="text-3xl lg:hidden font-bold"
            onClick={onBurgerClick}
          />
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
        </div>
        <p className="absolute top-5 right-1 text-zinc-600">eCommerce</p>
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
    <div className="bg-[#E5E5E5] w-full h-[100vh] absolute z-20 left-0 top-0 lg:hidden pt-20 flex flex-col items-center">
      <IoIosCloseCircle
        className="absolute top-3 right-7 text-2xl cursor-pointer text-[#FCA311]"
        onClick={onClose}
      />
      <h3 className="text-[#14213D] text-4xl font-bold  pb-10">
        {t("menu")}
      </h3>
      {MenuItems.map((menuItem, index) => (
        <div className="flex flex-col items-center w-full" key={index}>
          <Link
            href={menuItem.link}
            className="text-[#14213D] pb-5 max-md:pb-2 text-3xl hover:underline"
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
