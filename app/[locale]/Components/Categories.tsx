import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Categories = () => {
  const t = useTranslations("HomePage");
  const CategoriesList = [
    {
      image:
        "https://i.postimg.cc/3NyXFjy7/Whats-App-Image-2025-01-16-at-23-30-10.jpg",
      name: t("home appliances"),
      link: "/store?category=Home%20Appliances",
    },
    {
      image: "https://i.postimg.cc/MGsv7zDZ/mouse-1.webp",
      name: t("electronics"),
      link: "/store?category=Electronics",
    },
    {
      image:
        "https://i.postimg.cc/yYgjmK99/Whats-App-Image-2025-01-16-at-23-24-59.jpg",
      name: t("furniture"),
      link: "/store?category=Furniture",
    },
    {
      image:
        "https://i.postimg.cc/TYty35hJ/Whats-App-Image-2025-01-16-at-23-50-31.jpg",
      name: t("bedroom"),
      link: "/store?category=Bedroom",
    },
    {
      image:
        "https://i.postimg.cc/sg0ZwGrg/Whats-App-Image-2025-01-16-at-23-50-27.jpg",
      name: t("outdoor"),
      link: "/store?category=Outdoor",
    },
    {
      image:
        "https://i.postimg.cc/sgzns8Qh/Whats-App-Image-2025-01-16-at-23-38-15.jpg",
      name: t("kitchen"),
      link: "/store?category=Kitchen",
    },
    {
      image:
        "https://i.postimg.cc/cHLMrG0v/Whats-App-Image-2025-01-16-at-23-29-20.jpg",
      name: t("sports"),
      link: "/store?category=Sports",
    },
    {
      image:
        "https://i.postimg.cc/gj6hZY52/Whats-App-Image-2025-01-16-at-23-37-34.jpg",
      name: t("books"),
      link: "/store?category=Books",
    },
    {
      image:
        "https://i.postimg.cc/3RqpNytq/Whats-App-Image-2025-01-16-at-23-36-23.jpg",
      name: t("tools"),
      link: "/store?category=Tools",
    },
    {
      image:
        "https://i.postimg.cc/P5cPmGWL/Whats-App-Image-2025-01-16-at-23-50-47.jpg",
      name: t("cell phones"),
      link: "/store?category=Cell%20Phones",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-20 w-full py-20">
      {CategoriesList.map((category) => (
        <div key={category.name} className="flex flex-col items-center gap-2">
          <Link href={category.link}>
            <div className="rounded-full w-[150px] h-[150px] overflow-hidden cursor-pointer">
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
            className="font-semibold text-xl whitespace-nowrap dark:text-[#E5E5E5]"
          >
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
