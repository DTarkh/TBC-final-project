import { Link } from "@/i18n/routing";
import ProductCard from "../../Components/ProductCard";
import useProducts from "../../Components/Hooks/useProducts";
import RangeSlider from "../../Components/RangeSlider";
import Selector from "@/app/[locale]/Components/Selector";
import ClearBtn from "../../Components/ClearBtn";

interface Props {
  searchParams: any;
}

const categories = [
  "Home Appliances",
  "Electronics",
  "Furniture",
  "Outdoor",
  "Bedroom",
  "Kitchen",
  "Sports",
  "Tools",
];

const Store = async ({ searchParams }: Props) => {
  const {
    category = "",
    minPrice = 0,
    maxPrice = Infinity,
    search,
    order,
  } = searchParams;

  console.log("category:", category, minPrice, maxPrice, order);

  const products = await useProducts(
    category,
    minPrice,
    maxPrice,
    search,
    order
  );

  return (
    <div className="flex  mx-[10%]  max-xl:mx-[2%] gap-4">
      <div className="max-md:hidden flex flex-col  xl:min-w-[350px] min-w-[260px] pt-[25px] h-[30vh] ">
        <h3 className="text-2xl font-normal pb-[7px]">Browse By</h3>
        <div className="divider divide-slate-700"></div>

        <CategoriesList />
        <div className="divider divide-slate-700"></div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-normal whitespace-nowrap dark:text-[#E5E5E5] ">
            Filter By Price
          </h3>
          <RangeSlider />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">

        <h2 className="text-4xl font-light">
          {category ? category : "All Products"}
        </h2>
        <div>

        <Selector />
        <ClearBtn />

        </div>

        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <ProductCard products={products} />
        </div>
      </div>
    </div>
  );
};

export default Store;

export const CategoriesList = () => {
  return (
    <ul>
      {categories.map((category, index) => (
        <Link
          href={`store?category=${category}`}
          key={index}
          className="flex flex-col text-1xl dark:text-[#E5E5E5] "
        >
          {category}
        </Link>
      ))}
    </ul>
  );
};
