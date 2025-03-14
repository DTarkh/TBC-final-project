import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage }: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex items-center gap-3">
      <p>
        Page of {currentPage} from {totalPages}
      </p>
      <button disabled={currentPage <= 1} className="btn">
        <FiChevronsLeft className="text-xl" />
      </button>
      <button disabled={currentPage <= 1} className="btn">
        <FiChevronLeft className="text-xl" />
      </button>
      <button disabled={currentPage == totalPages} className="btn">
        <FiChevronRight className="text-xl" />
      </button>
      <button disabled={currentPage == totalPages} className="btn">
        <FiChevronsRight className="text-xl" />
      </button>
    </div>
  );
};

export default Pagination;
