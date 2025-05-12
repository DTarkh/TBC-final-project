"use client";

import { Link } from "@/i18n/routing";
import { GiHolosphere, GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import Cart from "@/app/[locale]/Components/Cart";
import Profile from "@/app/[locale]/Components/Profile";
import Search from "./Search";
import { MdStarBorderPurple500 } from "react-icons/md";
import useUsersS from "../../Components/Hooks/useUserS";
import { User } from "../../Components/Hooks/useUserS";
import useUser from "../../Components/Hooks/useUser";
import SideBar from "./SideBar";

const NavAdd = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { users, loading, error } = useUsersS();
  const loggedInUser = useUser();
  const currentUser = users?.filter(
    (user) => user.user_id === loggedInUser.user?.id
  );

  const onBurgerClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isVisible]);

  return (
    <nav className="w-full flex  space-x-6 items-center max-sm:px-[2%]  px-[10%] py-2 justify-between bg-[#E5E5E5] dark:bg-[#14213D]">
      {isVisible && <SideBar setIsVisible={setIsVisible} />}
      <div className="relative">
        <div className="flex gap-2 items-center">
          <GiHamburgerMenu
            className="text-3xl lg:hidden font-bold dark:text-[#E5E5E5] hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={onBurgerClick}
          />
          <Link
            href="/home"
            className="flex items-center gap-1 font-bold text-2xl text-[#14213D] dark:text-[#E5E5E5]"
          >
            <GiHolosphere className="text-3xl text-red-700" />
            SPHERE.
          </Link>
        </div>
        <p className="absolute top-5 right-1 text-zinc-600 dark:text-[#E5E5E5]">
          eCommerce
        </p>
        {currentUser?.map((user: User) =>
          user.issubscribed ? (
            <MdStarBorderPurple500
              key={user.user_id}
              className="absolute text-[#FCA311] top-0 -right-3"
            />
          ) : null
        )}
      </div>
      <Search />
      <div className="flex items-center gap-2 justify-between">
        <Profile classNames={"max-lg:hidden"} />
        <Cart />
      </div>
    </nav>
  );
};

export default NavAdd;
