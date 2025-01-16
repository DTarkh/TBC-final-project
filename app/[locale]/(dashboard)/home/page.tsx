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
      "https://i.postimg.cc/MKdKqkXc/Names-Of-Household-Appliances-In-English.jpg",
    name: "Home Appliances",
    link: "/store?category=Home%20Appliances",
  },
  {
    image: "https://i.postimg.cc/90D10HCW/smart-home.jpg",
    name: "Smart Home",
    link: "/store?category=Smart%20Home",
  },
  {
    image: "https://i.postimg.cc/sgzjYV80/elect.webp",
    name: "Electronics",
    link: "/store?category=Electronics",
  },
  {
    image:
      "https://i.postimg.cc/gJgmd8kC/inside-weather-db-H-vy7v-ICE-unsplash.jpg",
    name: "Furniture",
    link: "/store?category=Furniture",
  },
  {
    image:
      "https://i.postimg.cc/PrghttT5/chastity-cortijo-R-w5-Q-4-Mqm0-unsplash.jpg",
    name: "Bedroom",
    link: "/store?category=Bedroom",
  },
  {
    image: "https://i.postimg.cc/HLhTWzH3/watch.webp",
    name: "Outdoor",
    link: "/store?category=Outdoor",
  },
  {
    image:
      "https://i.postimg.cc/MH1Md9Y7/naomi-hebert-MP0bga-S-d1c-unsplash.jpg",
    name: "Kitchen",
    link: "/store?category=Kitchen",
  },
  {
    image: "https://i.postimg.cc/pTLM0rYq/image2-1.webp",
    name: "Sports",
    link: "/store?category=Sports",
  },
  {
    image: "https://i.postimg.cc/4nCMTxVC/books.webp",
    name: "Books",
    link: "/store?category=Books",
  },
  {
    image:
      "https://i.postimg.cc/KcVhNZKD/sam-clarke-ZEf-Fga-XVa-V4-unsplash.jpg",
    name: "Tools",
    link: "/store?category=Tools",
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
