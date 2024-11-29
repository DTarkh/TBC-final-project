import Rating from "../Components/Rating";
import Image from "next/image";
import { Products } from "../Components/Hooks/useProducts";

interface ProductCardProps {
  products: Products[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-[#E5E5E5] w-86 flex flex-col gap-2 relative group"
        >
          <div className="min-h-[30vh] relative group">
            <Image
              src={product.thumbnail}
              alt={product.title_en}
              className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-50"
              width={380}
              height={250}
            />
            <div className="absolute bottom-0 w-full bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-full">Add to Cart</button>
            </div>
          </div>
          
          <div className="flex flex-col items-center relative z-10">
            <div className="flex gap-2">
              <span className="text-xs text-gray-600">
                {product.category_en}
              </span>
            </div>
            <h2 className="card-title">{product.title_en}</h2>
            <Rating />
            <p className="font-bold text-xl">${product.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;