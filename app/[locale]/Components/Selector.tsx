"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const Selector = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [label, setLabel] = useState("Relevance");

  const sortOrders = [
    { value: "store", label: "Relevance" },
    { value: "priceAsc", label: "Price asc" },
    { value: "priceDesc", label: "Price desc" },
    { value: "ratingDesc", label: "Rating" },
  ];

  const handleSortChange = (value: string, label: string) => {
    setLabel(label);
    const params = new URLSearchParams(searchParams);
    params.set("order", value);
    router.push("?" + params.toString());
  };

  return (
    <div className="dropdown dropdown-end py-4" role="button" tabIndex={0}>
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
