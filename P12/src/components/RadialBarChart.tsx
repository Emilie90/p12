import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    score: 6.67,
    pv: 4800,
  },
];

export default function App() {
  return (
    <RadialBarChart
      width={258}
      height={263}
      innerRadius="66%"
      startAngle={90}
      endAngle={450}
      data={data}
    >
      <RadialBar
        dataKey="score"
        cornerRadius={100}
        fill="rgba(255, 0, 0, 1)"
        background={{ fill: "#fbfbfb" }}
      />
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
    </RadialBarChart>
  );
}
