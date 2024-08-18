import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
