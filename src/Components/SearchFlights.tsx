import { useState } from "react";
import { Buttons } from "./Buttons"
import { API, Flight } from "./types"

type Props = {
    flights: Flight[]
}


export function SearchFlights ({flights}: Props) {

    const [passengersNum, setPassengersNum] = useState(1);

    function handleSubmit(event: any) {
        const departure = event.target.departure.value
        const arrival =event.target.arrival.value
        const time = event.target.time.value

    }  

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
    
      let handleChange = (e: any) => {
        e.preventDefault()
        setPassengersNum(e.target.value);
      };


    return (
        <div>
             <form >
        <div className="search">
          <h3>One-way</h3>
          <div>
            <label>
              <strong>Class:</strong>{" "}
            </label>
            <select name="class" id="class" className="custom-select">
              <option value="Economy class">Economy class</option>
              <option value="Bussines class">Bussines class</option>
              <option value="First class">First class</option>
            </select>
          </div>

          <div>
            <ul className="search-list">
              <h3>
                <img
                  src="https://svgsilh.com/svg/160620.svg"
                  alt=""
                  width={50}
                />
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
          <label className="search">
            <input
              type="text"
              placeholder="From"
              name="departs"
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
              name="arrives"
              className="search-flight"
              list="arrives"
            />
          </label>
          <datalist id="arrives">
            {flights.map((flight) => (
              <option key={flight.id} value={flight.arrivesAt.location}>
                {flight.arrivesAt.location}
              </option>
            ))}
          </datalist>
          <p></p>
          <label className="search">
            <input type="date" className="search-date" />
          </label>
          {/* //after you fill the data for the search you click on this button and it will navigate you to the flights page */}

          <Buttons
            variant="search"
            // //@ts-ignore
            // onClick={searchTickets}
          >
            Search
          </Buttons>
        </div>
      </form>
            
        </div>
    )
}