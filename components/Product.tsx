import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

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
  category,
  title,
  description,
  image,
  price,
}) => {
  const [rating, setRating] = useState(0);
  const [prime, setPrime] = useState(false);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setPrime(Math.random() < 0.5);
  }, [rating]);

  return (
    <div>
      <p>{category}</p>

      <Image src={image} width={200} height={200} />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(null)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p>{description}</p>
      <div>
        <Currency quantity={price} currency="USD" />
      </div>

      {prime && (
        <div>
          <img
            src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
            alt="Prime Delivery"
          />
        </div>
      )}

      <button>Add to cart</button>
    </div>
  );
};

export default Product;
