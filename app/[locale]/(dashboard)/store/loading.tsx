// import  { CategoriesList } from "./page"
import Skeletons from "../../Components/Skeletons";

const loading = () => {
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
        
      </div>
    </div>

    <div className="col-span-2 ">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-4xl font-light dark:text-[#E5E5E5]">
       
        </h2>
        <div>
          
        </div>
      </div>
    </div>
    <div className="row-span-2 col-span-2  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pl-8">
    <Skeletons/>
    <Skeletons/>
    <Skeletons/>
    <Skeletons/>
    <Skeletons/>
    <Skeletons/>
    </div>
  </div>
  );
}

export default loading