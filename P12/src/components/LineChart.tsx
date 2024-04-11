import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from "recharts";

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

type Point = { x: number };

type SimpleLineCursorProps = {
  points: Point[];
};

const SimpleLineCursor = ({ points }: SimpleLineCursorProps) => {
  const { x } = points[0];

  return <Rectangle fill="#000" opacity={0.1} width={265} height={265} x={x} />;
};

export default function App() {
  return (
    <div className="linechart">
      <h2>
        Durée moyenne des <br />
        sessions
      </h2>
      <LineChart
        width={258}
        height={263}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          opacity={0.5}
          fontSize={12}
          fontWeight={500}
          tick={{ fill: "#FFFFFF", opacity: 0.5 }}
        />
        <YAxis hide={true} />
        <Tooltip
          contentStyle={{ border: "none", backgroundColor: "white" }}
          wrapperStyle={{ outline: "none" }}
          cursor={<SimpleLineCursor points={[]} />}
        />
        <Line
          type="monotone"
          dataKey="pv"
          strokeWidth={2}
          stroke="#FFFFFF"
          dot={false}
          opacity={0.5}
        />
      </LineChart>
    </div>
  );
}