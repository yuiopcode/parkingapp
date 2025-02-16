import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} initialRouteName="explore">
            <Stack.Screen name="explore" />
            <Stack.Screen name="map-search" />
            <Stack.Screen name="notifications" />
            <Stack.Screen name="profile" />
            <Stack.Screen name="parking-sessions" />
        </Stack>
    );
}