import { Link } from "@/i18n/routing";
import { GiHolosphere } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import Burger from "./Burger";

const NavAdd = () => {
  return (
    <nav className="w-full flex  space-x-6 items-center  px-[10%] py-2 justify-between">
        
      <Link
        href="/home"
        className="flex items-center gap-1 font-bold text-2xl text-[#14213D]"
      >
        <GiHolosphere className="text-3xl text-red-700" />
        SPHERE.
      </Link>
     
      <div className="relative w-full max-w-full">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
        <CiSearch size={20} className="max-lg:hidden" />
      </span>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-full pl-10 max-lg:hidden border-[#14213D]"
      />
    </div>
    




      <div className="flex items-center max-lg:hidden">
        <GoPerson className="text-5xl mx-2 text-[#14213D]" />
        <div>
        <p className="text-slate-500 text-sm">Welcome</p>
        <h2 className="whitespace-nowrap text-[#14213D]">Login / Register</h2>
        </div>
      </div>

      <div className="flex items-center max-lg:hidden">
      <SlHandbag className="text-5xl mx-2 text-[#14213D]" />
        <div>
        <p className="text-slate-500 text-sm whitespace-nowrap">Shopping Cart</p>
        <h2 className="whitespace-nowrap text-lime-700 font-bold">$0.00</h2>
        </div>
      </div>
      <Burger/>
    </nav>
  );
};

export default NavAdd;