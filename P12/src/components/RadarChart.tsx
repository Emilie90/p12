import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

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

export default function App() {
  return (
    <div className="radarChart">
      <RadarChart width={258} height={263} outerRadius={80} data={data}>
        <PolarGrid radialLines={false} stroke="white" />
        <PolarAngleAxis
          dataKey="subject"
          fontSize={12}
          fontWeight={500}
          stroke="white"
          tickLine={false}
          dy={4}
        />
        <PolarRadiusAxis
          domain={[0, "dataMax"]}
          tick={false}
          axisLine={false}
        />
        <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </div>
  );
}
