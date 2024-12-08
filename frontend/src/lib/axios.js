import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: import.meta.evn.MODE === "development" ? "http://localhost:5001/api": "/api",
    withCredentials:true,
});