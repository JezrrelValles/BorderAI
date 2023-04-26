import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { resultados_1683 } from "../ine";

const LineaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={resultados_1683}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="casilla" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pan" stroke="#06338e" />
        <Line type="monotone" dataKey="pri" stroke="#00923f" />
        <Line type="monotone" dataKey="morena" stroke="#ac241c" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineaChart;
