import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AuthProvider, useAuth} from "@/app/context/AuthProvider";
import {createStackNavigator} from "@react-navigation/stack";
import Welcome from "@/app/(auth)/welcome";
import SignIn from "@/app/(auth)/sign-in";
import SignUp from "@/app/(auth)/sign-up";
import Explore from "@/app/(root)/(tabs)/explore";
import Notifications from "@/app/(root)/(tabs)/notifications";
import Onboarding from "@/app/(auth)/welcome";

const Stack = createNativeStackNavigator();

const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
);

const AppStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
);

const RootNavigator = () => {
    const { isAuthenticated } = useAuth(); // Получаем состояние авторизации через контекст

    return (
        <NavigationContainer>
            {isAuthenticated ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default RootNavigator;



