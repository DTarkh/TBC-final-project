import Link from "next/link";
import ProductCard from "../../Components/ProductCard";

const Store = () => {
  return (
    <div className="flex ml-[10%] mr-[10%] max-sm:ml-[1%] max-sm:mr-[1%] p-2">
      <div className="max-sm:hidden flex flex-col pr-7">
        <h3 className="text-2xl">Categories</h3>
        <Link href="/">Category</Link>
        <Link href="/">Category</Link>
        <Link href="/">Category</Link>
        <Link href="/">Category</Link>
      </div>

      <div>
        <div className="">fefge</div>
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
