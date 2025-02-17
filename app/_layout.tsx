import {
    Navigator,
    Redirect,
    SplashScreen,
    usePathname,
    Slot
} from "expo-router";

import "./global.css"
import {useFonts} from "expo-font";
import {createContext, useEffect, useState} from "react";
import UserStore from "@/app/store/UserStore";
import {ActivityIndicator} from "react-native";
import {View, Text} from 'react-native'

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
    const pathname = usePathname();


    useEffect(() => {
        async function validateAuth() {
            const isAuth = await userStore.validateAuthentication();
            setIsAuthenticated(true);
            setIsLoading(false);
            // SplashScreen.hideAsync(); // Скрытие SplashScreen после загрузки всех данных
        }

        validateAuth().then(
            () => {
            },
            (error) => {
                console.log(error);
            });

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, userStore.isAuthenticated]);


    if (!fontsLoaded || isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#0000ff"/>
                <Text>Загрузка...</Text>
            </View>
        );
    }

    if (
        // !isAuthenticated &&
        // !(
        //     pathname.startsWith("/(auth)") &&
        //     (pathname.includes("sign-in") || pathname.includes("sign-up"))
        // )
        false
    ) {
        return <Context.Provider value={{userStore}}>
            <Slot/>
            <Redirect href="/welcome"/>
        </Context.Provider>;
    }

    if (isAuthenticated && pathname.startsWith("/(auth)")) {
        return <Context.Provider value={{userStore}}>
            <Slot/>
            <Redirect href="/(root)/explore"/>
        </Context.Provider>;
    }


    console.log("isAuth: ", isAuthenticated)
    return (<Context.Provider value={{userStore}}>
        <Slot/>
        <Redirect href="/(root)/explore"/>
    </Context.Provider>);
}
