import { Link } from "@/i18n/routing";
import ProductCard from "../../Components/ProductCard";
import useProducts from "../../Components/Hooks/useProducts";
import RangeSlider from "../../Components/RangeSlider";
import Selector from "@/app/[locale]/Components/Selector"
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
    order
  } = searchParams;

  console.log("category:", category, minPrice, maxPrice, order);

  const products = await useProducts(category, minPrice, maxPrice, search, order);

  return (
    <div className="flex  mx-[10%]  max-xl:mx-[2%] gap-4">
      <div className="max-md:hidden flex flex-col  gap-2 xl:min-w-[350px] min-w-[260px] pt-[29px]  h-[30vh] ">
        <h3 className="text-xl font-bold whitespace-nowrap">
          Product Categories
        </h3>
        <CategoriesList />
        <div className="divider divider-neutral"></div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold whitespace-nowrap">
            Filter By Price
          </h3>
          <RangeSlider />
        </div>
        <div className="divider divider-neutral"></div>
      </div>

      <div>
        <Selector />
        <ClearBtn />
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
          className="flex flex-col text-1xl"
        >
          {category}
        </Link>
      ))}
    </ul>
  );
};


