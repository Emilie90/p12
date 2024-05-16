import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../api/useFetch";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import Name from "../components/Name";
import NutritionalItems from "../components/NutritionalItems";
import RadialBarChart from "../components/RadialBarChart";
import RadarChart from "../components/RadarChart";

type User = {
  mainData: UserData;
  activityData: UserActivity;
  sessionsData: UserAverageSessions;
  performanceData: UserPerformance;
};

type UserActivity = {
  data: {
    userId: number;
    sessions: {
      day: string;
      kilogram: number;
      calories: number;
    }[];
  }[];
};

type UserAverageSessions = {
  data: {
    userId: number;
    sessions: Array<{
      day: number;
      sessionLength: number;
    }>;
  };
};

type UserPerformance = {
  data: {
    userId: number;
    kind: {
      [key: number]: string;
    };
    data: Array<{
      value: number;
      kind: number;
    }>;
  };
};

type UserData = {
  data: {
    id: number;

    userInfos: {
      firstName: string;
      lastName: string;
      age: number;
    };
    todayScore: number;
    keyData: {
      calorieCount: number;
      proteinCount: number;
      carbohydrateCount: number;
      lipidCount: number;
    };
  };
};

const Dashboard = () => {
  const [data, setData] = useState<User | null>(null);
  const [, setApiError] = useState(false);
  const { id: stringId } = useParams();
  const userId = Number(stringId) || 0;

  const { data: mainData, error: mainError } = useFetch(
    `http://localhost:3000/user/${userId}`,
    userId
  ) as { data: UserData | null; error: Error | null };

  const { data: activityData, error: activityError } = useFetch(
    `http://localhost:3000/user/${userId}/activity`,
    userId
  ) as { data: UserActivity | null; error: Error | null };

  const { data: sessionsData, error: sessionsError } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`,
    userId
  ) as { data: UserAverageSessions | null; error: Error | null };

  const { data: performanceData, error: performanceError } = useFetch(
    `http://localhost:3000/user/${userId}/performance`,
    userId
  ) as { data: UserPerformance | null; error: Error | null };

  useEffect(() => {
    if (mainError) {
      setApiError(true);
    } else {
      setApiError(false);
    }
  }, [mainError, performanceError, sessionsError, activityError]);

  useEffect(() => {
    // On s'assure que toutes les données sont chargées avant de créer l'instance de User
    const allDataLoaded =
      mainData?.data &&
      activityData?.data &&
      sessionsData?.data &&
      performanceData?.data;

    if (allDataLoaded) {
      setData({
        mainData,
        activityData,
        sessionsData,
        performanceData,
      });
    }
  }, [mainData, activityData, sessionsData, performanceData]);

  return (
    <main>
      <div className="index">
        <div className="left_part">
          <div className="top">
            <Name name={mainData?.data.userInfos.firstName || " "} />
            <BarChart data={activityData?.data.sessions} />
          </div>

          <div className="charts">
            <LineChart />
            <RadialBarChart />
            <RadarChart />
          </div>
        </div>
        <div className="items">
          {data && (
            <>
              <NutritionalItems
                name="Calories"
                value={mainData?.data.keyData.calorieCount}
              />
              <NutritionalItems
                name="Proteines"
                value={mainData?.data.keyData.proteinCount}
              />
              <NutritionalItems
                name="Glucides"
                value={mainData?.data.keyData.carbohydrateCount}
              />
              <NutritionalItems
                name="Lipides"
                value={mainData?.data.keyData.proteinCount}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
