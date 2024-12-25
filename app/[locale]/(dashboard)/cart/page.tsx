

import { Link } from "@/i18n/routing";
import Checkout from "../../Components/Checkout";

interface CartItem {
  id: number;
  created_at: string;
  product_id: number;
  user_id: string;
  stripe_product_id: string;
  stripe_price_id: string;
  products: Product;
}

interface Product {
  title_en: string;
  thumbnail: string;
}

const Page = async () => {
  const response = await fetch("http://localhost:3000/api/cart", {
    cache: "no-store",
  });
  const cart: CartItem[] = await response.json();

  return (
    <div className="w-[60vw] p-6 mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h1>
      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700"></th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                  Product Name
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                  Quantity
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                  Price
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-6 py-4">
                    <img
                      src={item.products.thumbnail}
                      alt={item.products.title_en}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {item.products.title_en}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <form className="flex gap-2">
                      <input
                        type="number"
                        className="input w-[70px] border"
                        defaultValue={1} // Replace with actual quantity if available
                        min="1"
                      />
                      <button className="btn btn-primary" type="submit">
                        Update
                      </button>
                    </form>
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold">
                    $99.99 {/* Replace with actual price if available */}
                  </td>
                  <td className="px-6 py-4">
                    <button className="btn btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      )}
      <div className="flex items-center justify-between p-2">
        <h2 className="text-2xl">Total Amount: $2200</h2> {/* Replace with actual total */}
        <div className="flex gap-2">
          <Link href="/store">
            <button className="btn btn-primary">Continue Shopping</button>
          </Link>
          <Checkout />
          </div>
      </div>
    </div>
  );
};

export default Page;