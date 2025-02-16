import {SplashScreen, Stack} from "expo-router";

import "./global.css"
import {useFonts} from "expo-font";
import {createContext, useEffect, useState} from "react";
import UserStore from "@/app/store/UserStore";
import LoadingPage from "@/app/loading-page";

const userStore = new UserStore();

interface AppState {
    userStore: UserStore;
}

export const Context = createContext<AppState>({
    userStore,
});

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    })

    const [isAuthenticated, setIsAuthenticated] = useState(false); // Проверка аутентификации
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function validateAuth() {
            const isAuth = await userStore.validateAuthentication();
            setIsAuthenticated(isAuth);
            setIsLoading(false);
            // SplashScreen.hideAsync(); // Скрытие SplashScreen после загрузки всех данных
        }
        validateAuth();

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, userStore.isAuthenticated]);

    if (!fontsLoaded || isLoading) {
        return <LoadingPage />;
    }

    return (<Context.Provider value={{userStore}}>
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="(auth)/index"
                redirect={!isAuthenticated}
            />
            <Stack.Screen
                name="(root)/index"
                redirect={isAuthenticated}
            />
        </Stack>
    </Context.Provider>);
}
