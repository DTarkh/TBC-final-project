import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET(req: NextRequest) {
  // Extract query parameters
  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get("session_id");

  // Validate the session_id parameter
  if (!session_id || typeof session_id !== "string") {
    return NextResponse.json({ error: "Invalid session ID" }, { status: 400 });
  }

  try {
    // Fetch session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const lineItems = await stripe.checkout.sessions.listLineItems(session_id);

    // Respond with session and line item details
    return NextResponse.json(
      {
        stripe_purchase_id: session.id,
        stripe_customer_id: session.customer,
        payment_status: session.payment_status,
        line_items: lineItems.data.map((item) => ({
          stripe_product_id: item.price?.product,
          stripe_price_id: item.price?.id,
          quantity: item.quantity,
        })),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching session details:", error);
    return NextResponse.json(
      { error: "Failed to fetch session details" },
      { status: 500 }
    );
  }
}