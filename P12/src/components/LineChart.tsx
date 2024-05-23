import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from "recharts";
import { TooltipProps as RechartsTooltipProps } from "recharts";

type UserAverage = {
  data: UserAverageSessions[] | undefined;
};

type UserAverageSessions = {
  day: number;
  sessionLength: number;
};

type Point = { x: number };

type SimpleLineCursorProps = {
  points: Point[];
};

const SimpleLineCursor = ({ points }: SimpleLineCursorProps) => {
  if (points.length === 0) return null;
  const { x } = points[0];

  return <Rectangle fill="#000" opacity={0.1} width={265} height={265} x={x} />;
};

// Mappage des jours de la semaine
const dayMap = ["L", "M", "M", "J", "V", "S", "D"];

const formatDay = (day: number) => dayMap[day - 1]; // Convertir le numéro du jour en lettre

// Fonction pour formater le contenu du tooltip
const renderTooltipContent = ({
  active,
  payload,
}: RechartsTooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "5px",
          border: "1px solid #ccc",
        }}
      >
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

export default function App({ data }: UserAverage) {
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
          dataKey="day" // Utilisation de "day" pour mapper les numéros de jour
          tickLine={false}
          axisLine={false}
          opacity={0.5}
          fontSize={12}
          fontWeight={500}
          tick={{ fill: "#FFFFFF", opacity: 0.5 }}
          tickFormatter={formatDay} // Utilisation de la fonction de formatage
        />
        <YAxis hide={true} />
        <Tooltip
          contentStyle={{ border: "none", backgroundColor: "white" }}
          wrapperStyle={{ outline: "none" }}
          cursor={<SimpleLineCursor points={[]} />}
          content={renderTooltipContent} // Utilisation de la fonction de contenu personnalisé
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          strokeWidth={2}
          stroke="#FFFFFF"
          dot={false}
          opacity={0.5}
        />
      </LineChart>
    </div>
  );
}
