import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Buttons } from "../Components/Buttons";
import { Flight } from "../Components/types";

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
         <Link className="link" to={`/signIn`}>
      <Buttons variant="signIn">Sign in</Buttons>
      </Link>
      <Link className="link" to={`/signUp`}>
      <Buttons variant="signUp">Sign up</Buttons>
      </Link>
      {flights.map(flight => (
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
