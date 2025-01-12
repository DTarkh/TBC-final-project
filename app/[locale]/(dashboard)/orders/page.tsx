import { Link } from "@/i18n/routing";
import useOrders from "../../Components/Hooks/useOrders";
import { format } from "date-fns";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

const OrdersPage = async () => {
  const orders = await useOrders();

  const supabase = await createClient();

  // Extract all product IDs from the orders
  const productIds = orders.flatMap((order) => order.product_id);

  // Fetch product details for the extracted product IDs
  const { data: products, error } = await supabase
    .from("products")
    .select("id, title_en, thumbnail, price")
    .in("id", productIds);

  if (error) {
    console.error("Error fetching products:", error.message);
    return <div>Error loading orders</div>;
  }

  return (
    <div className="w-full px-[10%] max-sm:px-[2%] py-10 mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h1>
      {orders
      .slice() 
      .reverse()
      .map((order) => {
        // Filter products for the current order
        const filteredProducts = products.filter((product) =>
          order.product_id.includes(product.id)
        );

        return (
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
                      Price
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                      Quantity
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                      Total price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => {
                    // Get the index of the product in the order's product_id array
                    const index: number = order.product_id.indexOf(product.id);

                    // Use the index to get the correct quantity
                    const quantity = order.quantity[index];

                    return (
                      <tr key={product.id} className="border-t">
                        <td className="px-6 py-4 text-gray-700 flex items-center gap-2">
                          <Image
                            src={product.thumbnail}
                            alt={product.title_en}
                            className="w-16 h-16 object-cover rounded-lg"
                            width={100}
                            height={100}
                          />
                          {product.title_en}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          ${(product.price).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{quantity}</td>
                        <td className="px-6 py-4 text-gray-700">
                          ${(product.price * quantity).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
      <div className="flex justify-end">
        <Link href="/store">
          <button className="btn btn-primary">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default OrdersPage;
