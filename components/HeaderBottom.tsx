import { MenuIcon } from "@heroicons/react/outline";

type HeaderBottomProps = {};

const HeaderBottom = (props: HeaderBottomProps) => {
  return (
    <div className="flex items-center space-x-3 bg-amazon_blue-light text-white text-sm px-5 py-2">
      <p className="link flex items-center">
        <MenuIcon className="h-6 mr-1" />
        All
      </p>
      <p className="link">Customer Service</p>
      <p className="link">Today's Deals</p>
      <p className="link">Best Sellers</p>
      <p className="link hidden md:inline-flex">Buy Again</p>
      <p className="link hidden md:inline-flex">Gift Ideas</p>
      <p className="link hidden lg:inline-flex">Gift Cards</p>
      <p className="link hidden lg:inline-flex">Amazon Business</p>
    </div>
  );
};

export default HeaderBottom;
