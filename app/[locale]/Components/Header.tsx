import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  subHeader: string;
}

const Header = ({ children, subHeader }: Props) => {
  return (
    <div className="w-full pt-10 pb-5">
      <h4 className="text-amber-600 font-medium mb-3 tracking-wide uppercase text-base text-center">
        {subHeader}
      </h4>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        {children}
      </h1>
    </div>
  );
};

export default Header;
