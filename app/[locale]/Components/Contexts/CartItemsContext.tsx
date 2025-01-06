import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { CartItem } from "../Hooks/useCart";


interface CartItems {
  cartItemsNumber: number;
  totalPrice: number;
  setCartItemsNumber: Dispatch<SetStateAction<number>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  cart: CartItem[] | undefined;
  setCart: Dispatch<SetStateAction<CartItem[] | undefined>>;
}

export const CartItemsContext = createContext<CartItems | undefined>(undefined);


export const useCartContext =() => {
    const data = useContext(CartItemsContext)

    if (!data) {
        throw new Error("useCartContext must be used within a CartItemsProvider");
    }

    return data;
}