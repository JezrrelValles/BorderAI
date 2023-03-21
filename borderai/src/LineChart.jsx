import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { datos } from "./data";

const LineaChart = () => {
  return (
    <div>
      <LineChart width={600} height={300} data={datos}>
        <XAxis dataKey="seccion" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#0078ff" />
        <Line type="monotone" dataKey="expenses" stroke="#1188ff" />
      </LineChart>
    </div>
  );
};

export default LineaChart;
