import {SplashScreen, Stack} from "expo-router";

import "./global.css"
import { useFonts } from "expo-font";
import {createContext, useEffect} from "react";
import {AuthProvider} from "@/app/context/AuthProvider";
import UserStore from "@/app/store/UserStore";

const userStore = new UserStore();

interface AppState {
  userStore: UserStore;
}

export const Context = createContext<AppState>({
  userStore,
});

export default function RootLayout() {
  const[fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  })

  useEffect(() => {
    if(fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) {return null}

  return <Context.Provider value={{ userStore }}>
    <Stack screenOptions={{ headerShown: false }} />
  </Context.Provider>

}
