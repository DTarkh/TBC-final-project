"use client";

import { Link } from "@/i18n/routing";
import { GiHolosphere, GiHamburgerMenu } from "react-icons/gi";
import { useTranslations } from "next-intl";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import Cart from "@/app/[locale]/Components/Cart";
import Profile from "@/app/[locale]/Components/Profile";
import Search from "./Search";
import DarkModeSwitcher from "./DarkModeSwitcher";
import LanguageSwitch from "./LanguageSwitch";
import { MdStarBorderPurple500 } from "react-icons/md";
import useUsersS from "../../Components/Hooks/useUserS";
import { User } from "../../Components/Hooks/useUserS";
import useUser from "../../Components/Hooks/useUser";

const NavAdd = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { users, loading, error } = useUsersS();
  const loggedInUser = useUser();
  const currentUser = users?.filter(
    (user) => user.user_id === loggedInUser.user?.id
  );

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
            className="text-3xl lg:hidden font-bold dark:text-[#E5E5E5] hover:scale-110 transition-transform duration-300 cursor-pointer"
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
        <p className="absolute top-5 right-1 text-zinc-600 dark:text-[#E5E5E5]">
          eCommerce
        </p>
        {currentUser?.map((user: User) =>
          user.issubscribed ? (
            <MdStarBorderPurple500
              key={user.user_id}
              className="absolute text-[#FCA311] top-0 -right-3"
            />
          ) : null
        )}
      </div>
      <Search />
      <div className="flex items-center gap-2 justify-between">
        <Profile classNames={"max-lg:hidden"} />
        <Cart />
      </div>
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
    setVisible(false);
    setTimeout(() => setIsVisible(false), 1000);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        onClose();
        // Close the menu if the screen width exceeds 768px
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <div
      className={`bg-[#E5E5E5] dark:bg-[#14213D] w-full h-[100vh] fixed z-50 left-0 top-0 pt-10 flex flex-col items-center transition-transform duration-1000 ease-in-out ${
        visible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <IoIosCloseCircle
        className="absolute top-3 right-7 text-2xl cursor-pointer text-[#FCA311]"
        onClick={onClose}
      />
      <div className="absolute top-[6vh] right-[15px] flex items-center">
        <LanguageSwitch />
        <DarkModeSwitcher />
      </div>

      <h3 className="text-[#14213D] dark:text-[#E5E5E5] text-4xl font-bold pt-[85px] pb-10">
        {t("menu")}
      </h3>

      {MenuItems.map((menuItem, index) => (
        <div
          className="group flex flex-col items-center w-full space-y-3 p-4 transition-transform transform hover:scale-105"
          key={index}
        >
          <Link
            href={menuItem.link}
            className="text-[#14213D] dark:text-[#E5E5E5] text-3xl font-semibold tracking-wide  transition-colors duration-200"
            onClick={onClose}
          >
            {menuItem.text}
          </Link>
          <div className="w-full h-[2px] bg-gradient-to-r from-[#14213D] via-[#FCA311] to-[#14213D] group-hover:via-[#FCA311] transition-all duration-300"></div>
        </div>
      ))}
      <div className="absolute top-[50px] left-[10px]">
        <Profile onClose={onClose} />
      </div>
    </div>
  );
};
