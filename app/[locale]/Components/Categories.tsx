"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Header from "./Header";

const Categories = () => {
  const t = useTranslations("HomePage");
  const categories = [
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
    <section className="py-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 text-primary dark:text-white"
      >
        <Header subHeader="Shop">Shop By Category</Header>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link href={category.link}>
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="mt-4 text-center font-medium text-primary dark:text-white group-hover:text-secondary transition-colors duration-300">
                {category.name}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
