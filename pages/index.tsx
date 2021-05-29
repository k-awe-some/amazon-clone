import Head from "../components/Head";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default () => (
  <div className="bg-gray-100">
    <Head title="Amazon Clone" />

    <Header />

    <main className="max-w-screen-2xl mx-auto">
      <Banner />
    </main>
  </div>
);
