import axios from "axios";

import { API_CONFIG } from "utils/api/api-constant";

export const instance = axios.create({
  baseURL: API_CONFIG.URL,
});

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("AUTH_TOKEN")
//     ? JSON.parse(localStorage.getItem("AUTH_TOKEN"))
//     : "";
//   config.headers.Authorization = token;

//   return config;
// });
