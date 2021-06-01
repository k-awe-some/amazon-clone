import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

type HeaderTopProps = {};

const HeaderTop = (props: HeaderTopProps) => {
  const [session] = useSession();
  const router = useRouter();

  return (
    <div className="flex items-center bg-amazon_blue px-5 py-2 flex-grow">
      {/* Logo */}
      <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
        <Image
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          layout="intrinsic"
          width={150}
          height={55.5}
          objectFit="contain"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Search */}
      <div className="hidden sm:flex items-center h-10 ml-2 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 transition-all cursor-pointer">
        <input
          type="text"
          className="p-2 outline-none h-full flex-grow flex-shrink rounded-l-md"
        />
        <SearchIcon className="h-12 p-3" />
      </div>

      {/* Items */}
      <div className="text-white flex items-center text-sm space-x-4 ml-6">
        <div className="link">
          <p>Hello, {session ? session.user.name : "Sign in"}</p>
          <p
            className="font-extrabold md:text-sm"
            onClick={!session ? signIn : signOut}
          >
            Account
          </p>
        </div>

        <div className="link">
          <p>Returns</p>
          <p className="font-extrabold md:text-sm">& Orders</p>
        </div>

        <div
          className="link relative flex items-end"
          onClick={() => router.push("/checkout")}
        >
          <span className="absolute top-0 right-0 md:right-6 h-5 w-5 bg-yellow-400 text-center rounded-full text-black">
            0
          </span>
          <ShoppingCartIcon className="h-10" />
          <p className="hidden md:inline font-extrabold md:text-sm">Cart</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
