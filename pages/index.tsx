import React from "react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

import Head from "../components/Head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { Item } from "../shared/interfaces";

type HomeProps = {
  products: Item[];
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
  const session = await getSession();
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: { products, session },
  };
};
