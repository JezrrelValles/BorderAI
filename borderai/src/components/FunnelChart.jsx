import React from "react";
import { Funnel, FunnelChart, LabelList, Tooltip } from "recharts";

const data = [
  { name: "0-4", value: 111734, fill: "#3393ff" },
  { name: "5-9", value: 128204, fill: "#3393ff" },
  { name: "10-14", value: 140364, fill: "#3393ff"  },
  { name: "15-19", value: 138623, fill: "#3393ff"  },
  { name: "20-24", value: 135291, fill: "#3393ff"  },
  { name: "25-29", value: 125741, fill: "#3393ff"  },
  { name: "30-34", value: 113630, fill: "#3393ff"  },
  { name: "35-39", value: 111538, fill: "#3393ff"  },
  { name: "40-44", value: 108859, fill: "#3393ff"  },
  { name: "45-49", value: 106145, fill: "#3393ff"  },
  { name: "50-54", value: 88659, fill: "#3393ff"  },
  { name: "55-59", value: 64195, fill: "#3393ff"  },
  { name: "60-64", value: 49551, fill: "#3393ff"  },
  { name: "65-69", value: 33378, fill: "#3393ff"  },
  { name: "70-74", value: 22446, fill: "#3393ff"  },
  { name: "75+", value: 29614, fill: "#3393ff"  },
  { name: "No especificado", value: 4478, fill: "#3393ff"  }
];

const EmbudoChart = () => {
  return (
    <div>
      <FunnelChart width={250} height={300} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
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
