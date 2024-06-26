import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type UserActivity = {
  data: UserActivitySessions[] | undefined;
};

type UserActivitySessions = {
  day: string;
  kilogram: number;
  calories: number;
};

export default function App({ data }: UserActivity) {
  // Transform data to use numerical values for days
  const transformedData = data?.map((item, index) => ({
    ...item,
    day: (index + 1).toString(),
  }));

  return (
    <div className="barChart">
      <BarChart
        barGap={5}
        width={800} // Increase the width of the chart
        height={250}
        data={transformedData}
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
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#DEDEDE"
        />
        <XAxis
          dataKey="day"
          tickLine={false}
          tick={{ fill: "#9B9EAC" }}
          axisLine={false}
          padding={{ left: -30, right: -30 }}
          domain={["dataMin", "dataMax"]}
          tickMargin={10}
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
          dataKey="kilogram"
          fill="#020203"
          barSize={7}
          legendType={"circle"}
          unit={"kg"}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#d62d2d"
          barSize={7}
          legendType={"circle"}
          unit={"kcal"}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </div>
  );
}
