import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/client";
import moment from "moment";
import Stripe from "stripe";

import Header from "../components/Header";
import { Order } from "../shared/interfaces";
import db from "../firebase";

type OrdersProps = {
  orders: Order[];
};

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  console.log(orders);
  const [session] = useSession();

  return (
    <div>
      <Header />

      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          My orders
        </h1>

        {session ? (
          <h2>x orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
      </main>
    </div>
  );
};

export default Orders;

// pre-fetch orders server-side
// anything in getServerSideProps() is node.js
export const getServerSideProps: GetServerSideProps = async (context) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27",
  });

  // get user
  const session = await getSession(context);

  if (!session) return { props: {} };

  // Firebase db
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  // retrieve Stripe orders
  // loop thru stripeOrders and get data for each order async
  // Promise.all only resolves once all promises resolve
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, { limit: 100 })
      ).data,
    }))
  );

  return {
    props: { orders },
  };
};
