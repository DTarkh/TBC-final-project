import Rating from '../Components/Rating'
import chair from "@/public/images/chair.jpg"
import Image from 'next/image';
import { Products } from "../Components/Hooks/useProducts"


interface ProductCardProps {
  products: Products[];
}
const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <>
    
    {products.map((product) => 
    
    <div className="bg-[#E5E5E5]  w-86 flex flex-col gap-2">
      
      <div className='min-h-[30vh]'>
        <Image
          src={product.thumbnail}
          alt="chair"
          className='h-full object-cover'
          width={300}
          height={200}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          <span className="text-xs text-gray-600">{product.category_en}</span>
          
        </div>
        <h2 className="card-title">{product.title_en}</h2>
        <Rating />
        <p className='font-bold text-xl'>${product.price}</p>
      </div>
    </div>
    
    
    
    )}
    </>
  );
};

export default ProductCard;
