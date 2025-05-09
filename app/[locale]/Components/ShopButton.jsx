import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";

const ShopButton = () => {
  const t = useTranslations("HomePage");

  return (
    <button className="group flex px-12 py-4 font-medium text-lg whitespace-nowrap dark:hover:text-[#14213D] bg-[#FCA311] hover:bg-[#ff9900] dark:bg-[#ff9900] dark:hover:bg-[#E5E5E5] text-[#14213D] rounded-xl hover:scale-105 transition-all duration-300 items-center gap-2 drop-shadow-md">
      <Link
        href="/store"
        className="group-hover:scale-105 transition duration-500 text-lg"
      >
        {t("button")}
      </Link>
      <FaArrowRightLong className="group-hover:scale-105 group-hover:ml-3 transition-all duration-300 font-bold" />
    </button>
  );
};

export default ShopButton;
