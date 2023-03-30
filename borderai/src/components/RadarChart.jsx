import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { resultados_1683 } from "../data";

const RadChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart outerRadius={90} data={resultados_1683}>
        <PolarGrid />
        <PolarAngleAxis dataKey="casilla" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="PAN"
          dataKey="pan"
          stroke="#06338e"
          fill="#06338e"
          fillOpacity={0.6}
        />
        <Radar
          name="PRI"
          dataKey="pri"
          stroke="#00923f"
          fill="#00923f"
          fillOpacity={0.6}
        />
        <Radar
          name="Morena"
          dataKey="morena"
          stroke="#ac241c"
          fill="#ac241c"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadChart;
