"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import LanguageSwitch from "./LanguageSwitch";
import DarkModeSwitcher from "./DarkModeSwitcher";
import Profile from "../Profile";
import { Link } from "@/i18n/routing";

const SideBar = ({
  setIsVisible,
}: {
  setIsVisible: (isVisible: boolean) => void;
}) => {
  const t = useTranslations("Footer");
  const [visible, setVisible] = useState(false);

  const MenuItems = [
    { link: "/home", text: t("home") },
    { link: "/store", text: t("store") },
    { link: "/blog", text: t("blog") },
    { link: "/about", text: t("about") },
    { link: "/contact", text: t("contact") },
  ];

  const onClose = () => {
    setVisible(false);
    setTimeout(() => setIsVisible(false), 500); // Match your transition time
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) onClose();
    };

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  useEffect(() => {
    setVisible(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={`bg-[#E5E5E5] dark:bg-[#14213D] w-full h-[100vh] fixed z-50 left-0 top-0 flex flex-col transition-transform duration-500 ease-in-out ${
        visible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300 dark:border-gray-700">
        <h2 className="text-[#14213D] dark:text-white text-2xl font-bold">
          {t("menu")}
        </h2>
        <button
          onClick={onClose}
          className="text-[#FCA311] text-3xl"
          aria-label="Close menu"
        >
          <IoIosCloseCircle />
        </button>
      </div>

      {/* Profile */}
      <div className="px-6 py-4 border-b border-gray-300 dark:border-gray-700">
        <Profile onClose={onClose} />
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto px-6 py-4">
        <ul className="space-y-4">
          {MenuItems.map((item, index) => (
            <li key={index} className="group">
              <Link
                href={item.link}
                onClick={onClose}
                className="block text-2xl font-semibold text-[#14213D] dark:text-white hover:scale-105 transition-transform duration-200"
              >
                {item.text}
              </Link>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#FCA311] via-[#14213D] to-[#14213D] mt-1 transition-all duration-300" />
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-300 dark:border-gray-700 flex items-center justify-between">
        <div className="flex gap-4">
          <LanguageSwitch classNames="ml-2" position="top"/>
          <DarkModeSwitcher />
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">© 2024</span>
      </div>
    </div>
  );
};

export default SideBar;