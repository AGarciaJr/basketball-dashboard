import axios from "axios";

const api = axios.create({
    baseURL: "https://basketball-dashboard-api.onrender.com",
    timeout: 10000,
});

export default api;
