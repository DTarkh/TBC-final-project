import { NextApiRequest, NextApiResponse } from "next";
import { stripe }  from "@/lib/stripe"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { userId, email, priceId } = req.body;

      // Create a Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "subscription", // Use "payment" for one-time purchases
        customer_email: email,
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: `${process.env.NEXT_PUBLIC_API_URL}/en/subscription-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/en/subscription-cancel`,
        metadata: { userId },
      });

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      console.error("Stripe checkout session error:", error);
      res.status(500).json({ error: "Unable to create checkout session" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}