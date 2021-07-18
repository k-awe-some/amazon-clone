import type { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import * as admin from "firebase-admin";
import Stripe from "stripe";

import serviceAccount from "../../serviceAccountKey.json";

// secure a connection to Firebase from backend
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    })
  : admin.app();

// establish connection to Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // parse incoming request body
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();

    // verify POST event is coming from Stripe
    const sig = req.headers["stripe-signature"];
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
      return res.status(400).send(`Webhook Error: ${error.message}`);
    }
  }
};
