import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie } from "recharts";
import { Capital } from "./types";
type Props = {
    capitals: Capital[]
}
export function Charts ({capitals}: Props) {
    return (
        <div>
             <BarChart width={500} height={200} data={capitals}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"></XAxis>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="averagePrice" name="Price" fill="#8884d8" />
        <Bar dataKey="flights" name="Flights" fill="#82ca9d" />
      </BarChart>


      <PieChart width={400} height={400}>
          <Pie
            dataKey="averagePrice"
            isAnimationActive={false}
            data={capitals}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="flights" data={capitals} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
        </div>
    )
}