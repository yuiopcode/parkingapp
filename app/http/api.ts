import axios from "axios";
import {getAccessToken, getRefreshToken, setAccessToken, setRefreshToken} from "@/app/utils/SecureStore"


const api = axios.create({
    baseURL: 'https://marianciuc.works', // Базовый URL API
    timeout: 10000, // Максимальное время ожидания запроса
});

export const setTokenType = (type: "access" | "refresh") => {
    api.defaults.headers.common["Token-Type"] = type;
};

api.interceptors.request.use(async (config) => {
    config.headers = config.headers || {};

    const tokenType = config.headers["Token-Type"] || "access";
    const token = tokenType === "refresh" ? await getRefreshToken() : await getAccessToken();

    if (token) {
        console.log("Found token: ", token);
        console.log("Setting token: ", tokenType);
        config.headers.Authorization = `Bearer ${token}`;
    }

    // Clean up Token-Type header to avoid sending unnecessary data
    delete config.headers["Token-Type"];

    return config;
});

export default api;

