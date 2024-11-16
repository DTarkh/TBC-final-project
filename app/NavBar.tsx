import Link from "next/link";
import { PiBugBeetleDuotone } from "react-icons/pi";

const NavBar = () => {
  const links = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex space-x-6 items-center border-b h-16 px-[10%]">
      <Link href="/"><PiBugBeetleDuotone className="text-3xl"/></Link>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} 
          className="text-slate-800 hover:text-lime-600 transition-colors">
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
