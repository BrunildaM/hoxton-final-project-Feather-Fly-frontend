import { useEffect, useState } from "react";
import { API, Passanger } from "./types";
import "./css/SignUpForm.css"

export function PassengersForm () {
    const [passengers, setPassengers] = useState<Passanger[]>([])
    useEffect(() => {
        fetch(`${API}/passengers`)
        .then(res => res.json())
        .then(passengersFromDb => setPassengers(passengersFromDb))
    }, [])

    return (
        <div>
            <form
            className="form"
          onSubmit={(event: any) => {
            const newPassenger = {
              firstName: event.target.firstName.value,
              lastName: event.target.lastName.value,
              age: Number(event.target.age.value),
              gender: event.target.gender.value,
            };
            event.preventDefault();
            fetch(`${API}/passengers`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newPassenger),
            })
              .then((res) => res.json())
              .then((passengers) => {
                setPassengers([...passengers, newPassenger])
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
            
            <p></p>

            <table>
                <thead>
                    <tr>
                        <th> First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {passengers.map(passenger => (
                        <tr key={passenger.id}>
                            <td>{passenger.firstName}</td>
                            <td>{passenger.lastName}</td>
                            <td>{passenger.age}</td>
                            <td>{passenger.gender}</td>
                        </tr>
                    ))

                    }
                </tbody>
            </table>
        </div>
    )
}