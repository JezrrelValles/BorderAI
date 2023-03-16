import React from "react";
import { BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";

const data = [
  { name: "A", value: 10 },
  { name: "B", value: 20 },
  { name: "C", value: 30 },
  { name: "D", value: 40 },
];

const ColumnChart = () => {
  return (
    <div>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ColumnChart;
