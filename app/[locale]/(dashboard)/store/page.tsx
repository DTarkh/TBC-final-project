import {
  CategorySelector,
  ClearBtn,
  Pagination,
  ProductCard,
  RangeSlider,
  Selector,
  CategoriesList
} from "@/app/[locale]/Components";
import { Products } from "../../Components/Hooks/useProducts";

interface Props {
  searchParams: ProductsQuery
}

interface ProductsQuery {
  category: string;
  minPrice: string;
  maxPrice: string;
  search: string;
  order: string;
  per_page: number;
  page: string;
}

const Store = async ({ searchParams }: Props) => {
  const {
    category = "",
    minPrice = 0,
    maxPrice = Infinity,
    search,
    order,
    per_page = 6,
  } = searchParams;

  const page = parseInt(searchParams.page) || 1;

  console.log("category:", category, minPrice, maxPrice, order, page, per_page);
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const queryParams = new URLSearchParams();

if (category) queryParams.append("category", category);
if (minPrice) queryParams.append("minPrice", String(minPrice));
if (maxPrice !== Infinity) queryParams.append("maxPrice", String(maxPrice));
if (search) queryParams.append("search", search);
if (order) queryParams.append("order", order);
queryParams.append("per_page", String(per_page));
queryParams.append("page", String(page));

const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?${queryParams.toString()}`;

const response = await fetch(url);

  const data = await response.json();
  const products: Products[] = data.slice(start, end);

  const totalProducts = parseInt(data.length);

  return (
    <>
      <div className="grid grid-flow-col gap-3 w-full grid-cols-[250px_2fr_3fr] grid-rows-[78px_2fr_3fr] max-md:flex max-md:flex-col">
        <div className="row-span-3  max-md:hidden">
          <h3 className="text-2xl font-normal pb-[7px] dark:text-[#E5E5E5] pt-[28px]">
            Browse By
          </h3>
          <div className="h-[2px] w-[250px] bg-[#14213D] my-[24px] dark:bg-[#E5E5E5]"></div>
          <CategoriesList/>
          <div className="h-[2px] w-[250px] bg-[#14213D] my-[23px] dark:bg-[#E5E5E5]"></div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-normal whitespace-nowrap dark:text-[#E5E5E5] ">
              Filter By Price
            </h3>
            <RangeSlider />
          </div>
        </div>

        <div className="col-span-2 ">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-4xl font-light dark:text-[#E5E5E5] whitespace-nowrap max-lg:hidden">
              {category ? category : "All Products"}
            </h2>
            <div className="flex  max-sm:justify-between  justify-end w-full items-center gap-2">
              <CategorySelector />
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
        <Pagination
          totalItems={totalProducts}
          itemsPerPage={6}
          currentPage={page}
        />
      </div>
    </>
  );
};

export default Store;

