import api from "@/app/http/api";

 export default class SessionService {
     static async fetchSessions(userId: string, page:number, size:number) {
         return api.get(`/api/v1/sessions/search`, {
             params: {
                 page,
                 size,
                 sort: "creationDate",
                 direction: "desc",
                 ownerId: userId,
             }
             ,
         });
     }

 }

