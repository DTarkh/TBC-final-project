import { Link } from "@/i18n/routing";

const Clear = () => {
  return (
    <button className="btn max-lg:hidden">
      <Link href="/store" className="whitespace-nowrap text-[#14213D]">
        Clear
      </Link>
    </button>
  );
};

export default Clear;
