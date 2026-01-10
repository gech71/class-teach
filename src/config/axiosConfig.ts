import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

apiClient.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer random-token";
  return config;
});
export default apiClient;
