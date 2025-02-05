import Button from "../../Components/Button";
import Image from "next/image";
import image from "@/public/images/cart.jpg";
import Categories from "../../Components/Categories";
import { useTranslations } from "next-intl";
import FeaturedProducts from "../../Components/FeaturedProducts";
import BlogSection from "../../Components/BlogSection";
import Header from "../../Components/Header";
import Pricing from "../../Components/Pricing";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <FeaturedProducts/>
      <Header>RECENT POSTS</Header>
      <BlogSection />
      <Header>SUBSCRIBTION PLANS</Header>
      <Pricing/>
    </>
  );
};

export default Home;







const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="py-[12vh] flex max-md:flex-col  w-full px-[10%] max-lg:px-[2%]">
      <div className="w-1/2 max-md:w-full  flex flex-col gap-4 items-start">
        <h1 className=" text-[#14213D] dark:text-[#FCA311] text-7xl font-bold">
          {t("heading")}
        </h1>
        <h2 className="  text-[#FCA311] dark:text-[#FFFFFF] text-5xl font-bold whitespace-pre-wrap">
        {t("description")}
        </h2>
        <div className="badge badge-outline text-[#14213D] my-4 p-4 font-medium dark:text-[#E5E5E5] ">
        {t("badge")}
        </div>

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
