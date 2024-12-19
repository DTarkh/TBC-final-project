import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GiHolosphere } from "react-icons/gi";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className=" dark:bg-[#14213D] bg-[#E5E5E5] w-full flex-col px-[10%]">
      <div className="flex flex-wrap py-14">
        <div className="w-full  md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center gap-4 pb-7">
          <GiHolosphere className="text-6xl text-red-700" />

          <h2 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2 flex items-center gap-1 text-3xl">
            SPHERE.
          </h2>
        </div>


        <div className=" w-full  md:w-1/2 lg:w-1/4 pb-7">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-7">
            {t("menu")}
          </h3>
          <ul className="flex flex-col">
            <Link
              href="/home"
              className="dark:text-[#FFFFFF] text-[#14213D] pb-7"
            >
              {t("home")}
            </Link>
            <Link
              href="/store"
              className="dark:text-[#FFFFFF] text-[#14213D] pb-7"
            >
              {t("store")}
            </Link>
            <Link
              href="/blog"
              className="dark:text-[#FFFFFF] text-[#14213D] pb-7"
            >
              {t("blog")}
            </Link>
            <Link
              href="/about"
              className="dark:text-[#FFFFFF] text-[#14213D] pb-7"
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="dark:text-[#FFFFFF] text-[#14213D] pb-7"
            >
              {t("contact")}
            </Link>
          </ul>
        </div>

        <div className=" w-full   md:w-1/2 lg:w-1/4 pb-7">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-7">
            {t("useful")}
          </h3>
          <ul className="flex-col">
            <li className="dark:text-[#FFFFFF] text-[#14213D] pb-7">
              {t("privacy")}
            </li>
            <li className="dark:text-[#FFFFFF] text-[#14213D] pb-7">
              {t("terms")}
            </li>
            <li className="dark:text-[#FFFFFF] text-[#14213D] pb-7">
              {t("returns")}
            </li>
            <li className="dark:text-[#FFFFFF] text-[#14213D] pb-7">
              {t("contact")}
            </li>
          </ul>
        </div>

        <div className="w-full  md:w-1/2 lg:w-1/4">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-7">
            {t("store")}
          </h3>
          <ul className="flex-col">
            <li className="flex items-center pb-7 dark:text-[#FFFFFF] text-[#14213D] ">
              <FaLocationArrow className="dark:text-[#FFFFFF] text-[#14213D]  text-xl mr-1" />
              {t("address")}
            </li>
            <li className="flex items-center pb-7 dark:text-[#FFFFFF] text-[#14213D]">
              <MdOutlinePhoneIphone className="dark:text-[#FFFFFF] text-[#14213D]  text-xl  mr-1" />
              +(995) 555 500 135
            </li>
            <li className="flex items-center pb-7 dark:text-[#FFFFFF] text-[#14213D]">
              <MdOutlineMail className="dark:text-[#FFFFFF] text-[#14213D]  text-xl  mr-1" />
              MySphere@gmail.com
            </li>
          </ul>
        </div>

        
       
      </div>
      <div className="divider divide-slate-700"></div>
      <div className="flex flex-wrap justify-between gap-5">
        <div className=" w-full lg:w-1/3">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2">
            {t("payment")}
          </h3>
          <ul className="flex gap-3">
            <FaFacebookF className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer text-2xl" />
            <FaInstagram className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer text-2xl" />
            <FaLinkedinIn className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer text-2xl" />
          </ul>
        </div>
        <div className=" w-full  lg:w-1/4">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2">
            {t("social")}
          </h3>
          <ul className="flex gap-3">
            <FaFacebookF className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer text-2xl" />
            <FaInstagram className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer text-2xl" />
            <FaLinkedinIn className="text-[#14213D] dark:text-[#FFFFFF] hover:cursor-pointer text-2xl" />
          </ul>
        </div>
      </div>
      <div className="dark:text-[#FFFFFF] text-[#14213D] flex justify-center py-3">
        &copy; 2024 SPHERE.
      </div>
    </footer>
  );
};

export default Footer;
