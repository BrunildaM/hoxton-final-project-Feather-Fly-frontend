import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "./Buttons";
import { API, Flight } from "./types";
import "./css/Home.css";

type Props = {
  flights: Flight[];
  setAvailableFlights: any;
};

export function SearchFlights({ flights, setAvailableFlights }: Props) {
  const [passengersNum, setPassengersNum] = useState(1);

  const navigate = useNavigate();

  let incPassengersNum = () => {
    if (passengersNum < 9) {
      setPassengersNum(Number(passengersNum) + 1);
    }
  };

  let decPassengersNum = () => {
    if (passengersNum > 1) {
      setPassengersNum(passengersNum - 1);
    }
  };

  let handleChange = (event: any) => {
    setPassengersNum(event.target.value);
  };

  return (
    <div>
      <div className="search">
        <h3>One-way</h3>

        <div>
          <label>
            <strong>Class:</strong>{" "}
          </label>
          <select name="classes" id="classes" className="custom-select">
            <option value="Economy class">Economy class</option>
            <option value="Bussines class">Bussines class</option>
            <option value="First class">First class</option>
          </select>
        </div>

        <div>
          <ul className="search-list">
            <h3>
              <img src="https://svgsilh.com/svg/160620.svg" alt="" width={50} />
              Passengers
              <button
                className="inc-dec-button margin-elements"
                onClick={decPassengersNum}
              >
                -
              </button>
              <input
                type="text"
                className="margin-elements input-number"
                value={passengersNum}
                onChange={handleChange}
              />
              <button
                className="inc-dec-button margin-elements"
                onClick={incPassengersNum}
              >
                +
              </button>
            </h3>
          </ul>
        </div>
      </div>

      <div className="wrapper">
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            const search = {
              //@ts-ignore
              departure: e.target.departure.value,
              //@ts-ignore
              arrival: e.target.arrival.value,
              //@ts-ignore
              time: e.target.time.value,
              // classes: event.target.classes.value,
              // passengers: event.target.passengers.value
            };

            fetch(
              `${API}/flights/${search.departure}/${search.arrival}/${search.time}`
            )
              .then((res) => res.json())
              .then((data: any) => {
                console.log(data);
                setAvailableFlights(data);
                navigate("/flights");
              });
          }}
        >
          <label className="search">
            <input
              type="text"
              placeholder="From"
              name="departure"
              className="search-flight"
              list="departure"
            />
            <datalist id="departure">
              {flights.map((flight) => (
                <option key={flight.id} value={flight.departsFrom.location}>
                  {flight.departsFrom.name}
                </option>
              ))}
            </datalist>
            <p></p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdbPqME0Y061QgGZAA7AjGKDJPc3wj-lC1Q&usqp=CAU"
              alt=""
              width={20}
            />
            <input
              type="text"
              placeholder="To"
              name="arrival"
              className="search-flight"
              list="arrives"
            />
          </label>
          <datalist id="arrives">
            {flights.map((flight) => (
              <option key={flight.id} value={flight.arrivesAt.location}>
                {flight.arrivesAt.name}
              </option>
            ))}
          </datalist>
          <p></p>
          <label className="search">
            <input type="date" name="time" className="search-date" />
          </label>
          <Buttons variant="search">Search</Buttons>
        </form>
      </div>
    </div>
  );
}
