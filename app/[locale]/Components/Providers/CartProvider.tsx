import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import useCart, { CartItem } from "../Hooks/useCart";

interface Props {
  children: ReactNode;
}

interface CartItems {
  cartItemsNumber: number;
  totalPrice: number;
  setCartItemsNumber: Dispatch<SetStateAction<number>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  cart: CartItem[] | undefined;
  setCart: Dispatch<SetStateAction<CartItem[] | undefined>>;
}

export const CartItemsContext = createContext<CartItems>({} as CartItems);

const CartItemsProvider = ({ children }: Props) => {
  const { cart, setCart } = useCart();
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = cart.reduce(
        (total, item) => total + item.products.price * item.quantity,
        0
      );
      setCartItemsNumber(totalItems);
      setTotalPrice(totalAmount);
    } else {
      setCartItemsNumber(0);
      setTotalPrice(0);
    }
  }, [cart]);
  return (
    <CartItemsContext.Provider
      value={{
        cart,
        setCart,
        cartItemsNumber,
        setCartItemsNumber,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsProvider;
