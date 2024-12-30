

import { Link } from "@/i18n/routing";
import { fetchCartServerSide } from "../../Components/Hooks/useCartServer";
import { useSearchParams } from "next/navigation";
import { fetchSessionDetails } from "./OrderDetails";

interface CartItem {
  id: number;
  created_at: string;
  product_id: number;
  user_id: string;
  stripe_product_id: string;
  stripe_price_id: string;
  products: Product;
  quantity: number;
}

interface Product {
  title_en: string;
  thumbnail: string;
  price: number;
}

interface Props{
  searchParams: any;
}

const SuccessPage = async ({searchParams}: Props) => {
  
  const { session_id } = searchParams
  console.log("session ID:", session_id)
  const orderDetails = await fetchSessionDetails(session_id)
  const cart = await fetchCartServerSide();

  const totalAmount = cart
    ? cart.reduce(
        (total, item) => total + item.products.price * item.quantity,
        0
      )
    : 0;

  if (cart)
    return (
      <div className="w-full px-[10%] py-10 mx-auto">
        <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
        <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h1>
        <h2>Created at: ...</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700"></th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                  Product Name
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                  Quantity
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                  Price per item
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item: CartItem) => (
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
                  <td className="px-6 py-4 text-gray-700">{item.quantity}</td>
                  <td className="px-6 py-4 text-gray-700 font-semibold ">
                    ${item.products.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold whitespace-nowrap">
                    ${(item.products.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between p-2">
          <h2 className="text-2xl">Total Amount: ${totalAmount.toFixed(2)}</h2>
          {/* Replace with actual total */}
          <div className="flex gap-2">
            <Link href="/store">
              <button className="btn btn-primary">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SuccessPage;
