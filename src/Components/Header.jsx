import swlogoblk from "../../src/Assets/SW-Pink.png";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header">
      <NavBar />
      <Link to="/home">
        <img rel="prefetch" src={swlogoblk} id="swLogo" alt="logo" />
      </Link>
    </div>
  );
}
export default Header;
