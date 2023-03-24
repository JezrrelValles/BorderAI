import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip
} from "recharts";

const data = [
    {
        name: "Inseguridad/Violencia" ,
        value: 26.6, 
        fill: "#8884d8"
    },
    {
        name: "Calles/Pavimentación" ,
        value: 14.9, 
        fill: "#8884d8"
    },
    {
        name: "Corrupción" ,
        value: 6.5, 
        fill: "#8884d8"
    },
    {
        name: "Drogradicción" ,
        value: 6.5, 
        fill: "#8884d8"
    },
    {
        name: "Transporte urbano" ,
        value: 6.5, 
        fill: "#8884d8"
    },
    {
        name: "Alumbrado público" ,
        value: 6.3, 
        fill: "#8884d8"
    },
    {
        name: "Servicios básicos" ,
        value: 6.2, 
        fill: "#8884d8"
    },
    {
        name: "Otro" ,
        value: 5.5, 
        fill: "#8884d8"
    },
    {
        name: "Pobreza" ,
        value: 3.4, 
        fill: "#8884d8"
    },
    {
        name: "Economía/Crisis" ,
        value: 2.9, 
        fill: "#8884d8"
    },
    {
        name: "Desempleo" ,
        value: 2.7, 
        fill: "#8884d8"
    },
    {
        name: "Infraestructura" ,
        value: 2.3, 
        fill: "#8884d8"
    },
    {
        name: "Agua/Drenaje" ,
        value: 2.1, 
        fill: "#8884d8"
    },
    {
        name: "Falta de valores" ,
        value: 2.1, 
        fill: "#8884d8"
    },
    {
        name: "Falta de hospitales/clínicas de salud" ,
        value: 2.1, 
        fill: "#8884d8"
    },
    {
        name: "Impunidad" ,
        value: 1.0, 
        fill: "#8884d8"
    },
    {
        name: "Pandemía" ,
        value: 0.7, 
        fill: "#8884d8"
    },
    {
        name: "Participación ciudadana" ,
        value: 0.5, 
        fill: "#8884d8"
    }
]

const RadialChart = () => {
  return (
    <div>
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="value"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
};

export default RadialChart;
