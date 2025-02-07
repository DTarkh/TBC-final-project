import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ href, name }) => {
    const t = useTranslations("HomePage");

    return (
        <button className="group flex px-12 py-4 font-medium text-lg whitespace-nowrap dark:hover:text-[#14213D] bg-[#FCA311] hover:bg-[#ff9900] dark:bg-[#ff9900] dark:hover:bg-[#E5E5E5] text-[#FFFFFF] rounded-xl hover:scale-110 transition-all duration-300 ease-in-out items-center gap-2 drop-shadow-md">
            <Link href={href}>{t("button")}</Link>
            <FaArrowRight className="transition-transform group-hover:ml-1 duration-300 ease-in-out" />
        </button>
    );
};

export default Button;