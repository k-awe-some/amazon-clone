import Image from "next/image";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

import { selectItems, selectTotal } from "../store/slices/cartSlice";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";

const Checkout = () => {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5">
          <Image
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white mx-3.5">
            <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>

            <div>
              {items.map(
                (
                  {
                    id,
                    category,
                    title,
                    description,
                    image,
                    price,
                    rating,
                    prime,
                  },
                  index
                ) => (
                  <CheckoutProduct
                    key={index}
                    id={id}
                    category={category}
                    title={title}
                    description={description}
                    image={image}
                    price={price}
                    rating={rating}
                    prime={prime}
                    index={index}
                  />
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white mx-8 my-5 p-5">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal: ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to check out" : "Proceed to check out"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
