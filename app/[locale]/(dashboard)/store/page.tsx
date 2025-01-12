import { Link } from "@/i18n/routing";
import ProductCard from "../../Components/ProductCard";
import useProducts, { Products } from "../../Components/Hooks/useProducts";
import RangeSlider from "../../Components/RangeSlider";
import Selector from "@/app/[locale]/Components/Selector";
import ClearBtn from "../../Components/ClearBtn";
import Pagination from "../../Components/Pagination";

interface Props {
  searchParams: any;
}

const categories = [
  "Cell Phones and Accessories",
  "Beauty and Personal Care",
  "Lagguage and Travel Gear",
  "Clothing and Accessories",
  "Musical Instruments",
  "Garden and Outdoor",
  "Home Appliances",
  "Offuce Products",
  "Toys and Hobbies",
  "Smart Home",
  "Electronics",
  "Furniture",
  "Bedroom",
  "Outdoor",
  "Kitchen",
  "Sports",
  "Books",
  "Tools",
  "Baby",
  "Pet",
];

const Store = async ({ searchParams }: Props) => {
  const {
    category = "",
    minPrice = 0,
    maxPrice = Infinity,
    search,
    order,
  } = await searchParams;

  console.log("category:", category, minPrice, maxPrice, order);

  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;

  if (order) {
    url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?order=${order}`;
  }

  if (search) {
    url = `http://localhost:3000/api/products?search=${search}`;
  }

  if (minPrice && maxPrice)
    url = `http://localhost:3000/api/products?minPrice=${minPrice}&maxPrice=${maxPrice}`;

  if (category) {
    url = `http://localhost:3000/api/products/category/${category}`;
  }

  const data = await fetch(url);
  const products: Products[] = await data.json();

  return (
    <div className="grid grid-flow-col gap-3 w-full px-[10%] max-xl:px-[2%] grid-cols-[250px_2fr_3fr] grid-rows-[78px_2fr_3fr] max-md:flex max-md:flex-col">
      <div className="row-span-3  max-md:hidden">
        <h3 className="text-2xl font-normal pb-[7px] dark:text-[#E5E5E5] pt-[28px]">
          Browse By
        </h3>
        <div className="divider dark:divider-warning"></div>

        <CategoriesList />
        <div className="divider dark:divider-warning"></div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-normal whitespace-nowrap dark:text-[#E5E5E5] ">
            Filter By Price
          </h3>
          <RangeSlider />
        </div>
      </div>

      <div className="col-span-2 ">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-4xl font-light dark:text-[#E5E5E5] whitespace-nowrap">
            {category ? category : "All Products"}
          </h2>
          <div>
            <Pagination />
            <Selector />
            <ClearBtn />
          </div>
        </div>
      </div>
      <div className="row-span-2 col-span-2  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4">
        <ProductCard products={products} />
      </div>
    </div>
  );
};

export default Store;

const CategoriesList = () => {
  return (
    <ul>
      {categories.map((category, index) => (
        <Link
          href={`store?category=${category}`}
          key={index}
          className="flex flex-col text-1xl dark:text-[#E5E5E5] hover:underline"
        >
          {category}
        </Link>
      ))}
    </ul>
  );
};
