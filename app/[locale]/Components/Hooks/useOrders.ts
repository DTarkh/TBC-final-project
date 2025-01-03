
export interface OrderItem {
    id: number;
    created_at: string;
    product_id: number[];
    user_id: string;
    stripe_product_id: string[];
    stripe_price_id: string[];
    stripe_purchase_id: string;
    quantity: number[];
  }

const useOrders = async (): Promise<OrderItem[]> => {

 const response = await fetch("http://localhost:3000/api/orders");
    if (!response.ok) {
      throw new Error("Failed to fetch cart data");
    }
    
    const orders: OrderItem[] = await response.json();
   
   
    return orders;
 


}

export default useOrders