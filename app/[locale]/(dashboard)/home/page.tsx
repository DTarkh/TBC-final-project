import Button from "../../Components/Button";
import Image from "next/image";
import image from "@/public/images/cart.jpg";
import { useTranslations } from "next-intl";


const Home = () => {

  const t = useTranslations("HomePage");
  return (
    <div className="py-[12vh] flex max-md:flex-col  w-full px-[10%] max-lg:px-[2%]"
    >
      <div className="w-1/2 max-md:w-full  flex flex-col gap-4 items-start">
        <h1 className=" text-[#14213D] dark:text-[#ff9900] text-7xl font-bold">
        {t("heading")}
        </h1>
        <h2 className="  text-[#FCA311] dark:text-[#FFFFFF] text-5xl font-bold whitespace-pre-wrap ">
          Online Store <br />Special Offer <br />Up to 60% OFF
        </h2>
        <div className="badge badge-outline text-[#14213D] my-4 p-4 font-medium dark:text-[#E5E5E5] ">Here you can find latest updates!</div>
  
        <Button href="/store" name="SHOP NOW" />
      </div>

      <div className="mt-10 md:mt-0 w-1/2  max-md:w-full flex justify-center md:justify-end">
        <Image
          src={image}
          alt="Product Showcase"
          width={700}
          height={800}
          className="w-full min-h-[40vh]  rounded-lg shadow-lg object-cover "
        />
      </div>
    </div>
   
  );
};

export default Home;
