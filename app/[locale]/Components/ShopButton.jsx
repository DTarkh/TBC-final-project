import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";

const ShopButton = () => {
  const t = useTranslations("HomePage");

  return (
    <Link href="/store">
      <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-secondary px-8 py-4 font-medium text-white transition duration-300 ease-out hover:bg-accent">
        <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-accent text-white duration-300 group-hover:translate-x-0">
          <FaArrowRightLong className="text-xl" />
        </span>
        <span className="absolute flex h-full w-full transform items-center justify-center text-white transition-all duration-300 group-hover:translate-x-full">
          {t("button")}
        </span>
        <span className="invisible">{t("button")}</span>
      </button>
    </Link>
  );
};

export default ShopButton;