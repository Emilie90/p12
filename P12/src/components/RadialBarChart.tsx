import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

type UserScore = {
  data: number;
};

export default function App({ data }: UserScore) {
  return (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: "#FBFBFB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "258px",
        height: "263px",
      }}
    >
      <RadialBarChart
        width={258}
        height={263}
        innerRadius="70%"
        outerRadius="85%"
        startAngle={90}
        endAngle={450}
        data={[{ name: "score", value: data * 100 }]}
      >
        <text
          x="20%"
          y="15%"
          alignmentBaseline="central"
          fill="#20253A"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Score
        </text>
        <RadialBar
          startAngle={90}
          dataKey="value"
          cornerRadius={100}
          fill="rgba(255, 0, 0, 1)"
          background={{ fill: "#FBFBFB" }}
        />
        <circle cx="50%" cy="50%" fill="white" r="80"></circle>
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
    </div>
  );
}
