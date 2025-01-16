import Button from "../../Components/Button";
import Image from "next/image";
import image from "@/public/images/cart.jpg";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Home = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="py-[12vh] flex max-md:flex-col  w-full px-[10%] max-lg:px-[2%]">
        <div className="w-1/2 max-md:w-full  flex flex-col gap-4 items-start">
          <h1 className=" text-[#14213D] dark:text-[#ff9900] text-7xl font-bold">
            {t("heading")}
          </h1>
          <h2 className="  text-[#FCA311] dark:text-[#FFFFFF] text-5xl font-bold whitespace-pre-wrap ">
            Online Store <br />
            Special Offer <br />
            Up to 60% OFF
          </h2>
          <div className="badge badge-outline text-[#14213D] my-4 p-4 font-medium dark:text-[#E5E5E5] ">
            Here you can find latest updates!
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
      <Categories />
    </>
  );
};

export default Home;

const CategoriesList = [
  {
    image:
      "https://i.postimg.cc/3NyXFjy7/Whats-App-Image-2025-01-16-at-23-30-10.jpg",
    name: "Home Appliances",
    link: "/store?category=Home%20Appliances",
  },
  {
    image: "https://i.postimg.cc/MGsv7zDZ/mouse-1.webp",
    name: "Electronics",
    link: "/store?category=Electronics",
  },
  {
    image:
      "https://i.postimg.cc/yYgjmK99/Whats-App-Image-2025-01-16-at-23-24-59.jpg",
    name: "Furniture",
    link: "/store?category=Furniture",
  },
  {
    image:
      "https://i.postimg.cc/TYty35hJ/Whats-App-Image-2025-01-16-at-23-50-31.jpg",
    name: "Bedroom",
    link: "/store?category=Bedroom",
  },
  {
    image:
      "https://i.postimg.cc/sg0ZwGrg/Whats-App-Image-2025-01-16-at-23-50-27.jpg",
    name: "Outdoor",
    link: "/store?category=Outdoor",
  },
  {
    image:
      "https://i.postimg.cc/sgzns8Qh/Whats-App-Image-2025-01-16-at-23-38-15.jpg",
    name: "Kitchen",
    link: "/store?category=Kitchen",
  },
  {
    image:
      "https://i.postimg.cc/cHLMrG0v/Whats-App-Image-2025-01-16-at-23-29-20.jpg",
    name: "Sports",
    link: "/store?category=Sports",
  },
  {
    image:
      "https://i.postimg.cc/gj6hZY52/Whats-App-Image-2025-01-16-at-23-37-34.jpg",
    name: "Books",
    link: "/store?category=Books",
  },
  {
    image:
      "https://i.postimg.cc/3RqpNytq/Whats-App-Image-2025-01-16-at-23-36-23.jpg",
    name: "Tools",
    link: "/store?category=Tools",
  },
  {
    image:
      "https://i.postimg.cc/P5cPmGWL/Whats-App-Image-2025-01-16-at-23-50-47.jpg",
    name: "Cell Phones",
    link: "/store?category=Cell%20Phones",
  },
];
const Categories = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-20 w-full px-[10%] bg-white py-20">
      {CategoriesList.map((category) => (
        <div key={category.name} className="flex flex-col items-center gap-2">
          <Link href={category.link}>
            <div className="rounded-full w-[150px] h-[150px] overflow-hidden border-4 border-[#E5E5E5] cursor-pointer">
              <Image
                src={category.image}
                alt="Electronics"
                width={100}
                height={100}
                className="w-full h-full rounded-full hover:scale-110 transition-transform duration-300 "
              />
            </div>
          </Link>
          <Link
            key={category.name}
            href={category.link}
            className="font-semibold text-xl whitespace-nowrap"
          >
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
