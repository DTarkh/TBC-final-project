"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface Props {
  classNames?: string;
  position?: "top" | "bottom"; // controls dropdown direction
}

const LanguageSwitch = ({ classNames = "", position = "bottom" }: Props) => {
  const router = useRouter();
  const path = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState(
    path.includes("en") ? "en" : "ka"
  );
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    const newPath = path.replace(currentLanguage, lang);
    startTransition(() => {
      router.replace(newPath);
    });
  };

  // position classes
  const positionClass =
    position === "top" ? "dropdown-top" : "dropdown-bottom";

  return (
    <div className={`dropdown dropdown-hover ${positionClass} ${classNames}`}>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost w-14 mx-2 rounded-xl dark:text-[#E5E5E5] text-[#14213D]"
      >
        {currentLanguage.toUpperCase()}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-22 p-2 shadow"
      >
        <li>
          <a onClick={() => toggleLanguage("en")}>ENG</a>
        </li>
        <li>
          <a onClick={() => toggleLanguage("ka")}>ქარ</a>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitch;