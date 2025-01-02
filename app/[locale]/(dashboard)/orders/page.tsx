import { Link } from "@/i18n/routing";
import useOrders from "../../Components/Hooks/useOrders";
import { format } from "date-fns";
import { createClient } from "@/utils/supabase/server";

const OrdersPage = async () => {
  const orders = await useOrders();

  const supabase = await createClient();

  // Extract all product IDs from the orders
  const productIds = orders.flatMap((order) => order.product_id);

  // Fetch product details for the extracted product IDs
  const { data: products, error } = await supabase
    .from("products")
    .select("id, title_en, thumbnail")
    .in("id", productIds);

  if (error) {
    console.error("Error fetching products:", error.message);
    return <div>Error loading orders</div>;
  }

  return (
    <div className="w-full px-[10%] py-10 mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h1>
      {orders.map((order) => (
        <div key={order.id} className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Order ID: {order.id}
            </h2>
            <p className="text-sm text-gray-500">
              Created at:{" "}
              {format(new Date(order.created_at), "MMMM do, yyyy h:mm a")}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                    Product Title
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                    Thumbnail
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Additional rows can be added later */}
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-700">
                    {/* Placeholder for product title */}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {/* Placeholder for product thumbnail */}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {/* Placeholder for quantity */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <Link href="/store">
          <button className="btn btn-primary">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default OrdersPage;