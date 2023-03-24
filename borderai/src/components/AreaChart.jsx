import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { datos, resultados_1683 } from "../data";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AriaChart = () => {
  return (
    <div>
      <AreaChart
        width={600}
        height={300}
        data={resultados_1683}
        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
      >
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
    </div>
  );
};

export default AriaChart;
