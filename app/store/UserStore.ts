import {makeAutoObservable} from "mobx";
import {AxiosError} from "axios";
import {IError, IAuthResponse, IUser} from "@/app/interfaces";
import  * as AuthService from "@/app/services/AuthService";
import  * as UserService from "@/app/services/UserService";
import {getAccessToken, getRefreshToken, setAccessToken, setRefreshToken} from "@/app/utils/SecureStore";
import handleError from "@/app/utils/ErrorHandler";

export default class UserStore {
    isAuthenticated: boolean = false;
    isLoading: boolean = true;
    user: IUser | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setIsAuthenticated(isAuthenticated: boolean, authentication: IAuthResponse) {
        setAccessToken(authentication.accessToken).then(
            () => console.log("setAccessToken success"));
        setRefreshToken(authentication.refreshToken).then(
            () => console.log("setRefreshToken success"));
        console.log(
            "setIsAuthenticated",
            isAuthenticated,
            authentication
        );
        this.isAuthenticated = isAuthenticated;
    }

    setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    signUpAuthentication = async ({email, password}: { email: string, password: string }) => {
        this.setIsLoading(true);

        console.log("signUpAuthentication");
        try{
            const request = await AuthService.signUpByCredentials({email, password});
            if(request.data) {
                const authResponse: IAuthResponse = request.data;
                this.setIsAuthenticated(true, authResponse)
                console.log("authResponse", authResponse);
            } else {
                throw new AxiosError("unexpected message");
                console.log("unexpected message");
            }
        } catch(e:unknown) {
            handleError(e,"awibka");
        } finally {
            this.isLoading = false;
        }
    }

    signInAuthentication = async ({email, password}: { email: string, password: string }) => {
        this.setIsLoading(true);

        try{
            const request = await AuthService.signInByCredentials({email, password});
            if(request.data) {
                const authResponse: IAuthResponse = request.data;
                this.setIsAuthenticated(true, authResponse)
            } else {
                throw new AxiosError("unexpected message");
            }
        } catch(e:unknown) {
            handleError(e,"awibka");
        } finally {
            this.isLoading = false;
        }
    }

    setUser = (user: IUser) => {
        this.user = user;
    }

    fetchUser = async () => {
        try {

            const fetchedUser = await UserService.getUser();

            console.log("User data:", fetchedUser);
            this.setUser(fetchedUser.data);

            return true;
        } catch (e: unknown) {
            handleError(e,"awibka");
            const error = e as AxiosError;
            console.log("Refresh token request failed:", error.response?.data);
            return false;
        }
    }

    async validateAuthentication(): Promise<boolean> {

        console.log("Start validation" + this.isAuthenticated);

        console.log("validateAuthentication");

        this.setIsLoading(true);

        const refreshToken = await getRefreshToken();
        console.log("refreshToken", refreshToken);

        if (refreshToken) {
            try {
                const res = await AuthService.refreshToken({refreshToken});
                this.setIsAuthenticated(true, res.data);

                const fetchedUser = await UserService.getUser();

                console.log("User data:", fetchedUser);
                this.setUser(fetchedUser.data);

                return true;
            } catch (e: unknown) {
                handleError(e,"awibka");
                const error = e as AxiosError;
                console.log("Refresh token request failed:", error.response?.data);
                return false;
            } finally {
                this.setIsLoading(false);
            }
        }

        this.setIsLoading(false);
        return false;
    }
}