import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

type UserScore = {
  data: number;
};

export default function App({ data }: UserScore) {
  return (
    <RadialBarChart
      width={258}
      height={263}
      innerRadius="66%"
      startAngle={90}
      endAngle={90 + 360 * data}
      data={[{ data }]}
    >
      <RadialBar
        dataKey="score"
        cornerRadius={100}
        fill="rgba(255, 0, 0, 1)"
        background={{ fill: "#fbfbfb" }}
      />
      <text
        x="50%"
        y="35%"
        alignmentBaseline="central"
        fill="#000"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        <tspan dy="1.2em" fontSize="26">
          {data * 100}%
        </tspan>
      </text>
      <text
        x="50%"
        y="50%"
        alignmentBaseline="central"
        fill="#74798C"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        <tspan x="50%" dy="1.2em">
          de votre
        </tspan>
        <tspan x="50%" dy="1.2em">
          objectif
        </tspan>
      </text>
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
    </RadialBarChart>
  );
}
