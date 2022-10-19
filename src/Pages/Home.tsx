import "../Components/css/Home.css";
import { Buttons } from "../Components/Buttons";
import { TrendingCapitals } from "../Components/TrendingCapitals";
import { useEffect, useState } from "react";
import { API, Capital, Flight } from "../Components/types";

type Props = {
  capitals: Capital[];
};

export function Home({ capitals }: Props) {
  const [search, setSearch] = useState("");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [passengersNum, setPassengersNum] = useState(1);
  const [data, setData] = useState();

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
    setPassengersNum(e.target.value);
  };

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


  const searchTickets = async (event: any) => {

    try {
      const response = await fetch(`${API}/search`, {
        method: 'POST',
        body: JSON.stringify({
          departs: event.target.departs.value,
          arrives:  event.target.arrives.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      
      })
      // .then(res => res.json())
      // .then(setData())

      // if (!response.ok) {
      //   throw new Error(`Error! status: ${response.status}`);
      // }

      // const result = await response.json();

      // console.log('result is: ', JSON.stringify(result, null, 4));

      // setData(result);
    } catch (err) {
      console.log(err)
    } 
  };

  console.log(data);


  return (
    <div className="home">
      <h1>Find and compare cheap flights</h1>
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
                src="https://thumbs.dreamstime.com/z/web-design-your-use-air-passenger-icon-simple-vector-illustration-111085502.jpg"
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
            onChange={(searchDepart) => {
              setSearch(searchDepart.target.value);
            }}
          />
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
            onChange={(arrivalFlight) => {
              setSearch(arrivalFlight.target.value);
            }}
          />
        </label>
        <label className="search">
          <input type="date" className="search-date" />
        </label>
        {/* //after you fill the data for the search you click on this button and it will navigate you to the flights page */}
        <button  onClick={searchTickets}>
          {/* {" "} */}
          Search{" "}
        </button>
      </div>
      <TrendingCapitals capitals={capitals} />
    </div>
  );
}
