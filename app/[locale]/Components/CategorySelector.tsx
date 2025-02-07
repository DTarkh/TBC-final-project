"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";


const CategorySelector = () => {
  const router = useRouter();
  const [label, setLabel] = useState("All Products");

  const sortOrders = [
    { value: "store", label: "All Products" },
    { value: "store?category=Home%20Appliances", label: "Home Appliances" },
    { value: "store?category=Cell%20Phones", label: "Cell Phones" },
    { value: "store?category=Electronics", label: "Electronics" },
    { value: "store?category=Furniture", label: "Furniture" },
    { value: "store?category=Bedroom", label: "Bedroom" },
    { value: "store?category=Outdoor", label: "Outdoor" },
    { value: "store?category=Kitchen", label: "Kitchen" },
    { value: "store?category=Sports", label: "Sports" },
    { value: "store?category=Books", label: "Books" },
    { value: "store?category=Tools", label: "Tools" },
  ];

  const handleSortChange = (value: string, label: string) => {
    setLabel(label);
    router.push(value);
  };

  return (
    <div className="dropdown dropdown-end py-4  md:hidden relative" role="button" tabIndex={0}>
      <button className="btn">
        <h2 className="whitespace-nowrap text-[#14213D] flex items-center gap-1">
          Category: {label} <IoChevronDown className="text-xl" />
        </h2>
      </button>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute left-0"
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

export default CategorySelector
