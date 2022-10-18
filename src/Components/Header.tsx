import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
        </Link>
        <h1 className="moto">FEATHER FLY, REACH THE SKY!</h1>
   
      <img
        className="userLogo"
        src="https://www.kindpng.com/picc/m/235-2350682_new-svg-image-small-user-login-icon-hd.png"
        alt="user"
      />
    </div>
  );
}
