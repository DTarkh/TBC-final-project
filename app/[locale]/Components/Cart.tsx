import { SlHandbag } from "react-icons/sl";

const Cart = () => {
  return (
    <div className="dropdown dropdown-end " role="button" tabIndex={0}>
      
        <div className="flex items-center max-lg:hidden">
          <SlHandbag className="text-4xl mx-2 text-[#14213D]" />
          <div>
            <p className="text-slate-500 text-sm whitespace-nowrap">
              Shopping Cart
            </p>
            <h2 className="whitespace-nowrap text-lime-700 font-bold">$0.00</h2>
          </div>
       
        <span className="badge badge-sm indicator-item absolute right-[9px] top-[25px]">
          8
        </span>
      </div>

      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
