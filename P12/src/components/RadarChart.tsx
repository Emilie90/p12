import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

type PerformanceData = {
  value: number;
  kind: number;
};

type UserPerformance = {
  data:
    | {
        kind: { [key: number]: string };
        data: PerformanceData[];
      }
    | undefined;
};

const transformPerformanceData = (performance: UserPerformance["data"]) => {
  if (!performance) return [];
  return performance.data.map((item) => ({
    value: item.value,
    kind: performance.kind[item.kind],
  }));
};

const CustomRadarChart = ({ data }: UserPerformance) => {
  const transformedData = transformPerformanceData(data);

  return (
    <div className="radarChart">
      <RadarChart
        width={258}
        height={263}
        outerRadius={80}
        data={transformedData}
      >
        <PolarGrid radialLines={false} stroke="white" />
        <PolarAngleAxis
          dataKey="kind"
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
        <Radar
          name="Performance"
          dataKey="value"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </div>
  );
};

export default CustomRadarChart;
