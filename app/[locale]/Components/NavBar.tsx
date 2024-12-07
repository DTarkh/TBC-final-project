'use client'

import { Link } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import classNames from "classnames"
import Toggle from "../Components/Toggle"



const NavBar = () => {
  const currentPath = usePathname()
  

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
            'text-bg-[#14213D]': link.href !== currentPath,
            'text-[#FCA311]': link.href === currentPath,
            'text-lg font-medium' : true
          })}>
            {link.name}
          </Link>
        ))}
      </ul>
      <Toggle />
    </nav>
  );
};

export default NavBar;
