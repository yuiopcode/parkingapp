import {SplashScreen, Stack} from "expo-router";

import "./global.css"
import { useFonts } from "expo-font";
import {useEffect} from "react";

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

  return <Stack screenOptions={{ headerShown: false }} />;
}
