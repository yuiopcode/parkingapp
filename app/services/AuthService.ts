import api, { setTokenType } from "@/app/http/api";
import IAuthResponse from "@/app/interfaces/IAuthResponse";
import {getAccessToken, getRefreshToken, setAccessToken, setRefreshToken} from "@/app/utils/SecureStore";

const signInByCredentials = async ({email, password}: { email: string, password: string }) => {
    return api.post(`/api/v1/security/login`, {email, password});
}

const signUpByCredentials = async ({email, password}: { email: string, password: string }) => {
    return api.post(`/api/v1/security/register/DRIVER`, {email, password});
}

const refreshToken = async ({refreshToken}:{refreshToken:string}) => {
    setTokenType("refresh");
    return api.post(`/api/v1/security/refresh`, {refreshToken});
}

export {signInByCredentials, signUpByCredentials,refreshToken}


