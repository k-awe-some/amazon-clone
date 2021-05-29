import React from "react";

import Product, { ProductProps } from "./Product";

type ProductFeedProps = {
  products: ProductProps[];
};

const ProductFeed: React.FC<ProductFeedProps> = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map(({ id, category, title, description, image, price }) => (
        <Product
          key={id}
          category={category}
          title={title}
          description={description}
          image={image}
          price={price}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
