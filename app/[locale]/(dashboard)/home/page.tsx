import ShopButton from "../../Components/ShopButton";
import Image from "next/image";
import image from "@/public/images/cart.jpg";
import Categories from "../../Components/Categories";
import { useTranslations } from "next-intl";
import FeaturedProducts from "../../Components/FeaturedProducts";
import BlogSection from "../../Components/BlogSection";
import Header from "../../Components/Header";
import Pricing from "../../Components/Pricing";
import Contact from "../../Components/Contact";
import { createClient } from "@/utils/supabase/server";

const Home = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  let pricingContent = null;

  if (data.user)
    pricingContent = (
      <>
        <Header subHeader={"Pricing"}>
          STOP PAYING DELIVERY PRICE ON EVERY PURCHASE
        </Header>
        <Pricing />
      </>
    );

  return (
    <>
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <Header subHeader={"Blog"}>RECENT POSTS</Header>
      <BlogSection />
      {pricingContent}
      <Contact />
    </>
  );
};

export default Home;

const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex max-md:flex-col  w-full">
      <div className="w-1/2 max-md:w-full  flex flex-col gap-4 items-start">
        <h1 className=" text-[#14213D] dark:text-[#FCA311] text-8xl font-extrabold tracking-tighter drop-shadow-md">
          {t("heading")}
        </h1>
        <h2 className="  text-[#FCA311] dark:text-[#E5E5E5] text-5xl font-bold whitespace-pre-wrap drop-shadow-md">
          {t("description")}
        </h2>
        <div className="badge badge-outline dark:border-[#FCA311] text-[#14213D] my-4 p-4 font-medium bg-[#FCA311] whitespace-nowrap z-20">
          {t("badge")}
        </div>

        <ShopButton />
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
