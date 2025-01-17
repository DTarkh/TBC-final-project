import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Button = ({ href, name }) => {
    const t = useTranslations("HomePage");
  return (

    <button className="inline-block px-12 py-4 font-medium  whitespace-nowrap text-[#14213D] dark:hover:text-[#14213D]  bg-[#FCA311] hover:bg-[#ff9900] dark:bg-[#ff9900] dark:hover:bg-[#E5E5E5] dark:text-[#FFFFFF] transition-colors rounded-3xl">
    <Link href={href}>{t("button")}</Link>
    </button>
    
  );
};

export default Button;