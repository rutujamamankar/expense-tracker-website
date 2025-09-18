import axios from "axios";
const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API = axios.create({
  baseURL:"https://expense-tracker-website-1-z9y1.onrender.com",
});
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
