// import { createClient } from "@/utils/supabase/server";
// import { stripe } from "@/lib/stripe";

// interface LineItem {
//   stripe_product_id: string | null;
//   stripe_price_id: string | null;
//   quantity: number;
// }

// interface OrderDetails {
//   stripe_purchase_id: string;
//   stripe_customer_id: string | null;
//   payment_status: string;
//   line_items: LineItem[];
// }


// async function fetchSessionDetails(session_id: string): Promise<OrderDetails | null> {
//   try {
//     const session = await stripe.checkout.sessions.retrieve(session_id);
//     const lineItems = await stripe.checkout.sessions.listLineItems(session_id);

//     return {
//       stripe_purchase_id: session.id,
//       stripe_customer_id: session.customer as string | null,
//       payment_status: session.payment_status,
//       line_items: lineItems.data.map((item) => ({
//         stripe_product_id: item.price?.product as string | null,
//         stripe_price_id: item.price?.id as string | null,
//         quantity: item.quantity || 0,
//       })),
//     };
//   } catch (error) {
//     console.error("Error fetching Stripe session details:", error);
//     return null;
//   }
// }

// export default async function OrderSuccessPage({ searchParams }: { searchParams: { session_id?: string } }) {
//   const session_id = searchParams.session_id;

//   if (!session_id) {
//     return (
//       <div className="max-w-2xl mx-auto p-8">
//         <h1 className="text-2xl font-bold mb-4">Order Success</h1>
//         <p>Invalid session ID. Please check your order details.</p>
//       </div>
//     );
//   }

//   const orderDetails = await fetchSessionDetails(session_id);

//   if (!orderDetails) {
//     return (
//       <div className="max-w-2xl mx-auto p-8">
//         <h1 className="text-2xl font-bold mb-4">Order Success</h1>
//         <p>Failed to fetch order details. Please contact support.</p>
//       </div>
//     );
//   }

  

//   return (
//     <div className="max-w-2xl mx-auto p-8">
//       <h1 className="text-2xl font-bold mb-4">Order Success</h1>
//       <p>Thank you for your purchase! Your order was successful.</p>
//       <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(orderDetails, null, 2)}</pre>
//     </div>
//   );
// }

"use client";

import { Link } from "@/i18n/routing";
import { createClient } from "@/utils/supabase/client";
import useCart from "../../Components/Hooks/useCart";


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

const Page = () => {
  const { cart } = useCart();

  const totalAmount = cart
  ? cart.reduce((total, item) => total + item.products.price * item.quantity, 0)
  : 0;

  if (cart)
  return (
    <div className="w-full px-[10%] py-10 mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h1>
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
                  <td className="px-6 py-4 text-gray-700">
                  {item.quantity}
                  </td>
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
        <h2 className="text-2xl">Total Amount: ${(totalAmount).toFixed(2)}</h2>
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

export default Page;
