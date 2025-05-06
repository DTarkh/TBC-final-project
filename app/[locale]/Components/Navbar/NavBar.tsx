"use client";

import { Link, usePathname } from "@/i18n/routing";
import classNames from "classnames";
import DarkModeSwitcher from "./DarkModeSwitcher";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslations } from "next-intl";

const NavBar = () => {
  return (
    <nav className="w-full flex  px-[10%] justify-between max-sm:hidden bg-[#E5E5E5] dark:bg-[#14213D]">
      <NavRestLinks />
      <div className="flex">
        <LanguageSwitch classNames={"max-lg:hidden"} />
        <DarkModeSwitcher classNames={"max-lg:hidden"} />
      </div>
    </nav>
  );
};

export default NavBar;

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
    <ul className="flex space-x-4 max-lg:hidden items-center">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={classNames({
            "text-bg-[#14213D] dark:text-[#E5E5E5]": link.href !== currentPath,
            "text-[#FCA311]": link.href === currentPath,
            "text-lg font-medium whitespace-nowrap text-[#14213D]": true,
          })}
        >
          {link.name}
        </Link>
      ))}
    </ul>
  );
};
