import axios from "axios";




const api = axios.create({
    baseURL: 'https://marianciuc.works', // Базовый URL API
    timeout: 10000, // Максимальное время ожидания запроса
});

export const setTokenType = (type: "access" | "refresh") => {
    api.defaults.headers.common["Token-Type"] = type;
};

api.interceptors.request.use((config) => {
    config.headers = config.headers || {};

    const tokenType = config.headers["Token-Type"] || "access"; // Default to access token
    const tokenKey = tokenType === "refresh" ? "refreshToken" : "accessToken";
    const token = localStorage.getItem(tokenKey);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    // Clean up Token-Type header to avoid sending unnecessary data
    delete config.headers["Token-Type"];

    return config;
});

export default api;

