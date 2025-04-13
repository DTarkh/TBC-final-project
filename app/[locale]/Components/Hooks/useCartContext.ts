import { useContext } from "react";
import { CartItemsContext } from "../Providers/CartProvider";

export const useCartContext =() => {
    const data = useContext(CartItemsContext)

    if (!data) {
        throw new Error("useCartContext must be used within a CartItemsProvider");
    }

    return data;
}