import React from "react";
import { BarChart, XAxis, YAxis, Tooltip, Bar, CartesianGrid, Legend } from "recharts";
import { datos } from "./data"

const ColumnChart = () => {
  return (
    <div>
      <BarChart width={730} height={250} data={datos}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="seccion" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pri" fill="#8884d8" />
        <Bar dataKey="pan" fill="#82ca9d" />
        <Bar dataKey="morena" fill="#84aa9d" />
      </BarChart>
    </div>
  );
};

export default ColumnChart;
