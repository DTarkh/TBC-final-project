import { Link } from "@/i18n/routing";
import useOrders from "../../Components/Hooks/useOrders";
import { format } from "date-fns";
import { createClient } from "@/utils/supabase/server";

const newVersion = async () => {
    const orders = await useOrders();

    const supabase = await createClient();
  
    // Extract all product IDs from the orders
    const productIds = orders.flatMap((order) => order.product_id);
  
    // Fetch product details for the extracted product IDs
    const { data: products, error } = await supabase
      .from("products")
      .select("id, title_en, thumbnail, price")
      .in("id", productIds);


  return (
     <div className="flex flex-col">
                <div className="">
                  <p>Order Placed:</p>
                  <p>Total:</p>
                  <p></p>
                </div>
    
    
                <div className="bg-white">
    
    
                </div>
    
    
              </div>
    
  )
}

export default newVersion