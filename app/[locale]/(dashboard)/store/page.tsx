import Link from "next/link";
import ProductCard from "../../Components/ProductCard";

const Store = () => {
  return (
    <div className="flex ml-[10%] mr-[10%] max-sm:ml-[1%] max-sm:mr-[1%] p-2">
      <div className=" bg-gray-700 w-[300px] max-sm:hidden flex flex-col">
        <h3 className="text-red-700">Categories</h3>
        <Link href="/">Category</Link>
        <Link href="/">Category</Link>
        <Link href="/">Category</Link>
        <Link href="/">Category</Link>
      </div>

      <div>
        <div className="bg-red-700 ">fefge</div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2">
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
