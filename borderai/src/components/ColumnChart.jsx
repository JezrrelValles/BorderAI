import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";
import { datos, resultados_1683 } from "../data";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const ColumnChart = () => {
  return (
    <div>
      <BarChart width={600} height={300} data={resultados_1683}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="casilla" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pan" fill="#06338e" />
        <Bar dataKey="morena" fill="#ac241c" />
        <Bar dataKey="pri" fill="#00923f" />
      </BarChart>
    </div>
  );
};

export default ColumnChart;
