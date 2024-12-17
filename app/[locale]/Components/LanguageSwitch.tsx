'use client';

import { usePathname } from "next/navigation";
import { useState } from "react";

const LanguageSwitch = () => {
  const path = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState(
    path.includes("eng") ? "eng" : "ka"
  );

  const toggleLanguage = (lang: any) => {
    setCurrentLanguage(lang);
    // Update the language in the URL or state management logic here
    // This might involve router.push or updating your global state
  };

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn  w-14 mx-2 rounded-xl">
        {currentLanguage.toUpperCase()}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-22 p-2 shadow"
      >
        <li>
          <a onClick={() => toggleLanguage("eng")}>ENG</a>
        </li>
        <li>
          <a onClick={() => toggleLanguage("ქარ")}>ქარ</a>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitch;