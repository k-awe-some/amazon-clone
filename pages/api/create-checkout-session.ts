import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";

import { Item } from "../../shared/interfaces";

type ReqBody = {
  items: Item[];
  email: string;
};

type ResData = {
  id: string;
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

export default async (req: NextApiRequest, res: NextApiResponse<ResData>) => {
  const { items, email } = req.body as ReqBody;

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
    (item) => ({
      description: item.description,
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          images: [item.image],
        },
      },
    })
  );

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1J1IaeJO0bD5oR5UWfnR94g9"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.HOST}/checkout-success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
