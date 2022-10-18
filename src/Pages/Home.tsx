import "../Components/css/Home.css";
import { Buttons } from "../Components/Buttons";
import { TrendingCapitals } from "../Components/TrendingCapitals";
import { useEffect, useState } from "react";
import { API, Capital, Flight } from "../Components/types";

type Props = {
  capitals: Capital[]
}

export function Home({capitals}: Props) {
  const [search, setSearch] = useState("");
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    fetch(`${API}/flights`)
      .then((res) => res.json())
      .then((flights) => setFlights(flights));
  }, []);

  const departedFlights = flights.filter((flight: Flight) =>
    flight.departsFrom.location.toLowerCase().includes(search.toLowerCase())
  );

  // const searchDepart = departedFlights.map(
  //   (flight) => flight.departsFrom.location
  // );

  const arrivalFlights = flights.filter((flight: Flight) =>
    flight.arrivesAt.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Find and compare cheap flights</h1>
      <div className="search">
        <h3>One-way</h3>
        <ul className="search-list">
          <h3>Class</h3>
          {/* <li>Economy class</li>
        <li>Bussines class</li>
        <li>First class</li> */}
        </ul>
        <ul className="search-list">
          <h3>
            <img
              src="https://thumbs.dreamstime.com/z/web-design-your-use-air-passenger-icon-simple-vector-illustration-111085502.jpg"
              alt=""
              width={50}
            />
            Passengers
          </h3>
          {/* <li>Adults (12+)</li>
        <li>Children (2-11)</li>
        <li>Infants (0-2)</li> */}
        </ul>
      </div>
      <div className="wrapper">
        <label className="search">
          <input
            type="text"
            placeholder="From"
            className="search-flight"
            onChange={(searchDepart) => {
              setSearch(searchDepart.target.value);
            }}
          />
          <p></p>
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdbPqME0Y061QgGZAA7AjGKDJPc3wj-lC1Q&usqp=CAU"
            alt=""
            width={20}
          /> */}
          <input
            type="text"
            placeholder="To"
            className="search-flight"
            onChange={(arrivalFlight) => {
              setSearch(arrivalFlight.target.value);
            }}
          />
        </label>
        <label className="search">
          <input type="date" className="search-date" />
        </label>
        <Buttons variant="search"> Search </Buttons>
      </div>
      <TrendingCapitals capitals={capitals} />
    </div>
  );
}
