"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import classNames from "classnames";
import Toggle from "../Components/Toggle";
import Cart from "../Components/Cart";
import Profile from "../Components/Profile";
import { CategoriesList } from "../(dashboard)/store/page";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { name: "Home", href: "/home" },
    { name: "Store", href: "/store" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full flex  space-x-6 items-center  px-[10%] py-2 justify-between max-sm:hidden bg-[#E5E5E5]">
      <ul className="flex space-x-4 max-sm:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-bg-[#14213D]": link.href !== currentPath,
              "text-[#FCA311]": link.href === currentPath,
              "text-lg font-medium": true,
            })}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <div className="flex items-center">
        <NavLinks />
        <Toggle />
      </div>
    </nav>
  );
};

export default NavBar;

const NavStoreLink = () => {
  const currentPath = usePathname();

  return (
    <div className="dropdown dropdown-hover">
      <Link
        href="/store"
        tabIndex={0}
        role="button"
        className={`${
          currentPath === "/store" ? "text-[#FCA311] text-lg font-medium" : "text-gray-800 text-lg font-medium"
        }`}
      >
        Store
      </Link>
      <div className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-[#E5E5E5]">
        <h3 className="text-lg font-semibold">Categories:</h3>
        <ul>
          <CategoriesList />
        </ul>
      </div>
    </div>
  );
};


const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { name: "Home", href: "/home" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex items-center">
      <NavStoreLink />
      <ul className="flex space-x-4 max-sm:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-bg-[#14213D]": link.href !== currentPath,
              "text-[#FCA311]": link.href === currentPath,
              "text-lg font-medium": true,
            })}
          >
            {link.name}
          </Link>
        ))}
      </ul>

    </div>
  )


}
