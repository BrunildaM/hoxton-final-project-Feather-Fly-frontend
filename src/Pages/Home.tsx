import "../Components/css/Home.css";
import { TrendingCapitals } from "../Components/TrendingCapitals";
import { Capital, Flight } from "../Components/types";
import { SearchFlights } from "../Components/SearchFlights";

type Props = {
  capitals: Capital[];
  flights: Flight[];
  setAvailableFlights: any;
};

export function Home({ capitals, flights, setAvailableFlights }: Props) {
  return (
    <div className="home">
      <h2>Find and compare cheap flights</h2>
      <SearchFlights
        flights={flights}
        setAvailableFlights={setAvailableFlights}
      />
      <TrendingCapitals capitals={capitals} />
    </div>
  );
}
