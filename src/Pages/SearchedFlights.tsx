import { Flight } from "../Components/types";


function dateTransformation(date: Date) {
    const myDate = new Date(date);
    const day = myDate.getDate();
    const month = myDate.getMonth()+1;
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

type Props = {
    availableFlights: Flight[];
};

export function SearchedFlights({ availableFlights }: Props) {

    if (availableFlights.length === 0) {
        return <p>No flights</p>
    }
    console.log("available flights:", availableFlights)
  return (
    <div>
        {availableFlights.map(flight => (
        <div>
          <img src={flight.flyCompany.logo} width={50} />
          <p> {flight.flyCompany.name} </p>
           <p> {dateTransformation(flight.departureTime)} </p> 
          <li> {flight.departsFrom.location} </li>
          <li> {flight.arrivesAt.location} </li>
          <li> {flight.flightNumber} </li>
          
          {/* <p>
            {flight.tickets.map((ticket) => (
              <div>
                <u>
                  <li> Class: {ticket.class.name} </li>
                  <li> Price: {ticket.price} $ </li>
                  <li> Baggage: {ticket.baggage} kg </li>
                  <li> Seat: {ticket.seat} </li>
                </u>
              </div>
            ))}
          </p> */}
        </div>
        ))}
        </div>
  );
}

function transformDate(departureTime: Date): import("react").ReactNode {
  throw new Error("Function not implemented.");
}
