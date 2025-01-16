import { Link } from "@/i18n/routing";
import ProductCard from "../../Components/ProductCard";
import { Products } from "../../Components/Hooks/useProducts";
import RangeSlider from "../../Components/RangeSlider";
import Selector from "@/app/[locale]/Components/Selector";
import ClearBtn from "../../Components/ClearBtn";
import Pagination from "../../Components/Pagination";



interface Props {
  searchParams: any;
}

const categories = [
  
  // "Beauty and Personal Care",
  // "Lagguage and Travel Gear",
  // "Clothing and Accessories",
  // "Musical Instruments",
  // "Garden and Outdoor",
  "Home Appliances",
  // "Offuce Products",
  // "Toys and Hobbies",
  // "Smart Home",
  "Cell Phones",
  "Electronics",
  "Furniture",
  "Bedroom",
  "Outdoor",
  "Kitchen",
  "Sports",
  "Books",
  "Tools",
  // "Baby",
  // "Pet",
];

const Store = async ({ searchParams }: Props) => {
  const {
    category = "",
    minPrice = 0,
    maxPrice = Infinity,
    search,
    order,
    page = 1,
    per_page = 6,
  } = await searchParams;

  console.log("category:", category, minPrice, maxPrice, order, page, per_page);
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;

  if (order) {
    url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?order=${order}`;
  }

  if (search) {
    url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?search=${search}`;
  }

  if (minPrice && maxPrice)
    url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?minPrice=${minPrice}&maxPrice=${maxPrice}`;

  if (category) {
    url = `${process.env.NEXT_PUBLIC_API_URL}/api/products/category/${category}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  const products: Products[] = data.slice(start, end);

  return (
    <>
      <div className="grid grid-flow-col gap-3 w-full px-[10%] max-xl:px-[2%] grid-cols-[250px_2fr_3fr] grid-rows-[78px_2fr_3fr] max-md:flex max-md:flex-col">
        <div className="row-span-3  max-md:hidden">
          <h3 className="text-2xl font-normal pb-[7px] dark:text-[#E5E5E5] pt-[28px]">
            Browse By
          </h3>
          <div className="h-[3px] w-[250px] bg-[#14213D] my-[23px]"></div>
          <CategoriesList />
          <div className="h-[3px] w-[250px] bg-[#14213D] my-[23px]"></div>
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
              <Selector />
              <ClearBtn />
            </div>
          </div>
        </div>
        <div className="row-span-2 col-span-2  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4">
          <ProductCard products={products} />
        </div>
      </div>
      <div className=" w-full flex justify-center py-4">
        <Pagination hasNextPage={end < data.length} hasPrevPage={start > 0} />
      </div>
    </>
  );
};

export default Store;

const CategoriesList = () => {
  return (
    <>
      {categories.map((category, index) => (
        <div className="flex items-center gap-2" key={index}>
          <div className="rounded-full w-[15px] h-[15px] overflow-hidden cursor-pointer bg-[#14213D]"></div>
          <Link
            href={`store?category=${category}`}
            key={index}
            className="flex flex-col text-1xl dark:text-[#E5E5E5] hover:underline whitespace-nowrap"
          >
            {category}
          </Link>
        </div>
      ))}
    </>
  );
};
