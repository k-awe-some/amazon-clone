import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
