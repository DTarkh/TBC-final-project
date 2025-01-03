"use client";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";

const RangeSlider = () => {
  const router = useRouter();
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(2000);

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleClick = () => {
    router.push(`/store?minPrice=${minPrice}&maxPrice=${maxPrice}`);
  };

  return (
    <div className="flex flex-col">
      <input
        type="range"
        id="price-range"
        min={0}
        max={1000}
        value={minPrice}
        className="range dark:range-warning"
        onChange={handleMinPrice}
      />
      <p className="dark:text-[#E5E5E5] ">Min Price: {minPrice}</p>
      <input
        type="range"
        id="price-range"
        min={0}
        max={2000}
        value={maxPrice}
        className="range dark:range-warning"
        onChange={handleMaxPrice}
      />
      <p className="dark:text-[#E5E5E5] ">Max Price: {maxPrice}</p>
      <button className="btn mt-3 text-lg" onClick={handleClick}>
        Filter
      </button>
    </div>
  );
};

export default RangeSlider;
