import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GiHolosphere } from "react-icons/gi";
import { Link } from "@/i18n/routing";
const Footer = () => {
  return (
    <footer className=" dark:bg-[#14213D] bg-[#E5E5E5] w-full flex-col px-[10%]">
      <div className="flex flex-wrap py-14">
        <div className="w-full  md:w-1/2 lg:w-1/4">
        
          <h2 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2 flex items-center gap-1"><GiHolosphere className="text-3xl text-red-700"/>SPHERE. </h2>
          <p className="dark:text-[#FFFFFF] text-[#14213D] pb-2 pr-7">
          Your go-to destination for the latest trends and timeless style.
          </p>
          <ul className="flex-col">
            <li className="flex items-center pb-2 dark:text-[#FFFFFF] text-[#14213D] ">
              <FaLocationArrow className="dark:text-[#FFFFFF] text-[#14213D]  text-xl mr-1"/> 
              Chem. François-Lehmann 34, 1218
            </li>
            <li className="flex items-center pb-2 dark:text-[#FFFFFF] text-[#14213D]">
              <MdOutlinePhoneIphone className="dark:text-[#FFFFFF] text-[#14213D]  text-xl  mr-1"/>
              +(995) 555 500 135
            </li>
            <li className="flex items-center pb-2 dark:text-[#FFFFFF] text-[#14213D]">
              <MdOutlineMail className="dark:text-[#FFFFFF] text-[#14213D]  text-xl  mr-1"/>
              MySphere@gmail.com
            </li>
          </ul>
        </div>
        
        <div className=" w-full  md:w-1/2 lg:w-1/4">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2">FOOTER MENU</h3>
          <ul className="flex flex-col">
            <Link href="/home" className="dark:text-[#FFFFFF] text-[#14213D]">Home</Link>
            <Link href="/store" className="dark:text-[#FFFFFF] text-[#14213D]">Store</Link>
            <Link href="/blog"  className="dark:text-[#FFFFFF] text-[#14213D]">blog</Link>
            <Link href="/about"  className="dark:text-[#FFFFFF] text-[#14213D]">About Us</Link>
            <Link href="/contact"  className="dark:text-[#FFFFFF] text-[#14213D]">Contact</Link>
          </ul>
        </div>
        <div className=" w-full   md:w-1/2 lg:w-1/4">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2">USEFUL LINKS</h3>
          <ul className="flex-col">
            <li className="dark:text-[#FFFFFF] text-[#14213D]">Privacy Policy</li>
            <li className="dark:text-[#FFFFFF] text-[#14213D]">Terms & Conditions</li>
            <li className="dark:text-[#FFFFFF] text-[#14213D]">Returns</li>
            <li className="dark:text-[#FFFFFF] text-[#14213D]">Contact Us</li>
          </ul>
        </div>
        <div className=" w-full  md:w-1/2  lg:w-1/4">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2" >SOCIAL LINKS</h3>
          <ul className="flex">
          <FaFacebookF className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer pb-2 text-3xl"/>
          <FaInstagram className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer pb-2 text-3xl"/>
          <FaLinkedinIn className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer pb-2 text-3xl"/>
          </ul>
        </div>
      </div>
      <div className="dark:text-[#FFFFFF] text-[#14213D]">&copy; 2024 SPHERE.</div>
    </footer>
  );
};

export default Footer;
