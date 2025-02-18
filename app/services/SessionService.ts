 // используем API, который был настроен ранее

import api from "@/app/http/api";

 export const getActiveParkingSession = async (): Promise<any> => {
    const response = await api.get("/api/v1/sessions");
    return response.data;
};

