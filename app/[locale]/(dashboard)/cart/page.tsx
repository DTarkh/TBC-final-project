"use client";

import { Link } from "@/i18n/routing";
import { createClient } from "@/utils/supabase/client";
import CheckoutButton from "../../Components/CheckoutButton";
import { useCartContext } from "../../Components/Hooks/useCartContext";
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

const CartPage = () => {
  const { cartItemsNumber, totalPrice, cart, setCart } = useCartContext();

  const onDelete = async (productId: number) => {
    if (cart) {
      setCart(cart.filter((item) => item.product_id !== productId));
    }
    const supabase = createClient();
    const { data } = await supabase
      .from("cart")
      .delete()
      .eq("product_id", productId);
  };

  const onUpdate = async (productId: number, newQuantity: number) => {
    if (cart) {
      const updatedCart = cart.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
      setCart(updatedCart);
    }
    const supabase = createClient();
    const { data } = await supabase
      .from("cart")
      .update({ quantity: newQuantity })
      .eq("product_id", productId);
  };

  if (!cart || cart.length === 0) {
    return <div>Your cart is empty</div>;
  }
  return (
    <div className="w-full px-[10%] max-sm:px-[2%] py-10 mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        My Cart ({cartItemsNumber} items)
      </h1>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">Product Name</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                Quantity
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                Price per item
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                Total Price
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: CartItem) => (
              <tr key={item.id} className="border-t">
                <td className="px-6 py-4 flex items-center gap-2">
                  <Image
                    src={item.products.thumbnail}
                    alt={item.products.title_en}
                    className="w-16 h-16 object-cover rounded-lg"
                    width={100}
                    height={100}
                  />
                  {item.products.title_en}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  <form className="flex gap-2">
                    <input
                      type="number"
                      className="input w-[70px] border"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => {
                        const newQuantity = Number(e.target.value);
                        onUpdate(item.product_id, newQuantity);
                      }}
                    />
                  </form>
                </td>
                <td className="px-6 py-4 text-gray-700 font-semibold ">
                  ${item.products.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-gray-700 font-semibold whitespace-nowrap">
                  ${(item.products.price * item.quantity).toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <button
                    className="btn btn-error"
                    onClick={() => onDelete(item.product_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between p-2">
        <h2 className="text-2xl">Total Amount: ${totalPrice.toFixed(2)}</h2>
        {/* Replace with actual total */}
        <div className="flex gap-2">
          <Link href="/store">
            <button className="btn btn-primary">Continue Shopping</button>
          </Link>
          <CheckoutButton cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
