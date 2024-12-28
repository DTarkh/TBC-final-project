import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "@/lib/stripe";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { session_id } = req.query;

  if (!session_id || typeof session_id !== "string") {
    return res.status(400).json({ error: "Invalid session ID" });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const lineItems = await stripe.checkout.sessions.listLineItems(session_id);

    res.status(200).json({
      stripe_purchase_id: session.id,
      stripe_customer_id: session.customer,
      payment_status: session.payment_status,
      line_items: lineItems.data.map((item) => ({
        stripe_product_id: item.price?.product,
        stripe_price_id: item.price?.id,
        quantity: item.quantity,
      })),
    });
  } catch (error) {
    console.error("Error fetching session details:", error);
    res.status(500).json({ error: "Failed to fetch session details" });
  }
}