import Categories from "../../Components/Categories";
import FeaturedProducts from "../../Components/FeaturedProducts";
import BlogSection from "../../Components/BlogSection";
import Header from "../../Components/Header";
import Pricing from "../../Components/Pricing";
import Contact from "../../Components/Contact";
import { createClient } from "@/utils/supabase/server";
import HeroSection from "./HeroSection";


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

