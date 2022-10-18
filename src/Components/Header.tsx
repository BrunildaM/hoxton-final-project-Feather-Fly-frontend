import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { Buttons } from "./Buttons";
import "./css/Header.css";

export function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
        </Link>
        <h1 className="moto">FEATHER FLY, REACH THE SKY!</h1>


        {/* <li>
      <a href="#0">Clients</a>
      <ul>
        <li><a href="#0">Burger King</a></li>
        <li><a href="#0">Southwest Airlines</a></li>
        <li><a href="#0">Levi Strauss</a></li>
      </ul>
    </li> */}
        
      <span className="dropdown"> 
        <img
        className="userLogo"
        src="https://www.kindpng.com/picc/m/235-2350682_new-svg-image-small-user-login-icon-hd.png"
        alt="user"
      /> My account
      <div className="dropdown-content">
        <ul>
          <li className="dropdown-sub-item">
      <Link className="link" to={`/signIn`}>
      <Buttons variant="signIn">Sign in</Buttons>
      </Link>
      </li>
      <li>
      <Link className="link" to={`/signUp`}>
      <Buttons variant="signUp">Sign up</Buttons>
      </Link>
      </li>
      </ul>

      </div>
       </span>
    </div>
  );
}
