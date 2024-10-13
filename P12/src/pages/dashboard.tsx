import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../api/useFetch";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import Name from "../components/Name";
import NutritionalItems from "../components/NutritionalItems";
import RadialBarChart from "../components/RadialBarChart";
import CustomRadarChart from "../components/RadarChart";
import UserModel from "../models/UserModel";

const Dashboard = () => {
  const [user, setUser] = useState<InstanceType<typeof UserModel> | null>(null); // Utilisation de InstanceType<typeof UserModel>
  const [, setApiError] = useState(false);
  const { id: stringId } = useParams();
  const userId = Number(stringId) || 0;

  const { data: mainData, error: mainError } = useFetch(
    `http://localhost:3000/user/${userId}`,
    userId
  );

  const { data: activityData, error: activityError } = useFetch(
    `http://localhost:3000/user/${userId}/activity`,
    userId
  );

  const { data: sessionsData, error: sessionsError } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`,
    userId
  );

  const { data: performanceData, error: performanceError } = useFetch(
    `http://localhost:3000/user/${userId}/performance`,
    userId
  );

  useEffect(() => {
    if (mainError || activityError || sessionsError || performanceError) {
      setApiError(true);
    } else {
      setApiError(false);
    }
  }, [mainError, activityError, sessionsError, performanceError]);

  useEffect(() => {
    const allDataLoaded =
      mainData?.data &&
      activityData?.data &&
      sessionsData?.data &&
      performanceData?.data;

    if (allDataLoaded) {
      const formattedUserData = new UserModel(mainData); // Utilisation de UserModel pour formater les données principales
      setUser(formattedUserData);
    }
  }, [mainData, activityData, sessionsData, performanceData]);

  const getScore = (user: InstanceType<typeof UserModel> | null) => {
    if (user === null) return 0;
    return user.score;
  };

  return (
    <main>
      <div className="index">
        <div className="left_part">
          <div className="top">
            <Name name={user?.firstName || " "} />
            <BarChart data={activityData?.data.sessions} />
          </div>

          <div className="charts">
            <LineChart data={sessionsData?.data.sessions} />
            <CustomRadarChart data={performanceData?.data} />
            <RadialBarChart data={getScore(user)} />
          </div>
        </div>

        <div className="items">
          {user && (
            <div className="nutri_items">
              <NutritionalItems name="Calories" value={user.keyData.calories} />
              <NutritionalItems
                name="Proteines"
                value={user.keyData.proteins}
              />
              <NutritionalItems name="Glucides" value={user.keyData.carbs} />
              <NutritionalItems name="Lipides" value={user.keyData.fats} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
