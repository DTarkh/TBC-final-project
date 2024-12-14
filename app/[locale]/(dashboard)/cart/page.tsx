"use client"; 

import { useState } from "react";
import useCart from "../../Components/Hooks/useCart";


const Page = () => {
  const { cart, setCart, error } = useCart();
  // const [quantity, setQuantity] = useState<number>(1);

  const onDelete = (id: number) => {
    if (cart) {
      const updatedItems = cart.items.filter((item) => item.id !== id);
      setCart({ ...cart, items: updatedItems });

      const token = localStorage.getItem("token");

    
      fetch(`http://127.0.0.1:8000/orders/cart/delete/${id}/`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to delete item");
          }
        })
        .catch((err) => console.error("Error deleting item:", err));
    }
  };



  const onUpdate = async (id: number, newQuantity: number) => {
    if (cart) {
      // Update cart locally (optimistic update)
      const updatedItems = cart.items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      console.log("New Quantity:", newQuantity);
      setCart({ ...cart, items: updatedItems });
  
      // Get the token
      const token = localStorage.getItem("token");
  
      try {
        // Make the API request to update the cart item
        const response = await fetch(`http://127.0.0.1:8000/orders/cart/update/${id}/`, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "quantity": newQuantity }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to update item quantity");
        }
  
        console.log("Item updated successfully");
      } catch (error) {
        console.error("Error updating item:", error);
        
       
      }
    }
  };
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
                    <form className="flex gap-2">
                      <input
                        type="number"
                        className="input w-[70px] border"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQuantity = Number(e.target.value);
                        
                          onUpdate(item.id, newQuantity);
                        }}
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
                    <button
                      className="btn btn-error"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </button>
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