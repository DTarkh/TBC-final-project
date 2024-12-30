


export interface CartItem {
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

export const fetchCartServerSide = async (): Promise<CartItem[]> => {
 
    const response = await fetch("http://localhost:3000/api/cart");
    if (!response.ok) {
      throw new Error("Failed to fetch cart data");
    }
    
    const cart: CartItem[] = await response.json();
    return cart;
 


  }

