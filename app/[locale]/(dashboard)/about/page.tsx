import Image from "next/image";
import image from "@/public/images/cart.jpg";
import portrait1 from "@/public/images/1.jpg";
import portrait2 from "@/public/images/2.jpg";
import portrait3 from "@/public/images/3.jpg";
import portrait4 from "@/public/images/4.jpg";
import Diliya from "@/public/images/Diliya.jpeg";

const About = () => {
  return (
    <div className="flex flex-col ">
      <div className=" flex flex-col justify-center items-center py-24 gap-5 bg-white w-[100vw]">
        <h4 className="text-amber-600">Who We Are</h4>
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className=" text-center text-slate-500 w-[70vw]">
          We are your ultimate destination for all things style, offering a
          collection of the latest trends and timeless classics. With a passion
          for fashion and a dedication to customer satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full  bg-[#E5E5E5] py-20 gap-10">
        {/* Left Section: Image */}
        <div className="flex justify-center relative">
          <Image
            src={image}
            alt="Product Showcase"
            width={700}
            height={800}
            className="w-full h-auto max-w-md shadow-lg object-cover"
          />
          <Image
            src={image}
            alt="Product Showcase"
            width={400}
            height={800}
            className="w-full h-auto max-w-md shadow-lg object-cover absolute top-40 left-1"
          />
        </div>

        {/* Right Section: Content */}
        <div className="flex flex-col justify-center items-start gap-5 max-md:px-[2%] ">
          <h4 className="text-amber-600">Since 2013</h4>
          <h2 className="text-4xl font-bold">
            Our story is one woven with passion, dedication, and a love for
            fashion.
          </h2>
          <p className="text-gray-500">
            Founded by a team of fashion-forward individuals, our company was
            born out of a desire to revolutionize the way people shop for
            clothing and accessories.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  py-24 px-[10%] max-md:px-[2%] bg-amber-600">
        {/* Left Section */}
        <div className="flex flex-col gap-3 items-center">
          <h4 className="text-2xl text-center font-bold text-white">
            Our Mission
          </h4>
          <p className="text-center text-slate-300 w-60">
            We believe that fashion is not just about what you wear, but how it
            makes you feel, that’s why we’re committed.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-3 items-center">
          <h4 className="text-2xl text-center font-bold text-white">
            Our Vision
          </h4>
          <p className="text-center text-slate-300 w-60">
            Our vision is to become the ultimate destination for fashion
            enthusiasts worldwide.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-3 items-center">
          <h4 className="text-2xl text-center font-bold text-white">
            Made With Love
          </h4>
          <p className="text-center text-slate-300 w-60">
            Every piece is more than just a product – it’s a labor of love. From
            the initial design concept to the final stitch.
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-[#E5E5E5] ">
        <div className="flex justify-center">
          <h2 className="font-bold text-3xl p-5">Our Founders</h2>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 mx-[10%] gap-2 py-11 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={portrait1}
              alt="Product Showcase"
              className="w-full   shadow-lg object-cover mb-3"
            />
            <h3 className="font-bold text-xl">David Tarkhnishvili</h3>
            <p className="text-slate-500">CEO & Co-Founder</p>
          </div>
          <div>

          <div className="flex flex-col items-center justify-center overflow-hidden h-[333px] mb-3">
            <Image
              src={Diliya}
              alt="Product Showcase"
              className="w-full shadow-lg mb-3 object-center scale-125"
            />
          </div>
          <div className="flex flex-col items-center">
                <h3 className="font-bold text-xl">Diliya Chanysheva</h3>
                <p className="text-slate-500">CEO of Inspiration</p>
                </div>

          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={portrait3}
              alt="Product Showcase"
              className="w-full h-auto  shadow-lg object-cover mb-3"
            />
            <h3 className="font-bold text-xl">David Tarkhnishvili</h3>
            <p className="text-slate-500">CEO & Co-Founder</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={portrait4}
              alt="Product Showcase"
              className="w-full h-auto  shadow-lg object-cover mb-3"
            />
            <h3 className="font-bold text-xl">David Tarkhnishvili</h3>
            <p className="text-slate-500">CEO & Co-Founder</p>
          </div>
        </div>

        <p className="text-2xl text-stone-600 text-center pb-[10vh] px-[20%]">
          “Our journey began with a shared vision and a passion for fashion.
          Founded by a team of dedicated individuals, our company is fueled by
          the creativity and determination of our founders.“
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Right Section: Content */}
        <div className="flex flex-col justify-center items-start gap-5 bg-white px-[20%] py-32">
          <h4 className="text-amber-600">Join us on this fashion journey</h4>
          <h2 className="text-4xl font-bold">
            Where fashion meets convenience!
          </h2>
          <p className="text-gray-500">
            We are your ultimate destination for all things style, offering a
            curated collection of the latest trends and timeless classics.
          </p>
        </div>
        {/* Left Section: Image */}
        <div className="flex justify-center">
          <Image
            src={image}
            alt="Product Showcase"
            className="w-full h-auto  shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
