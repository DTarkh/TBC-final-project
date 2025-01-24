import { Link } from "@/i18n/routing";
import { fetchCartServerSide } from "../../Components/Hooks/useCartServer";
import { fetchSessionDetails } from "./OrderDetails";
import { OrderDetails } from "./OrderDetails";
import { format } from "date-fns";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

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

interface Props {
  searchParams: any;
}

const SuccessPage = async ({ searchParams }: Props) => {
  const { session_id } = searchParams;
  console.log("session ID:", session_id);
  const orderDetails = await fetchSessionDetails(session_id);
  const cart = await fetchCartServerSide();

  const totalAmount = cart
    ? cart.reduce(
        (total, item) => total + item.products.price * item.quantity,
        0
      )
    : 0;

  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  const { data: existingOrder } = await supabase
    .from("orders")
    .select("*")
    .eq("stripe_purchase_id", orderDetails?.stripe_purchase_id)
    .single();

  if (!existingOrder) {
    const { data, error } = await supabase.from("orders").insert({
      user_id: user.data.user?.id,
      product_id: cart.map((item) => item.product_id),
      stripe_product_id: orderDetails?.line_items.map(
        (lineItem) => lineItem.stripe_product_id
      ),
      stripe_price_id: orderDetails?.line_items.map(
        (lineItem) => lineItem.stripe_price_id
      ),
      stripe_purchase_id: orderDetails?.stripe_purchase_id,
      quantity: cart.map((item) => item.quantity),
    });
    if (error) {
      console.error("Error inserting order:", error.message);
    } else {
      console.log("Order inserted successfully:", data);
      // Clear the cart table after successful order creation
      const { error: clearError } = await supabase
        .from("cart")
        .delete()
        .eq("user_id", user.data.user?.id);

      if (clearError) {
        console.error("Error clearing cart:", clearError.message);
      } else {
        console.log("Cart cleared successfully.");
      }
    }
  }

  if (cart && orderDetails)
    return (
      <div className="w-full px-[10%] max-sm:px-[2%] py-10">
        {/* <pre>{JSON.stringify(orderDetails, null, 2)}</pre> */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Order Summary
          </h1>
          <h2>
            Created at:
            {cart.length > 0
              ? format(new Date(cart[0].created_at), "MMMM do, yyyy h:mm a")
              : "No items in the cart"}
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                  Product title:{" "}
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap"></th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                  Quantity
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                  Price per item
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                  Total Price
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                  Stripe Product ID
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                  Stripe Price ID
                </th>

                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                  Purchase ID
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item: CartItem, index) => (
                <tr key={item.id} className="border-t">
                  <td className="pl-6 py-4">
                    <Image
                      src={item.products.thumbnail}
                      alt={item.products.title_en}
                      className="w-16 h-16 object-cover rounded-lg"
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className="py-4 text-gray-700">
                    {item.products.title_en}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{item.quantity}</td>
                  <td className="px-6 py-4 text-gray-700 font-semibold ">
                    ${item.products.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold whitespace-nowrap">
                    ${(item.products.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold">
                    {orderDetails.line_items[index]?.stripe_product_id || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold">
                    {orderDetails.line_items[index]?.stripe_price_id || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold">
                    {orderDetails.stripe_purchase_id}
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
