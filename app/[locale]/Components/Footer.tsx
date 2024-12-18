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
        <div className="w-full  md:w-1/2 lg:w-1/4 ">
        
          <h2 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2 flex items-center gap-1"><GiHolosphere className="text-3xl text-red-700"/>SPHERE. </h2>
          <p className="dark:text-[#FFFFFF] text-[#14213D] pb-2 pr-7">
          {t("description")}
          </p>
          <ul className="flex-col">
            <li className="flex items-center pb-2 dark:text-[#FFFFFF] text-[#14213D] ">
              <FaLocationArrow className="dark:text-[#FFFFFF] text-[#14213D]  text-xl mr-1"/> 
              {t("address")}
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
        
        <div className=" w-full  md:w-1/2 lg:w-1/4 ">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2">{t("menu")}</h3>
          <ul className="flex flex-col">
            <Link href="/home" className="dark:text-[#FFFFFF] text-[#14213D]">{t("home")}</Link>
            <Link href="/store" className="dark:text-[#FFFFFF] text-[#14213D]">{t("store")}</Link>
            <Link href="/blog"  className="dark:text-[#FFFFFF] text-[#14213D]">{t("blog")}</Link>
            <Link href="/about"  className="dark:text-[#FFFFFF] text-[#14213D]">{t("about")}</Link>
            <Link href="/contact"  className="dark:text-[#FFFFFF] text-[#14213D]">{t("contact")}</Link>
          </ul>
        </div>
        <div className=" w-full   md:w-1/2 lg:w-1/4 ">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2">{t("useful")}</h3>
          <ul className="flex-col">
            <li className="dark:text-[#FFFFFF] text-[#14213D]">{t("privacy")}</li>
            <li className="dark:text-[#FFFFFF] text-[#14213D]">{t("terms")}</li>
            <li className="dark:text-[#FFFFFF] text-[#14213D]">{t("returns")}</li>
            <li className="dark:text-[#FFFFFF] text-[#14213D]">{t("contact")}</li>
          </ul>
        </div>
        <div className=" w-full  md:w-1/2  lg:w-1/4">
          <h3 className="dark:text-[#FFFFFF] text-[#14213D] font-bold pb-2" >{t("social")}</h3>
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
