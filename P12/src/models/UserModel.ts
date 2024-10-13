import { UserData } from "../api/useFetch";

class UserModel {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  score: number;
  keyData: {
    calories: number;
    proteins: number;
    carbs: number;
    fats: number;
  };

  constructor(data: UserData) {
    this.id = data?.data.id;
    this.firstName = data?.data.userInfos.firstName;
    this.lastName = data?.data.userInfos.lastName;
    this.age = data?.data.userInfos.age;
    this.score = data?.data.todayScore || data.data.score || 0;
    this.keyData = {
      calories: data?.data.keyData.calorieCount,
      proteins: data?.data.keyData.proteinCount,
      carbs: data?.data.keyData.carbohydrateCount,
      fats: data?.data.keyData.lipidCount,
    };
  }

  getNutritionalData() {
    return this.keyData;
  }
}

export default UserModel;
