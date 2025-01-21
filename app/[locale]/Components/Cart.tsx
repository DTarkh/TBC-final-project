import { SlHandbag } from "react-icons/sl";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useCartContext } from "./Hooks/useCartContext";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Cart = () => {
  const t = useTranslations("Navigation");
  // const { totalPrice, cartItemsNumber} = useContext(CartItemsContext)
  const { totalPrice, cartItemsNumber} = useCartContext()
  return (
    <div className="dropdown dropdown-end " role="button">
      <div className="flex items-center">
        <HiOutlineShoppingBag 
          className="text-4xl mx-2 text-[#14213D] outline-none hover:scale-110 transition-transform dark:text-[#E5E5E5]"
          tabIndex={0}
          name='cart'
        />
        <div className="flex flex-col gap-[-5px] max-lg:hidden">
          <p className="text-[#14213D] text-sm whitespace-nowrap dark:text-[#E5E5E5]">
            {t("cart")}
          </p>
          <h2 className="whitespace-nowrap text-lime-700 font-bold pr-8">${totalPrice.toFixed(2)}</h2>
        </div>

        <span className="badge badge-sm indicator-item absolute left-[28px] top-[0px] bg-[#FCA311] font-bold text-xs rounded-full border-none">
          {cartItemsNumber}
        </span>
      </div>

      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">{cartItemsNumber} Items</span>
          <span className="text-info">Subtotal: ${totalPrice.toFixed(2)}</span>
          <div className="card-actions">
            
              <button className="btn btn-primary btn-block">
              <Link href="/cart">
              View Cart
            </Link>
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
