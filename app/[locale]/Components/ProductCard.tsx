import Rating from '../Components/Rating'
import chair from "@/public/images/chair.jpg"
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className="bg-[#E5E5E5]  w-86 flex flex-col gap-2">
      <div className='min-h-[30vh]'>
        <Image
          src={chair}
          alt="chair"
          className='h-full object-cover'
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          <span className="text-xs text-gray-600">Tables & Desks</span>
          
        </div>
        <h2 className="card-title">Rowan Accent Chair</h2>
        <Rating />
        <p className='font-bold text-xl'>$45.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
