"use client";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";

const RangeSlider = () => {
  const router = useRouter();
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

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
      <label htmlFor="price-range" className="sr-only">
        Min Price
      </label>
      <input
        type="range"
        id="price-range"
        min={0}
        max={1000}
        value={minPrice}
        className="range"
        onChange={handleMinPrice}
      />
      <p>Min Price: {minPrice}</p>
      <label htmlFor="price-range" className="sr-only">
        Min Price
      </label>
      <input
        type="range"
        id="price-range"
        min={0}
        max={1500}
        value={maxPrice}
        className="range"
        onChange={handleMaxPrice}
      />
      <p>Min Price: {maxPrice}</p>
      <button className="btn mt-3" onClick={handleClick}>
        filter
      </button>
    </div>
  );
};

export default RangeSlider;
