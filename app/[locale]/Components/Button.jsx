import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ href, name }) => {
    const t = useTranslations("HomePage");

    return (
        <button className="group flex px-12 py-4 font-medium text-lg whitespace-nowrap dark:hover:text-[#14213D] bg-[#FCA311] hover:bg-[#ff9900] dark:bg-[#ff9900] dark:hover:bg-[#E5E5E5] text-[#FFFFFF] rounded-xl hover:scale-110 transition-all duration-200 items-center gap-2 drop-shadow-md">
            <Link href={href} className="group-hover:scale-110 transition duration-200 text-lg">{t("button")}</Link>
            <FaArrowRightLong className="group-hover:scale-110 group-hover:ml-4 transition-all duration-200 font-bold"/>
        </button>
    );
};

export default Button;