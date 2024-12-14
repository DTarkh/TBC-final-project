"use client"; // If using app directory

import { useEffect, useState } from "react";

interface CartItem {
  id: number;
  cart: number;
  product: Product;
  quantity: number;
  total: number;
}

interface Cart {
  id: number;
  user: number;
  items: CartItem[];
}
interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

const Page = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch("http://127.0.0.1:8000/orders/cart/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }

        const data = await response.json();
        setCart(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "An unexpected error occurred.");
      }
    };

    fetchCart();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cart) {
    return <div>Loading...</div>;
  }


 
  return (
    <div className="w-[60vw] p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h1>
      {cart.items.length > 0 ? (
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
              {cart.items.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-6 py-4">
                    <img
                      src={item.product.thumbnail}
                      alt={item.product.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {item.product.title}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <form
                      className="flex "
                    >
                      <input
                        type="number"
                        className="input w-[70px] border"
                        value={item.quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1" 
                      />
                      <button className="btn btn-primary" type="submit">
                        Update
                      </button>
                    </form>
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold">
                    ${item.total.toFixed(2)}
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
    </div>
  );
};

export default Page;
