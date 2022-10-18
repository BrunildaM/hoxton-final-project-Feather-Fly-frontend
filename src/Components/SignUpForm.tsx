import { useState } from "react";
import "./SignUpForm.css";


export function SignUp () {
  const [firstName, setFirstNAme ] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [gender, setGender] = useState("")

}

export function SignUpForm() {
  return (
    //gender and role is missing
    <section className="body">
      <div className="container">
        <h1>Sign Up Today!</h1>
        <form className="form">
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
              <label className="radioButton">
                <input type="radio" name="gender" value="male" />
                Male
              </label>
              <label className="radioButton">
                <input type="radio" name="gender" value="female" />
                Female
              </label>
              <label className="radioButton">
                <input type="radio" name="other" value="female" />
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
