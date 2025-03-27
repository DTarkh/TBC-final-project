"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    router.push("?" + params.toString());
  };

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center gap-3">
      <button
        disabled={currentPage <= 1}
        className="btn dark:bg-gray-100"
        onClick={() => setPage(1)}
        >
        <FiChevronsLeft className="text-xl" />
      </button>
      <button
        disabled={currentPage <= 1}
        className="btn dark:bg-gray-100"
        onClick={() => setPage(currentPage - 1)}
        >
        <FiChevronLeft className="text-xl" />
      </button>
        <p className="dark:text-[#E5E5E5]">
          Page of {currentPage} from {totalPages}
        </p>
      <button
        disabled={currentPage == totalPages}
        className="btn dark:bg-gray-100"
        onClick={() => setPage(currentPage + 1)}
      >
        <FiChevronRight className="text-xl" />
      </button>
      <button
        disabled={currentPage == totalPages}
        className="btn dark:bg-gray-100"
        onClick={() => setPage(totalPages)}
      >
        <FiChevronsRight className="text-xl" />
      </button>
    </div>
  );
};

export default Pagination;
