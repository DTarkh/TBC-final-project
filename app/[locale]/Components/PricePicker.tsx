"use client";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";


const PricePicker = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(2000);

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("minPrice", minPrice.toString());
    params.set("maxPrice", maxPrice.toString());

    router.push("?" + params);
  };

  return (
    <div className="flex flex-col">
      <input
        type="range"
        id="price-range"
        min={0}
        max={1000}
        value={minPrice}
        className="range range-xs dark:range-warning"
        onChange={handleMinPrice}
      />
      <p className="dark:text-[#E5E5E5] ">Min Price: {minPrice}</p>
      <input
        type="range"
        id="price-range"
        min={0}
        max={2000}
        value={maxPrice}
        className="range range-xs dark:range-warning"
        onChange={handleMaxPrice}
      />
      <p className="dark:text-[#E5E5E5] ">Max Price: {maxPrice}</p>
      <button className="btn mt-3 text-lg" onClick={handleClick}>
        Filter
      </button>
    </div>
  );
};

export default PricePicker;
