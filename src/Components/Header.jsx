import swlogoblk from "../../src/Assets/SW_Black.png";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header">
      <NavBar />

      <img src={swlogoblk} id="swLogo" />
    </div>
  );
}
export default Header;
