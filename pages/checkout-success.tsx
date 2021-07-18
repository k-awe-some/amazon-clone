import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/solid";

import Header from "../components/Header";

const CheckoutSuccess = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto mt-5">
        <div className="flex flex-col bg-white p-10">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us! We'll let you know once the item(s)
            have shipped.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default CheckoutSuccess;
