import Button from "../../Components/Button";

import Image from "next/image";
import image from "@/public/images/cart.jpg";
import Featured from "../../Components/Featured"

const Home = () => {
  return (
    <>
    <div className=" md:flex md:items-center md:justify-between w-full pl-[10%] pr-[10%]">
      <div className="md:w-1/2 space-y-4">
        <h1 className=" text-[#14213D] dark:text-[#ff9900] text-7xl font-bold">
          SPHERE.
        </h1>
        <h2 className="  text-[#FCA311] dark:text-[#FFFFFF] text-5xl font-bold whitespace-pre-wrap">
          All in One Place
        </h2>
        <p className="text-start text-[#14213D] dark:text-[#FFFFFF] mb-10  whitespace-pre-wrap pb-6">
          Here you can find latest updates!
        </p>
        <Button href="/about" name="More!" />
      </div>

      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <Image
          src={image}
          alt="Product Showcase"
          width={700}
          height={800}
          className="w-full h-[50vh] rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
    <Featured />
    </>
  );
};

export default Home;
