import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";

import { Item } from "../shared/interfaces";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

const CheckoutProduct = ({
  id,
  category,
  title,
  description,
  image,
  price,
  rating,
  prime,
  index,
}: Item) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      addToCart({
        id,
        category,
        title,
        description,
        image,
        price,
        rating,
        prime,
      })
    );
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart(index));
  };

  return (
    <div className="grid grid-cols-5 mb-10 mx-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <div className="font-semibold mb-2">
          <Currency quantity={price} currency="USD" />
        </div>

        {prime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
              alt="Prime Delivery"
              className="w-12"
            />
            <p className="text-xs text-gray-500">FREE One-Day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToCart}>
          Add to cart
        </button>
        <button className="button" onClick={removeItemFromCart}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
