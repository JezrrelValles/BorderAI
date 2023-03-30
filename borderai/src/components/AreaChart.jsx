import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer
} from "recharts";
import { resultados_1683 } from "../data";

const AriaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={resultados_1683}>
        <defs>
          <linearGradient id="colorPAN" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06338e" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#06338e" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPRI" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00923f" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00923f" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorMORENA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ac241c" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ac241c" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="casilla" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="pan"
          stroke="#06338e"
          fillOpacity={1}
          fill="url(#colorPAN)"
        />
        <Area
          type="monotone"
          dataKey="pri"
          stroke="#00923f"
          fillOpacity={1}
          fill="url(#colorPRI)"
        />
        <Area
          type="monotone"
          dataKey="morena"
          stroke="#ac241c"
          fillOpacity={1}
          fill="url(#colorMORENA)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};


export default AriaChart;
