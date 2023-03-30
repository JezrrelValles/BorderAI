import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";
import { resultados_1683 } from "../data";

const ColumnChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={resultados_1683}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="casilla" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pan" fill="#06338e" />
        <Bar dataKey="morena" fill="#ac241c" />
        <Bar dataKey="pri" fill="#00923f" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ColumnChart;
