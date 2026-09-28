import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api-url/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;