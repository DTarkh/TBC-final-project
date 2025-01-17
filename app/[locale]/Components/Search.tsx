"use client";

import { useRouter } from "@/i18n/routing";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useTranslations } from "next-intl";
const Search = () => {
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
    <div className="relative w-full max-w-full z-60">
      <span className="absolute top-[10px] right-3 flex items-center text-gray-500">
        <CiSearch
          size={27}
          className="hover:cursor-pointer"
          onClick={handleClick}
        />
      </span>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder={t("search")}
        className="input w-full max-w-full  border-[#14213D]"
      />
    </div>
  );
};

export default Search;
