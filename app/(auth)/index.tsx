import { Stack } from "expo-router";
import Welcome from "@/app/(auth)/welcome";

export default function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} initialRouteName="welcome">
            <Stack.Screen name="welcome"/>
            <Stack.Screen name="sign-in" />
            <Stack.Screen name="sign-up" />
        </Stack>
    );
}