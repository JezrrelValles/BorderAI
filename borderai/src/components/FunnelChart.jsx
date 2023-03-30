import React from "react";
import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const EmbudoChart = (props) => {
  const { data } = props;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <FunnelChart
        margin={{ top: 5, right: 10, bottom: 5, left: 10 }}
      >
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
    </ResponsiveContainer>
  );
};

export default EmbudoChart;
