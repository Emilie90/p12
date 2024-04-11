import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import Name from "../components/Name";
import NutritionalItems from "../components/NutritionalItems";
import RadialBarChart from "../components/RadialBarChart";
import RadarChart from "../components/RadarChart";

const Index = () => {
  return (
    <main>
      <div className="index">
        <div className="left_part">
          <div className="top">
            <Name />
            <BarChart />
          </div>

          <div className="charts">
            <LineChart />
            <RadialBarChart />
            <RadarChart />
          </div>
        </div>
        <div className="items">
          <NutritionalItems name="Calories" value={19} />
          <NutritionalItems name="Proteines" value={19} />
          <NutritionalItems name="Glucides" value={19} />
          <NutritionalItems name="Lipides" value={19} />
        </div>
      </div>
    </main>
  );
};

export default Index;
