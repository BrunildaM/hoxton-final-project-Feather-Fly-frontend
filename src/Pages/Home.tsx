import "../Components/css/Home.css";
import { Buttons } from "../Components/Buttons";
import { TrendingCapitals } from "../Components/TrendingCapitals";
import { useEffect, useState } from "react";
import { API, Capital, Flight } from "../Components/types";
import { useNavigate } from "react-router-dom";
import { SearchFlights } from "../Components/SearchFlights";

type Props = {
  capitals: Capital[];
  flights: Flight[];
};

export function Home({ capitals, flights }: Props) {
 

  const navigate = useNavigate();

 

  // function handleSubmit(event: any) {
  //   event.preventDefault();
  //   const ticket = {
  //     // class: event.target.class.value,
  //     // passengersNum: event.target.passengersNum.value,
  //     departs: event.target.departs,
  //     arrives: event.target.arrives,
  //     date: event.target.date,
  //   };

  //   fetch(`${API}/search`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(ticket),
  //   })
  //     .then((res) => res.json())
  //     .then((data: any) => {
  //       if (data.error) {
  //         alert(data.error);
  //       } else {
  //         navigate("/flights");
  //       }
  //     });
  // }

  return (
    <div className="home">
      <h2>Find and compare cheap flights</h2>
      <SearchFlights flights={flights} />    
      <TrendingCapitals capitals={capitals} />
    </div>
  );
}
