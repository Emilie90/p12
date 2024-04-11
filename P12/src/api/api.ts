import axios from "axios";
import mockData from "./mockData.json";
import {
  User,
  UserActivity,
  UserPerformance,
  UserAverageSessions,
} from "../types/types";

const API_BASE_URL = "http://localhost:3000";

async function getUserData(
  userId: number
): Promise<{ data: User } | undefined> {
  try {
    const response =
      userId === 0
        ? mockData.mockUserCall // Accès aux données à partir de la clé correspondante dans mockData
        : await (
            await axios.get(`${API_BASE_URL}/user/${userId}`)
          ).data;
    return response;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
async function getActivity(
  userId: number
): Promise<{ data: UserActivity } | undefined> {
  try {
    const response =
      userId === 0
        ? mockData.mockActivityCall
        : await (
            await axios.get(`${API_BASE_URL}/user/${userId}/activity`)
          ).data;
    return response;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function getPerformance(
  userId: number
): Promise<{ data: UserPerformance } | undefined> {
  try {
    const response =
      userId === 0
        ? mockData.mockPerformanceCall
        : await (
            await axios.get(`${API_BASE_URL}/user/${userId}/performance`)
          ).data;
    return response;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function getAverageSessions(
  userId: number
): Promise<{ data: UserAverageSessions } | undefined> {
  try {
    const response =
      userId === 0
        ? mockData.mockAverageSessionsCall
        : await (
            await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`)
          ).data;
    return response;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export { getUserData, getActivity, getPerformance, getAverageSessions };
