import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";

import { addToCart } from "../store/slices/cartSlice";

export type ProductProps = {
  id?: number;
  category: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product: React.FC<ProductProps> = ({
  id,
  category,
  title,
  description,
  image,
  price,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [prime, setPrime] = useState<boolean>(false);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart({ id, category, title, description, image, price }));
  };

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setPrime(Math.random() < 0.5);
  }, [rating]);

  return (
    <div className="relative px-0 py-10 sm:px-10 bg-white z-30">
      <div className="h-full w-4/5 sm:w-full m-auto flex flex-col">
        <p className="absolute top-2 right-2 text-sm italic text-gray-400 z-30">
          {category}
        </p>

        <Image src={image} width={200} height={200} objectFit="contain" />

        <h4 className="my-3 font-semibold">{title}</h4>
        <div className="flex">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-sm my-2 line-clamp-2">{description}</p>
        <div className="font-semibold mb-2">
          <Currency quantity={price} currency="USD" />
        </div>

        {prime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
              alt="Prime Delivery"
              className="w-12"
            />
            <p className="text-xs text-gray-500">FREE One-Day Delivery</p>
          </div>
        )}

        <button className="mt-auto button" onClick={addItemToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
