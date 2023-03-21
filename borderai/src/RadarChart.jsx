import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";
import { datos } from "./data";

const RadChart = () => {
  return (
    <div>
      <RadarChart outerRadius={90} width={730} height={250} data={datos}>
        <PolarGrid />
        <PolarAngleAxis dataKey="pri" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="PRI"
          dataKey="pri"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="PAN"
          dataKey="pan"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default RadChart;
