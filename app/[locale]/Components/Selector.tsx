"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const Selector = () => {
  const router = useRouter();
  const [label, setLabel] = useState("Relevance");

  const sortOrders = [
    { value: "store", label: "Relevance" },
    { value: "store?order=priceAsc", label: "Price asc" },
    { value: "store?order=priceDesc", label: "Price desc" },
    { value: "store?order=ratingDesc", label: "Rating" },
  ];

  const handleSortChange = (value: string, label: string) => {
    setLabel(label);
    router.push(value);
  };

  return (
    <div className="dropdown dropdown-end py-4 mr-2" role="button" tabIndex={0}>
      <button className="btn">
        <h2 className="whitespace-nowrap text-[#14213D] flex items-center gap-1">
          Sort By: {label} <IoChevronDown className="text-xl" />
        </h2>
      </button>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        {sortOrders.map((sort) => (
          <li key={sort.value}>
            <button
              className="w-full text-left"
              onClick={() => handleSortChange(sort.value, sort.label)}
            >
              {sort.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
