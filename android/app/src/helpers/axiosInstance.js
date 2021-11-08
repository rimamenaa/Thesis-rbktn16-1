import axios from "axios";
import { AsyncStorage } from "react-native";

let headers = {};

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  headers,
});

instance.interceptors.request.use(
  (config) => {
    const token = AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
