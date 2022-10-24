import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  AreaChart,
  Area,
} from "recharts";
import { Capital } from "./types";
import "./css/Charts.css";

type Props = {
  capitals: Capital[];
};

export function Charts({ capitals }: Props) {
  return (
    <>
      <h3>Most visited capitals</h3>
      <div className="charts">
        <BarChart width={700} height={200} data={capitals}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"></XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="flights" name="Flights" fill="#000000" />
        </BarChart>

        <AreaChart width={700} height={300} data={capitals}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="averagePrice"
            name="Average Price/Ticket"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    </>
  );
}
