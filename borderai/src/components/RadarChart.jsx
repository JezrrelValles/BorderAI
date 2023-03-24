import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";
import { datos, resultados_1683 } from "../data";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const RadChart = () => {
  return (
    <div>
      <RadarChart outerRadius={90} width={600} height={300} data={resultados_1683}>
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
    </div>
  );
};

export default RadChart;
