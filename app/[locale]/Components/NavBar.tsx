"use client";

import { Link, usePathname } from "@/i18n/routing";
import classNames from "classnames";
import DarkMode2 from "../Components/DarkMode2";
import LanguageSwitch from "../Components/LanguageSwitch";
import { useTranslations } from "next-intl";
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  const links = [
    { name: "Home", href: "/home" },
    { name: "Store", href: "/store" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full flex  px-[10%] justify-between max-sm:hidden bg-[#E5E5E5] dark:bg-[#14213D]">
      <NavLinks />
      <div className="flex">
        <LanguageSwitch />
        <DarkMode2 />
      </div>
    </nav>
  );
};

export default NavBar;

const NavLinks = () => {
  return (
    <div className="flex items-center">
      <NavRestLinks />
    </div>
  );
};

const HomeLink = () => {
  const currentPath = usePathname();
  const t = useTranslations("Navigation");

  return (
    <Link
      href="/home"
      className={`${
        currentPath === "/home"
          ? "text-[#FCA311] text-lg font-medium pr-4"
          : "text-gray-800 dark:text-[#E5E5E5] text-lg font-medium pr-4"
      }`}
    >
      {t("home")}
    </Link>
  );
};

const NavStoreLink = () => {
  const currentPath = usePathname();
  const t = useTranslations("Navigation");

  return (
    <div className="dropdown dropdown-hover">
      <Link
        href="/store"
        tabIndex={0}
        role="button"
        className={`${
          currentPath === "/store"
            ? "text-[#FCA311] text-lg font-medium pr-4"
            : "text-gray-800 dark:text-[#E5E5E5] text-lg font-medium pr-4"
        }`}
      >
        {t("store")}
      </Link>
      <div className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-[#E5E5E5]">
        <h3 className="text-lg font-semibold">Categories:</h3>
        <ul>{/* <CategoriesList /> */}</ul>
      </div>
    </div>
  );
};
const NavRestLinks = () => {
  const currentPath = usePathname();
  const t = useTranslations("Navigation");
  const links = [
    { name: t("home"), href: "/home" },
    { name: t("store"), href: "/store" },
    { name: t("blog"), href: "/blog" },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/contact" },
  ];
  return (
    <ul className="flex space-x-4 max-lg:hidden">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={classNames({
            "text-bg-[#14213D] dark:text-[#E5E5E5]": link.href !== currentPath,
            "text-[#FCA311]": link.href === currentPath,
            "text-lg font-medium whitespace-nowrap": true,
          })}
        >
          {link.name}
        </Link>
      ))}
    </ul>
  );
};
