"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";


const CategorySelector = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [label, setLabel] = useState("All Products");

  const sortOrders = [
    {  label: "All Products" },
    {  label: "Home Appliances" },
    {  label: "Cell Phones" },
    {  label: "Electronics" },
    {  label: "Furniture" },
    {  label: "Bedroom" },
    {  label: "Outdoor" },
    {  label: "Kitchen" },
    {  label: "Sports" },
    { label: "Books" },
    {  label: "Tools" },
  ];

  const handleSortChange = (category: string) => {
    setLabel(label);
    const params = new URLSearchParams(searchParams);
    params.set("category", category)
    router.push("?" + params.toString());
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
          <li key={sort.label}>
            <button
              className="w-full text-left"
              onClick={() => handleSortChange(sort.label)}
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
