import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flight } from "../Components/types";
import "../Components/css/Home.css";
import { Buttons } from "../Components/Buttons";

export function Home() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/flights")
      .then((res) => res.json())
      .then((flights) => setFlights(flights));
  }, []);

  return (
    <div>
      <h1>Find and compare cheap flights</h1>
      <div className="wrapper">
        <label className="search">
          <input type="text" placeholder="From" className="search-flight" />
          <p></p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdbPqME0Y061QgGZAA7AjGKDJPc3wj-lC1Q&usqp=CAU"
            alt=""
            width={20}
          />
          <input type="text" placeholder="To" className="search-flight" />
        </label >
        <label className="search">
          <input type="date" className="search-date" />
          <p></p>
           <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdbPqME0Y061QgGZAA7AjGKDJPc3wj-lC1Q&usqp=CAU"
            alt=""
            width={20}
          />
          <input type="date" className="search-date" />
        </label>
        <Buttons variant="search"> Search </Buttons>
      </div>

      {flights.map((flight) => (
        <>
          <img src={flight.flyCompany.logo} alt="" width={50} />
          <p>{flight.flyCompany.name}</p>
          <p>Departs: {flight.departsFrom.location}</p>
          <p>Arrives: {flight.arrivesAt.location}</p>
          {/* <ul>Arrival time: {flight.arrivalTime.getDate}</ul> */}
        </>
      ))}
    </div>
  );
}
