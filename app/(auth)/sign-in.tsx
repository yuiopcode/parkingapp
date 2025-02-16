import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput, Alert, Platform, Keyboard,
    KeyboardAvoidingView, TouchableWithoutFeedback,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native'; // Using icons for eye toggle
import { useNavigation } from '@react-navigation/native';
import images from '../../constants/images';

const SignIn = () => {
    const navigation = useNavigation();

    // Email and Password states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Controls password visibility

    const handleArrowClick = () => {
        /*navigation.goBack();*/
    };


    const handleLogin = async () => {

        try {
            const response = await fetch('/api/v1/security/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                await SecureStore.setItemAsync('jwt_token', data.token);
                Alert.alert('Login Successful', 'You have successfully logged in!');
            } else {
                Alert.alert('Login Failed', data.message || 'Something went wrong.');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred during login.');
        }

    };

    return (
        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView className="h-full bg-white">
                    <View className="flex-col mx-5 inline-flex my-5 bg-white">
                        {/* Header Section */}
                        <View className="flex-row w-full items-center justify-between">
                            <TouchableOpacity onPress={handleArrowClick}>
                                <ArrowLeft className={"size-24"} color="#000000" />
                            </TouchableOpacity>
                            <Image source={images.logoBlue} className="w-7 h-8 relative overflow-hidden" />
                        </View>

                        {/* Title Section */}
                        <View className="flex-col mt-8">
                            <Text className="text-black text-3xl font-semibold font-['Roboto']  leading-[30px]">Log in</Text>
                            <Text className="text-black text-m font-normal font-['Roboto'] leading-[21px] ">
                                Please fill your details
                            </Text>
                        </View>

                        {/* Email Input Section */}
                        <View className="flex-col mt-10">
                            <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Email address</Text>
                            <TextInput
                                className="w-full h-14 border border-gray-300 rounded-md p-5 text-black mt-1.5"
                                placeholder="Your email"
                                placeholderTextColor="#7b7b7b"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        {/* Password Input Section */}
                        <View className="flex-col mt-3">
                            <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Password</Text>
                            <View className="w-full h-14 border border-gray-300 rounded-md flex-row items-center mt-1.5">
                                {/* Password Input */}
                                <TextInput
                                    className="flex-1 h-full px-4 text-black"
                                    placeholder="Password"
                                    placeholderTextColor="#7b7b7b"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!isPasswordVisible} // Toggles password visibility
                                />
                                {/* Eye Icon */}
                                <TouchableOpacity
                                    onPress={() => setIsPasswordVisible((prev) => !prev)}
                                    className="pr-4"
                                    activeOpacity={0.7}
                                >
                                    {isPasswordVisible ? (
                                        <EyeOff size={20} color="#000000" />
                                    ) : (
                                        <Eye size={20} color="#000000" />
                                    )}
                                </TouchableOpacity>
                            </View>

                            {/* Forgot Password Text */}
                            <View className="flex-row justify-end mt-2">
                                <TouchableOpacity>
                                    <Text className="text-blue-500 text-base font-normal font-['Roboto']">Forgot password?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Login Button */}
                        <TouchableOpacity
                            className="bg-[#438eff] rounded-xl w-full py-4 mt-[220px] h-14 items-center justify-center"
                            onPress={handleLogin}
                        >
                            <Text className="text-white text-base font-medium font-['Roboto']">Continue</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={handleLogin}
                            className={"bg-white border border-gray-300 rounded-3xl w-full py-4 mt-5 h-14"}
                        >
                            <View className="flex-row items-center justify-center">
                                <Image source={images.google} className="w-5 h-5" resizeMode="contain" />
                                <Text className="text-black ml-2 font-poppins-semibold">Continue with Google</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleLogin}
                            className={"bg-white border border-gray-300 rounded-3xl w-full py-4 mt-5 h-14"}
                        >
                            <View className="flex-row items-center justify-center">
                                <Image source={images.apple} className="w-5 h-5" resizeMode="contain" />
                                <Text className="text-black ml-2 font-poppins-semibold">Continue with Apple</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default SignIn;
