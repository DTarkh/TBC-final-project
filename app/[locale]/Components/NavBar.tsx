'use client'

import { Link } from "@/i18n/routing";
import { SiMicrosoftstore } from "react-icons/si";
import { usePathname } from "next/navigation";
import classNames from "classNames"
import { RxHamburgerMenu } from "react-icons/rx";
const NavBar = () => {
  const currentPath = usePathname()

  const links = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex space-x-6 items-center border-b h-16 px-[10%]">
      
      <Link href="/"><SiMicrosoftstore className="text-3xl text-red-700"/></Link>
      <ul className="flex space-x-4 max-sm:hidden">
        {links.map((link) => (
          <Link 
          key={link.href} 
          href={link.href} 
          className={classNames({
            'text-slate-800' :link.href === currentPath,
            'text-slate-500' :link.href !== currentPath,
            'text-slate-500 transition-colors' : true
          })}>
            {link.name}
          </Link>
        ))}
      </ul>
      <RxHamburgerMenu className="sm:hidden"/>
    </nav>
  );
};

export default NavBar;
