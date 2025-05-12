"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import LanguageSwitch from "./LanguageSwitch";
import DarkModeSwitcher from "./DarkModeSwitcher";
import Profile from "../Profile";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const SideBar = ({
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

export default SideBar;
