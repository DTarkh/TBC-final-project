import { Link } from "@/i18n/routing";


const Button = ({ href, name }) => {
    
  return (

    <button className="inline-block px-12 py-4 font-medium text-[#14213D] dark:hover:text-[#14213D]  bg-[#FCA311] hover:bg-[#ff9900] dark:bg-[#ff9900] dark:hover:bg-[#E5E5E5] dark:text-[#FFFFFF] transition-colors rounded-3xl w-[200px]">
    <Link href={href}>{name}</Link>
    </button>
    
  );
};

export default Button;