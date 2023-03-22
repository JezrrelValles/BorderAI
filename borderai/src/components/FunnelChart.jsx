import React from "react";
import { Funnel, FunnelChart, LabelList, Tooltip } from "recharts";

const EmbudoChart = (props) => {
  const { data } = props;

  return (
    <div>
      <FunnelChart width={208} height={300} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
        <Tooltip />
        <Funnel dataKey="value" data={data}>
          <LabelList
            position="right"
            fill="#000"
            stroke="none"
            dataKey="name"
          />
        </Funnel>
      </FunnelChart>
    </div>
  );
};

export default EmbudoChart;
