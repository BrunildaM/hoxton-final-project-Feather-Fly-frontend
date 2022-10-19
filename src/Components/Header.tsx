import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { Buttons } from "./Buttons";
import "./css/Header.css";
import { User } from "./types";

type Props = {
  currentUser: User | null;
  signOut: () => void
};

export function Header({ currentUser, signOut }: Props) {

  let userId = 0;
  if (currentUser != null) {
    userId = currentUser.id; 
  }
  console.log(userId)
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <h1 className="moto">FEATHER FLY, REACH THE SKY!</h1>

      <span className="dropdown">
        <img
          className="userLogo dropbtn"
          src="https://www.kindpng.com/picc/m/235-2350682_new-svg-image-small-user-login-icon-hd.png"
          alt="user"
        />
        <span className="my-account">My account</span>
        <div className="dropdown-content">

          {userId === 0 ? (
            <>
              <Link className="link" to={`/signIn`}>
                <Buttons variant="signIn">Sign in</Buttons>
              </Link>
              <Link className="link" to={`/signUp`}>
                <Buttons variant="signUp">Sign up</Buttons>
              </Link>{" "}
            </>
          ) : (
            <Link className="link" to={`/home`}>
              <button onClick={signOut}>Log out</button>
            </Link>
          )}
        </div>
      </span>
    </div>
  );
}
