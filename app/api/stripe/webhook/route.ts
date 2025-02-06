// ./app/api/stripe-webhook/route.ts
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/utils/supabase/server';

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(request: Request) {
    const supabase = await createClient();
    const sig = request.headers.get('stripe-signature');
    const body = await request.text();

    let event;

    try {
        event = stripe.webhooks.constructEvent(body, sig!, webhookSecret);
    } catch (err: any) {
        console.error(`❌ Webhook Error: ${err.message}`);
        return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
    }

    console.log(`✅ Received Stripe Event: ${event.type}`);

    try {
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = await stripe.checkout.sessions.retrieve(
                    event.data.object.id,
                    { expand: ['customer'] }
                );

                const customerEmail = session.customer_details?.email; // ✅ Corrected
                if (!customerEmail) {
                    console.warn('⚠️ No email found in session');
                    return NextResponse.json({ error: 'No email found' }, { status: 400 });
                }

                console.log(`📩 Customer Email: ${customerEmail}`);

                // ✅ Update Supabase 'users' table to set subscription status
                const { error } = await supabase
                    .from('user')
                    .update({ issubscribed: true }) // Assuming `subscription` is a boolean column
                    .eq('email', customerEmail);

                if (error) {
                    console.error('❌ Supabase Update Error:', error.message);
                    return NextResponse.json({ error: 'Failed to update subscription' }, { status: 500 });
                }

                console.log(`✅ Subscription activated for ${customerEmail}`);
                break;
            }

            case 'customer.subscription.deleted': {
                const customerId = event.data.object.customer as string;
                const customer = await stripe.customers.retrieve(customerId);
                const customerEmail = (customer as any).email;

                if (!customerEmail) {
                    console.warn('⚠️ No email found for canceled subscription');
                    return NextResponse.json({ error: 'No email found' }, { status: 400 });
                }

                console.log(`📩 Revoking subscription for ${customerEmail}`);

                // ❌ Revoke subscription in Supabase
                const { error } = await supabase
                    .from('user')
                    .update({ issubscribed: false })
                    .eq('email', customerEmail);

                if (error) {
                    console.error('❌ Supabase Update Error:', error.message);
                    return NextResponse.json({ error: 'Failed to revoke subscription' }, { status: 500 });
                }

                console.log(`✅ Subscription revoked for ${customerEmail}`);
                break;
            }

            default:
                console.log(`⚠️ Unhandled event type: ${event.type}`);
        }
    } catch (error: any) {
        console.error(`❌ Error handling event: ${error.message}`);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ received: true });
}