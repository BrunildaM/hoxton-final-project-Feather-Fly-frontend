import { Charts } from "../Components/Charts";
import { API, Capital, Flight, Ticket } from "../Components/types";
import "../Components/css/UserLogIn.css"
import { useParams } from "react-router-dom";



type Props = {
  capitals: Capital[];
  flights: Flight[];
  isAdmin: boolean;
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>
};

function transformDate(date: Date) {
  const myDate = new Date(date);
  const day = myDate.getDate();
  const month = myDate.getMonth();
  const year = myDate.getFullYear();
  const hours = myDate.getHours();
  const minutes = myDate.getMinutes();
  const prependZero = minutes.toString().length === 1;
  const prependDateZero = day.toString().length === 1;
  const prependMonthZero = month.toString().length === 1;

  return `Date: ${prependDateZero ? "0" : ""}${day}/${
    prependMonthZero ? "0" : ""
  }${month}/${year}  Time: ${hours}:${prependZero ? "0" : ""}${minutes}`;
}



export function UserLogIn({ capitals, flights, isAdmin, setFlights }: Props) {

    function cancelFlight (flight: Flight) {
        fetch(`${API}/flights/${flight.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json" 
            }, 
            body: JSON.stringify({status: flight.status = "X"})   
        })

        let flightsCopy = JSON.parse(JSON.stringify(flights))
        let match = flightsCopy.find((target: Flight) => target.id === flight.id)
        match.status = "X"
        setFlights(flightsCopy)
    }

  return (
    <div>
        search form
      <div className="flights">
        <h2>Flights</h2>
       
        {flights.map((flight: Flight) => (
          <div className="flight-details" key={flight.id}>
            <div className="airline">
            <img className="airline-logo" src={flight.flyCompany.logo} alt="logo" />
            <p>{flight.flyCompany.name}</p>
            </div>
            {isAdmin ? <p>Flight number: <p></p> {flight.flightNumber}</p> : null }
            <p>Departure: <p></p> {flight.departsFrom.name}</p>
            <p>Arrival: <p></p> {flight.arrivesAt.name}</p>
            <p>Departure time: <p></p> {transformDate(flight.departureTime)} </p>
           
            {isAdmin ? (<p>Tickets: <p></p> {flight.tickets.length}</p>) : null}
            {(flight.status === "OK") ? null : <p className="cancel">This flight is canceled</p> }
            {isAdmin ? <button onClick={() => {cancelFlight(flight)}} className={flight.status === "OK" ? "status-btn" : "cancel-btn"}>{flight.status}</button> : null}
          

          </div>
        ))}
      </div>
     {isAdmin ? <Charts capitals={capitals} /> : null} 
    </div>
  );
}
