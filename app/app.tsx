import React from 'react';
import { AuthProvider } from "@/app/context/AuthProvider";
import RootNavigator from "@/app/RootNavigator";
import { NavigationContainer } from '@react-navigation/native'; // импортируем NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from "@/app/(auth)/welcome";
import SignUp from '@/app/(auth)/sign-up';
import SignIn from "@/app/(auth)/sign-in";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider> {/* Оборачиваем приложение в AuthProvider */}
            <RootNavigator />
        </AuthProvider>
    );
}
