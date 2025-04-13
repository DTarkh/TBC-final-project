import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import useCart, { CartItem } from "../Hooks/useCart";
import { createClient } from "@/utils/supabase/client";

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
  onUpdate: (productId: number, newQuantity: number) => void;
  onDelete: (productId: number) => void;
}

export const CartItemsContext = createContext<CartItems>({} as CartItems);

const CartItemsProvider = ({ children }: Props) => {
  const { cart, setCart } = useCart();
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  
  const onDelete = async (productId: number) => {
    if (cart) {
      setCart(cart.filter((item) => item.product_id !== productId));
      
    }
    const supabase = createClient();
    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("product_id", productId);
      if(error) {
        console.error("Error deleting item:", error.message);
      }
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
    await supabase
      .from("cart")
      .update({ quantity: newQuantity })
      .eq("product_id", productId);
  };

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



  const ctxValues = {
    cart,
    setCart,
    cartItemsNumber,
    setCartItemsNumber,
    totalPrice,
    setTotalPrice,
    onUpdate,
    onDelete
  }
  return (
    <CartItemsContext.Provider
      value={ctxValues}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsProvider;
