import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  subHeader: string;
}

const Header = ({ children, subHeader }: Props) => {
  return (
    <div className="w-full pt-10 pb-5">
      <h5 className="text-sm font-semibold text-[#FCA311] dark:text-[#E5E5E5] text-center tracking-widest drop-shadow-md">
        {subHeader}
      </h5>
      <h1 className="text-4xl font-black text-[#14213D] dark:text-[#E5E5E5] text-center drop-shadow-md">
        {children}
      </h1>
    </div>
  );
};

export default Header;
