import { useEffect, useState } from "react";
import { API, Passanger } from "./types";
import "./css/Passengers.css";

export function PassengersForm() {
  const [passengers, setPassengers] = useState<Passanger[]>([]);
  useEffect(() => {
    setInterval(() => {
      fetch(`${API}/passengers`)
        .then((res) => res.json())
        .then((passengersFromDb) => setPassengers(passengersFromDb));
    }, 1000);
  }, []);

  function deletePassenger(passenger: Passanger) {
    fetch(`${API}/passengers/${passenger.id}`, {
      method: "DELETE",
    });

    const passengersCopy = JSON.parse(JSON.stringify(passengers));
    let updatedPassengers = passengersCopy.filter(
      (target: Passanger) => target.id !== passenger.id
    );

    setPassengers(updatedPassengers);
  }

  return (
    <div className="passengers-wrapper">
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
              setPassengers([...passengers, newPassenger]);
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
          <input type="number" name="age" id="age" placeholder="Age" required />
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
              />
              Male
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

      <table className="table">
        <thead>
          <tr>
            <th> First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.id}>
              <td>{passenger.firstName}</td>
              <td>{passenger.lastName}</td>
              <td>{passenger.age}</td>
              <td>{passenger.gender}</td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    deletePassenger(passenger);
                  }}
                >
                  X
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
