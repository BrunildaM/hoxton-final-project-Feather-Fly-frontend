import { Link, useNavigate } from "react-router-dom";
import { Buttons } from "./Buttons";
import "./css/SignInForm.css";
import { API } from "./types";

type Props = {
  signIn: (data: any) => void;
};

export function SignInForm({ signIn }: Props) {
  const navigate = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    fetch(`${API}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data: any) => {
        if (data.error) {
          alert(data.error);
        } else {
          signIn(data);
          navigate(`/users/${data.user.id}`);
        }
      });
  }

  return (
    <div className="sign-in-page">
      <section className="forms-section">
        <h1 className="section-title">Welcome!</h1>
        <div className="forms">
          <form
            className="form-section"
            onSubmit={(event) => handleSubmit(event)}
          >
            <input type="email" placeholder="Email" name="email" required />
            <p></p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <Buttons variant="signIn">Sign In</Buttons>
          </form>
        </div>
        <p>
          Don't have an account <Link to={"/signUp"}>Sign up</Link>
        </p>
      </section>
    </div>
  );
}
