import { useNavigate } from "react-router-dom";
import { Buttons } from "./Buttons";

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
    const API = "http://localhost:4000";


      fetch(`${API}/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      .then(res => res.json())
     .then((data: any) => {
        if (data.error) {
          alert(data.error);
        } else {
          signIn(data);
          if (data.user.role !== "admin") {
            navigate("/users/:id");
          } else if (data.user.role === "admin") {
            navigate("/admins/:id");
          } else {
            navigate("/home");
          }
        }
      })
    }

  return (
    <div className="sign-in-page">
      <div className="form-container">
       
        <form
          className="form-section"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <Buttons variant="signIn">
            Sign In
          </Buttons>
        </form>

        {/* <div className="or-div">
          <hr />
          OR
          <hr />
        </div>
        <div>
          <form
            className="create-account-section"
            onSubmit={(event) => {
              event.preventDefault();
              localStorage.newUserEmail = event.currentTarget.email.value;
              navigate("/select-role");
            }}
          >
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input id="email" type="email" name="email" required />
            <Buttons variant="signUp">
              Create Account
            </Buttons>
          </form>
        </div> */}
      </div>
    </div>
  );
}
