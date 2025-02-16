import React, {createContext, useContext, useEffect, useState} from 'react';
import LoadingPage from "@/app/(root)/LoadingPage";
import {Context} from "@/app/_layout";
import {View} from "react-native";
import Welcome from "@/app/(auth)/welcome";
import SignIn from "@/app/(auth)/sign-in";
import SignUp from "@/app/(auth)/sign-up";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createNavigationContainerRef } from '@react-navigation/native';

// const Stack = createStackNavigator();

// export const navigationRef = createNavigationContainerRef();

type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};

// Создаём контекст
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(true);
    const {userStore} = useContext(Context);



    useEffect(() => {
        userStore.validateAuthentication().then((isAuthenticated)=>{
            setIsAuthenticated(isAuthenticated);
            setLoading(false);
        })
    },[userStore.isAuthenticated]);

    if(isLoading){
        return <LoadingPage/>
    }

    if(!isAuthenticated){
        return <Welcome/>
    }



    return (
       /* <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                {/!* Unauthenticated Routes *!/}
                {!isAuthenticated ? (
                    <>
                        <Stack.Screen name="Login" component={SignIn} />
                        <Stack.Screen name="Register" component={SignUp} />
                        <Stack.Screen name="About" component={Welcome} />
                    </>
                ) : (
                    // Authenticated Routes
                    <>
                        {children}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>*/

        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};