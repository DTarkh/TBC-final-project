"use client";

import { Link } from "@/i18n/routing";
import { GiHolosphere } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Burger from "./Burger";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import Cart from "@/app/[locale]/Components/Cart";
import Profile from "@/app/[locale]/Components/Profile";
import { useTranslations } from "next-intl";

const NavAdd = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const t = useTranslations("Navigation");

  const handleClick = () => {
    if (query.length > 0) {
      router.push(`/store/?search=${query}`);
    } else {
      router.push(`/store`);
    }

    setQuery("");
  };

  return (
    <nav className="w-full flex  space-x-6 items-center max-sm:px-[2%]   px-[10%] py-2 justify-between bg-[#E5E5E5] dark:bg-[#14213D]">
      <Link
        href="/home"
        className="flex items-center gap-1 font-bold text-2xl text-[#14213D] dark:text-[#E5E5E5]"
      >
        <GiHolosphere className="text-3xl text-red-700" />
        SPHERE.
      </Link>

      <div className="relative w-full max-w-full">
        <span className="absolute top-[10px] right-3 flex items-center text-gray-500">
          <CiSearch
            size={27}
            className="max-lg:hidden hover:cursor-pointer"
            onClick={handleClick}
          />
        </span>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder={t("search")}
          className="input w-full max-w-full  max-lg:hidden border-[#14213D]"
        />
      </div>
      <div className="flex items-center gap-2">
        <Profile />
        <Cart />
      </div>
      <Burger />
    </nav>
  );
};

export default NavAdd;
