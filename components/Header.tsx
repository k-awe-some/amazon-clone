import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
