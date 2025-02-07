import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ href, name }) => {
    const t = useTranslations("HomePage");
  return (

    <button className="flex px-12 py-4 font-medium text-lg whitespace-nowrap  dark:hover:text-[#14213D]  bg-[#FCA311] hover:bg-[#ff9900] dark:bg-[#ff9900] dark:hover:bg-[#E5E5E5] text-[#FFFFFF]  rounded-xl hover:scale-110 transition-transform  items-center gap-2">
    <Link href={href}>{t("button")}</Link>
    <FaArrowRight />
    </button>
    
  );
};

export default Button;