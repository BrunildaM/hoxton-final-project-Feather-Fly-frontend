import { useNavigate } from "react-router-dom";
import "./css/SignUpForm.css" 
import { API } from "./types";

type Props = {
  signIn: (data: any) => void;
};

export function SignUpForm({ signIn }: Props) {
  const navigate = useNavigate()
  return (
    //gender and role is missing
    <section className="body">
      <div className="container">
        <h1>Sign Up Today!</h1>
        <form
          className="form"
          onSubmit={(event: any) => {
            const newUser = {
              firstName: event.target.firstName.value,
              lastName: event.target.lastName.value,
              age: Number(event.target.age.value),
              email: event.target.email.value,
              password: event.target.password.value,
              gender: event.target.gender.value,
            };
            event.preventDefault();
            fetch(`${API}/sign-up`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.error) {
                  alert(data.error);
                } else {
                  signIn(data);
                  navigate('/signIn')
                }
              });
          }}
        >
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              required
              minLength={3}
              maxLength={100}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              required
              minLength={3}
              maxLength={100}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Age"
              required
              title="You should be atleast 18 years old"
              min={18}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@address.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password1">Password</label>
            <input
              type="password"
              id="password1"
              placeholder="Create Password (Min. 8 characters)"
              required
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              placeholder="Confirm Password"
              required
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              name="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <div className="radio">
              <label htmlFor="gender">
                <input
                  className="radioButton"
                  type="radio"
                  value="Male"
                  name="gender"
                  // checked={this.gender === "Male"}
                />{" "}
                Male{" "}
              </label>
              <label htmlFor="gender">
                <input
                  className="radioButton"
                  type="radio"
                  value="Female"
                  name="gender"
                />{" "}
                Female
              </label>
              <label htmlFor="gender">
                <input
                  className="radioButton"
                  type="radio"
                  value="Other"
                  name="gender"
                />{" "}
                Other
              </label>
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
}
