import axios from "axios"

const mode = import.meta.env.MODE || "production";
export const axiosInstance = axios.create({
    baseURL: mode === "development" ? "http://localhost:5001/api" : "/api",
    withCredentials: true,
});

