import { Link } from "@/i18n/routing";
import ProductCard from "../../Components/ProductCard";
import useProducts from "../../Components/Hooks/useProducts";
import RangeSlider from "../../Components/RangeSlider";

interface Props {
  searchParams: any;
}

const categories = [
  "Electronics",
  "Home Appliances",
  "Sports",
  "Furniture",
  "Kitchen",
  "Outdoor",
  "Bedroom",
  "Tools",
];

const Store = async ({ searchParams }: Props) => {
  const {
    category = "",
    minPrice = 0,
    maxPrice = Infinity,
    search,
  } = searchParams;

  console.log("category:", category, minPrice, maxPrice);

  const products = await useProducts(category, minPrice, maxPrice, search);

  return (
    <div className="flex  mx-[10%]  max-xl:mx-[2%] gap-4">
      <div className="max-sm:hidden flex flex-col  gap-2 min-w-[250px] pt-[29px]  h-[30vh] ">
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
        <div className="">
          <h3 className="text-xl font-bold whitespace-nowrap">
            Filter By Rating
          </h3>
        </div>
      </div>

      <div>
        <Selector />
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
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
          href={`store/?category=${category}`}
          key={index}
          className="flex flex-col text-1xl"
        >
          {category}
        </Link>
      ))}
    </ul>
  );
};

const Selector = () => {
  return (
    <div className="flex gap-4 items-center py-5 ">
      <p>Select:</p>
      <select className="select select-bordered w-full max-w-xs bg-[#E5E5E5]">
        <option disabled value={"select"}>
          select
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>
  );
};
