'use client'

import Rating from "../Components/Rating";
import Image from "next/image";
import { Products } from "../Components/Hooks/useProducts";
import { Link } from "@/i18n/routing";
import AddToCart from "../Components/AddToCart"
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface ProductCardProps {
  products: Products[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  const t = useTranslations("Store");
  const path = usePathname();
  const isEnglish = path.includes("/en");

  if (products.length === 0) {
    return (
      <div className="min-w-[350px] h-[60vh] pt-20 ">
        <h3 className="text-3xl text-red-500">Product not found</h3>
      </div>
    );
  } else {
    return (
      <>
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#E5E5E5] dark:bg-[#14213D] w-86 flex flex-col gap-2 relative group"
          >
            <div className="min-h-[30vh] relative group">
              <Image
                src={product.thumbnail}
                alt={product.title_en}
                className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                width={480}
                height={200}
                
              />
              <div className="absolute bottom-0 w-full bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <AddToCart productId={product.id}  productName={product.title_en} productPrice={product.price} thumbnail={product.thumbnail}/>
           
              </div>
            </div>

            <div className="flex flex-col items-center relative z-10">
              <div className="flex gap-2">
                <span className="text-xs text-gray-600">
                  {t("category")}: {isEnglish ? product.title_en : product.title_ge}
                </span>
              </div>
              <Link href={`/store/${product.id}`}>
              <h2 className="card-title text-center dark:text-[#E5E5E5]">{isEnglish ? product.title_en : product.title_ge}</h2>
              
              </Link>
              <Rating />
              <p className="font-bold text-xl dark:text-[#E5E5E5]">${product.price}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default ProductCard;
