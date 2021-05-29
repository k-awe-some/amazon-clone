import React from "react";
import { GetServerSideProps } from "next";

import Head from "../components/Head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { ProductProps } from "../components/Product";

type HomeProps = {
  products: ProductProps[];
};

const Home: React.FC<HomeProps> = ({ products }) => (
  <div className="bg-gray-100">
    <Head title="Amazon Clone" />

    <Header />

    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      <ProductFeed products={products} />
    </main>
  </div>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
};
