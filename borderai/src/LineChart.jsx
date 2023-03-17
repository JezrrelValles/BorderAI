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

const data = [
  { name: "Jan", sales: 100, expenses: 50 },
  { name: "Feb", sales: 200, expenses: 75 },
  { name: "Mar", sales: 300, expenses: 100 },
  { name: "Apr", sales: 400, expenses: 125 },
  { name: "May", sales: 500, expenses: 150 },
  { name: "Jun", sales: 600, expenses: 175 },
];

const LineaChart = () => {
  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default LineaChart;
