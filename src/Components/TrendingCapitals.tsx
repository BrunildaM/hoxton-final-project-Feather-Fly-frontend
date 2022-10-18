
import { Capital } from "./types";
import "../Components/css/TrendingCapitals.css";

type Props = {
  capitals: Capital[]
}


export function TrendingCapitals({capitals}: Props) {
 

  return (
    <>
      <h1>Trending cities</h1>
      <h3>Most visited cities in 2022</h3>
      <div className="trend-capitals">
        {capitals.map((capital: Capital) => (
          <ul className="capitals" key={capital.id}>
            <img className="capital-image" src={capital.image} alt="image" />
            <div className="capital-text">
              <h4>Fly to amazing adventures</h4>
              <h3 className="capital-name">In {capital.name}</h3>
            </div>
          </ul>
        ))}
      </div>

     
    </>
  );
}
