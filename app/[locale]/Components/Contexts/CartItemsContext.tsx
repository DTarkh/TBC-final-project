import { createContext } from "react";


interface CartItems{
    cartItemsNumber: number;
    
}

export const CartItemsContext = createContext<CartItems | undefined>(undefined)

