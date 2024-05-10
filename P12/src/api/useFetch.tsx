import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mock/mock-data";

// Définir les différents types de données mockées
type MockedData =
  | typeof USER_MAIN_DATA
  | typeof USER_ACTIVITY
  | typeof USER_AVERAGE_SESSIONS
  | typeof USER_PERFORMANCE;

// Définir le type de données pour l'état
type UserData = MockedData | null;

export function useFetch(url: string, userId: number) {
  const [data, setData] = useState<UserData>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | unknown>(null);

  const fetchData = useCallback(async () => {
    try {
      const urlId = url.replace("${userId}", userId.toString());
      let responseData: UserData;
      // Fetch data from API
      console.log("URL de l'appel API :", urlId);

      const response = await axios.get(urlId);
      responseData = response.data;
      console.log("Réponse de l'API :", response);

      if (!response) {
        // Si la réponse est vide, utiliser les données mockées
        responseData = await fetchMockedData(url);
      }
      console.log("Données à définir :", responseData);
      setData(responseData);
    } catch (error) {
      setError(error);
      // Si une erreur se produit lors de la récupération des données de l'API, utiliser les données mockées
      setData(await fetchMockedData(url));
    } finally {
      setLoading(false);
    }
  }, [url, userId]);

  useEffect(() => {
    const fetchDataWrapper = async () => {
      setLoading(true);
      await fetchData();
    };

    fetchDataWrapper();
  }, [fetchData]);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  const fetchMockedData = async (url: string): Promise<MockedData> => {
    if (url === "http://localhost:3000/user/${userId}") {
      return USER_MAIN_DATA;
    } else if (url === "http://localhost:3000/user/${userId}/activity") {
      return USER_ACTIVITY;
    } else if (
      url === "http://localhost:3000/user/${userId}/average-sessions"
    ) {
      return USER_AVERAGE_SESSIONS;
    } else if (url === "http://localhost:3000/user/${userId}/performance") {
      return USER_PERFORMANCE;
    } else {
      throw new Error("Invalid URL");
    }
  };

  return { data, loading, error, refetch };
}
