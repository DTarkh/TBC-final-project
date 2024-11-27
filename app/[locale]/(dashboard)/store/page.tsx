import Link from "next/link";
import ProductCard from "../../Components/ProductCard";

const Store = () => {
  return (
    <div className="flex mx-[10%] max-xl:mx-[2%]">
      <div className="max-sm:hidden flex flex-col  gap-2 min-w-[200px] pt-3">
        <h3 className="text-l font-bold whitespace-nowrap py-5">
          Product Categories
        </h3>
        <Link href="/">Appliances</Link>
        <Link href="/">Automotive</Link>
        <Link href="/">Electronics</Link>
        <Link href="/">Fashion</Link>
        <Link href="/">Home & Decor</Link>
        <Link href="/">Kitchen</Link>
        <Link href="/">Lighting</Link>
        <Link href="/">Luggage</Link>
        <Link href="/">Sports</Link>
        <Link href="/">Storage</Link>
        <Link href="/">Tables & Desks</Link>
        <Link href="/">Tools</Link>
      </div>

      <div>
        <div className="flex gap-4 items-center px-5 py-5 ">
          <p>Select:</p>
          <select className="select select-bordered w-full max-w-xs bg-[#E5E5E5]">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2   gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Store;
