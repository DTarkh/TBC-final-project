import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { lineItems } = await req.json();

    if (!lineItems || !Array.isArray(lineItems) || lineItems.length === 0) {
      return NextResponse.json(
        {
          error: "Invalid or empty line items provided",
        },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:3000/en/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/en/checkout-cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error in POST /api/cart-checkout", error);

    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
