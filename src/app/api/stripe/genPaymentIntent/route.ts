import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type Item = {
  id: string;
  quantity: number;
  // this will change
};

const calculateOrderAmount = (items: Item[]): number => {
  // wip, prisma soon
  const amount = /* placeholder currently */ (10000.00 * 100); // it is in cents (14€)

  return amount;
};

export async function POST(req: Request) {
  try {
    const { items }: { items: Item[] } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "eur",
      automatic_payment_methods: {
        enabled: false,
      },
      payment_method_types: ["card", "alipay", "wechat_pay", "paypal", "mobilepay", "klarna"]
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: paymentIntent.amount
    });

  } catch (error) {
    console.error("Error creating a payment intent:", error);
    return NextResponse.json({
      error: "An error occurred while creating the payment intent using Stripe, please try again soon. This is not your problem, but rather a problem with us or Stripe.",
    }, {
      status: 500,
    });
  }
}
