import { Charts } from "../Components/Charts";
import { API, Capital, Flight, Ticket } from "../Components/types";
import "../Components/css/UserLogIn.css";
import { SearchFlights } from "../Components/SearchFlights";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Buttons } from "../Components/Buttons";

type Props = {
  capitals: Capital[];
  flights: Flight[];
  isAdmin: boolean;
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
  setAvailableFlights: any;
};

function transformDate(date: Date) {
  const myDate = new Date(date);
  const day = myDate.getDate();
  const month = myDate.getMonth() + 1;
  const year = myDate.getFullYear();
  const hours = myDate.getHours();
  const minutes = myDate.getMinutes();
  const prependZero = minutes.toString().length === 1;
  const prependHourZero = hours.toString().length === 1;
  const prependDateZero = day.toString().length === 1;
  const prependMonthZero = month.toString().length === 1;

  return `Date: ${prependDateZero ? "0" : ""}${day}/${
    prependMonthZero ? "0" : ""
  }${month}/${year}  Time: ${prependHourZero ? "0" : ""}${hours}:${
    prependZero ? "0" : ""
  }${minutes}`;
}

export function UserLogIn({
  capitals,
  flights,
  isAdmin,
  setFlights,
  setAvailableFlights,
}: Props) {
  
  function cancelFlight(flight: Flight) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API}/flights/${flight.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: (flight.status = "X") }),
        });

        let flightsCopy = JSON.parse(JSON.stringify(flights));
        let match = flightsCopy.find(
          (target: Flight) => target.id === flight.id
        );
        match.status = "X";
        setFlights(flightsCopy);
        Swal.fire("Deleted!", "Your flight has been canceled.", "success");
      }
    });
  }

  function delayFlight(flight: Flight) {
    Swal.fire({
      title: "Enter new date",
      html:
        transformDate(flight.departureTime) +
        "</span> <br>" +
        "<div>" +
        "<br/>" +
        "<label>New Date: </label>" +
        '<input type = "date" id="new_date" name = "new_date" >' +
        "</div>",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Change",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        //@ts-ignore
        let newDate = document.getElementById("new_date")!.value;

        const updatedDate = new Date(newDate);
        fetch(`${API}/flights/${flight.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ departureTime: updatedDate }),
        });

        let flightsCopy = JSON.parse(JSON.stringify(flights));
        let match = flightsCopy.find(
          (target: Flight) => target.id === flight.id
        );
        match.departureTime = updatedDate;
        setFlights(flightsCopy);

        Swal.fire({
          title: `Success`,
          text: "Date changed successfully",
        });
      }
    });
  }

  return (
    <div>
      <SearchFlights
        flights={flights}
        setAvailableFlights={setAvailableFlights}
      />
      <div>
        {isAdmin ? null : (
          <>
            <h3>My list of passengers</h3>
            <Link to={"/passengersForm"}>Add new passengers +</Link>
          </>
        )}
      </div>
      {isAdmin ? <Charts capitals={capitals} /> : null}
      <div className="flights">
        <h2>Flights</h2>

        {flights.map((flight: Flight) => (
          <div className="flight-details" key={flight.id}>
            <div className="airline">
              <img
                className="airline-logo"
                src={flight.flyCompany.logo}
                alt="logo"
              />
              <p>{flight.flyCompany.name}</p>
            </div>
            {isAdmin ? (
              <p>
                Flight number: <p></p> {flight.flightNumber}
              </p>
            ) : null}
            <p>
              Departure: <p></p> {flight.departsFrom.name}
            </p>
            <p>
              Arrival: <p></p> {flight.arrivesAt.name}
            </p>

            <p>
              Departure time: <p></p>
            {isAdmin ? (<Buttons
                variant="search"
                //@ts-ignore
                onClick={() => {
                  delayFlight(flight);
                }}
              >
                Change
              </Buttons>) : (null) }  
              {transformDate(flight.departureTime)}
            </p>

            {isAdmin ? (
              <p>
                Tickets: <p></p> {flight.tickets.length}
              </p>
            ) : null}
            {flight.status === "OK" ? null : (
              <p className="cancel">This flight is canceled</p>
            )}
            {isAdmin ? (
              <button
                onClick={() => {
                  cancelFlight(flight);
                }}
                className={flight.status === "OK" ? "status-btn" : "cancel-btn"}
              >
                {flight.status}
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
