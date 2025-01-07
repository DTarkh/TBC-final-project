import { useContext } from "react";
import { CartItemsContext } from "../Contexts/CartItemsContext";

export const useCartContext =() => {
    const data = useContext(CartItemsContext)

    if (!data) {
        throw new Error("useCartContext must be used within a CartItemsProvider");
    }

    return data;
}