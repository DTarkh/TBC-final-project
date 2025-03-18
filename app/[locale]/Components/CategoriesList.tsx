'use client'

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CategoriesList () {
    const searchParams = useSearchParams()
    const router = useRouter()

    const onCategoryClick = (category:string) =>{
        const params = new URLSearchParams(searchParams);
        params.set("category", category);

        router.push("?" + params.toString())
    }

    return (
      <>
        {categories.map((category, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Image
              src={category.image}
              width={30}
              height={30}
              alt="Generated Image"
              className="rounded-xl m-1"
            />
  
            <p
              onClick={()=> onCategoryClick(category.label)}
              key={index}
              className="flex flex-col text-1xl dark:text-[#E5E5E5] hover:underline whitespace-nowrap"
            >
              {category.label}
            </p>
          </div>
        ))}
      </>
    );
  };

  export const categories:{label:string, image: string}[] = [
    {
      label: "Home Appliances",
      image: "https://i.postimg.cc/MZyKD9wB/Generated-Image-5.jpg",
    },
    {
      label: "Cell Phones",
      image:
        "https://i.postimg.cc/P5cPmGWL/WhatsApp_Image_2025-01-16_at_23.50.47.jpg",
    },
    {
      label: "Electronics",
      image: "https://i.postimg.cc/mg6bDqYv/Generated-Image-6.jpg",
    },
    {
      label: "Furniture",
      image: "https://i.postimg.cc/6qwKgNKv/Generated-Image-7.jpg",
    },
    {
      label: "Bedroom",
      image: "https://i.postimg.cc/W1tvQnBX/Generated-Image-8.jpg",
    },
    {
      label: "Outdoor",
      image: "https://i.postimg.cc/TPDXPPYb/Generated-Image-9.jpg",
    },
    {
      label: "Kitchen",
      image: "https://i.postimg.cc/6p8K0FNf/knife.webp",
    },
    {
      label: "Sports",
      image: "https://i.postimg.cc/8CbZrPnK/shoes.webp",
    },
    {
      label: "Books",
      image:
        "https://i.postimg.cc/gj6hZY52/WhatsApp_Image_2025-01-16_at_23.37.34.jpg",
    },
    {
      label: "Tools",
      image: "https://i.postimg.cc/ZRnKjmTK/Generated-Image-4.jpg",
    },
  ];
  