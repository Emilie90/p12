import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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

export default function App() {
  return (
    <BarChart
      barGap={5}
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <text x={30} y={36} fontSize={15} fontWeight={500} fill="#20253A">
        Activité quotidienne
      </text>
      <CartesianGrid strokeDasharray="2 3" vertical={false} stroke="#DEDEDE" />{" "}
      <XAxis
        dataKey="name"
        tickLine={false}
        axisLine={{ stroke: "#DEDEDE" }}
        tickMargin={15.5}
        tick={{ stroke: "#9B9EAC", fontSize: "14" }}
      />
      <YAxis
        orientation={"right"}
        tickCount={3}
        axisLine={false}
        tickLine={false}
        tickMargin={20}
        tick={{ stroke: "#9B9EAC", fontSize: "14" }}
      />
      <Tooltip
        itemStyle={{
          fontSize: 10,
          fontWeight: 500,
          textAlign: "center",
          color: "#FFFFFF",
        }}
        contentStyle={{ border: "none", backgroundColor: "#E60000" }}
        wrapperStyle={{ outline: "none", backgroundColor: "#E60000" }}
        cursor={{
          strokeWidth: "2px",
          fill: "rgba(196, 196, 196, 0.5)",
        }}
        labelStyle={{ display: "none" }}
      />
      <Legend
        wrapperStyle={{ top: 23, fontSize: 14, right: 100 }}
        align={"right"}
        iconSize={8}
      />
      <Bar
        dataKey="pv"
        fill="#020203"
        barSize={7}
        legendType={"circle"}
        unit={"kg"}
        radius={[3, 3, 0, 0]}
      />
      <Bar
        dataKey="uv"
        fill="#d62d2d"
        barSize={7}
        legendType={"circle"}
        unit={"kcal"}
        radius={[3, 3, 0, 0]}
      />
    </BarChart>
  );
}
