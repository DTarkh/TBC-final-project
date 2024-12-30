
import { stripe } from "@/lib/stripe";

interface LineItem {
  stripe_product_id: string | null;
  stripe_price_id: string | null;
  quantity: number;
}

interface OrderDetails {
  stripe_purchase_id: string;
  stripe_customer_id: string | null;
  payment_status: string;
  line_items: LineItem[];
}


export async function fetchSessionDetails(session_id: string): Promise<OrderDetails | null> {
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const lineItems = await stripe.checkout.sessions.listLineItems(session_id);

    return {
      stripe_purchase_id: session.id,
      stripe_customer_id: session.customer as string | null,
      payment_status: session.payment_status,
      line_items: lineItems.data.map((item) => ({
        stripe_product_id: item.price?.product as string | null,
        stripe_price_id: item.price?.id as string | null,
        quantity: item.quantity || 0,
      })),
    };
  } catch (error) {
    console.error("Error fetching Stripe session details:", error);
    return null;
  }
}

export default async function OrderSuccessPage({ searchParams }: { searchParams: { session_id?: string } }) {
  const session_id = searchParams.session_id;

  if (!session_id) {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Order Success</h1>
        <p>Invalid session ID. Please check your order details.</p>
      </div>
    );
  }

  const orderDetails = await fetchSessionDetails(session_id);

  if (!orderDetails) {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Order Success</h1>
        <p>Failed to fetch order details. Please contact support.</p>
      </div>
    );
  }

  

  return orderDetails;
}