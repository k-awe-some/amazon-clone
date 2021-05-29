import TopNav from "./HeaderTop";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <header>
      {/* Bottom nav */}
      <TopNav />
      Header
    </header>
  );
};

export default Header;
