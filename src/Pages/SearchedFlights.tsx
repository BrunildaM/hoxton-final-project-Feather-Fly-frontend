import { Flight } from "../Components/types";
import "../Components/css/SearchedFlights.css";
import { SearchFlights } from "../Components/SearchFlights";
import { Buttons } from "../Components/Buttons";
import { Tickets } from "../Components/Tickets";

function dateTransformation(date: Date) {
  const myDate = new Date(date);
  const day = myDate.getDate();
  const month = myDate.getMonth() + 1;
  const year = myDate.getFullYear();
  const hours = myDate.getHours();
  const minutes = myDate.getMinutes();
  const prependZero = minutes.toString().length === 1;
  const prependHoursZero = hours.toString().length === 1;
  const prependDateZero = day.toString().length === 1;
  const prependMonthZero = month.toString().length === 1;

  return `Date: ${prependDateZero ? "0" : ""}${day}/${
    prependMonthZero ? "0" : ""
  }${month}/${year}  Time: ${prependHoursZero ? "0" : ""}${hours}:${
    prependZero ? "0" : ""
  }${minutes}`;
}

type Props = {
  availableFlights: any;
  flights: Flight[];
  setAvailableFlights: any;
};

export function SearchedFlights({
  flights,
  setAvailableFlights,
  availableFlights,
}: Props) {
  console.log("available flights:", availableFlights);

  function getTicketsPerFlight(flight: Flight) {
   
  }

  return (
    <>
      <div className="availableFlights">
        <SearchFlights
          flights={flights}
          setAvailableFlights={setAvailableFlights}
        />
        {!availableFlights.message ? (
          availableFlights.map((flight: Flight) => (
            <div className="available" key={flight.id}>
              <div>
                <h3>Airline</h3>
                <img src={flight.flyCompany.logo} width={50} />
                <h4> {flight.flyCompany.name} </h4>
              </div>
              <div>
                <h3>Flight nr.</h3>
                <h4>{flight.flightNumber}</h4>
              </div>
              <div>
                <h3>Departure time</h3>
                <h4> {dateTransformation(flight.departureTime)} </h4>
              </div>
              <div>
                <h3>Departs from</h3>
                <h4>{flight.departsFrom.location}</h4>
              </div>
              <div>
                <h3>Arrives at</h3>
                <h4>{flight.arrivesAt.location}</h4>
              </div>
              <h3>
                {flight.status === "X" ? (
                  <p style={{ backgroundColor: "red" }}>
                    This flight is canceled
                  </p>
                ) : (
                  <div className="tickets">
                  {flight.tickets.slice(0, 1).map((ticket) => (
                    <ul key={ticket.id}>
                      <p>Baggage: {ticket.baggage} kg</p>
                      {/* <li>Class: {ticket.class.name}</li> */}
                      <p>Price: {ticket.price} $</p>
                      <p>Seat nr: {ticket.seat}</p>
                    </ul>
                  ))}
                  <Buttons variant="signIn">Book ticket</Buttons>
                  </div>
                )
                
                }
              </h3>
              <div>
              
              </div>
            </div>
          ))
        ) : (
          <div style={{ height: "100vh" }}>
            <h1>
              We are sorry there are no flights on this date and destinations.
            </h1>
            <h2>You can search on the next available day!</h2>
          </div>
        )}
      </div>
    </>
  );
}
