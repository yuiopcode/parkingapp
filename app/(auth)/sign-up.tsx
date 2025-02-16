import {
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    StyleSheet,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from '@react-navigation/native';
import images from '@/constants/images';
import icons from "@/constants/icons";  
import * as SecureStore from "expo-secure-store";




const SignUp = () => {
    const navigation = useNavigation();

    const handleArrowClick = () => {
        navigation.goBack(); // Navigate to the previous screen
    };

    const handleSubmit = async () => {

        try {
            const response = await fetch('/api/v1/security/register/', {
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
                Alert.alert('Registration Successful', 'You have successfully registered!');
            } else {
                Alert.alert('Registration Failed', data.message || 'Something went wrong.');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred during registration.');
        }

    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isFocused, setIsFocused] = useState(false); // Moved isFocused to parent state
    const handleLogin =() => {}

    const inputClassName = `w-full h-14 border-[#d1d1d1]  border rounded-md p-5 text-black mt-1.5 ${
        isFocused ? 'border-blue-300' : 'border-gray-300'
    }`;

    return (

        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView className={"h-full bg-white"}>
                    <View className="flex-col mt-4 mx-5 inline-flex bg-white">
                        {/* Top row with arrow on the left and logo on the right */}
                        <View className="flex-row w-full items-center justify-between">
                            <TouchableOpacity onPress={handleArrowClick}>
                                <ArrowLeft size={30} color={"#000000"} />
                            </TouchableOpacity>
                            <Image source={images.logoBlue}  className=" w-7 h-8 relative overflow-hidden" />
                        </View>

                        {/* Text section */}
                        <View className={"flex-col mt-10"}>
                            <Text className="text-black text-3xl font-semibold font-['Roboto'] leading-[30px]">
                                Create Account
                            </Text>
                            <Text className="text-black text-lg font-normal font-['Roboto'] leading-[21px] mt-2">
                                Please fill your details
                            </Text>
                        </View>

                        {/* Email Input */}
                        <View className="flex-col mt-10">
                            <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Email</Text>
                            <TextInput
                                className="w-full h-14 border border-gray-300 rounded-md p-5 text-black mt-2"
                                placeholder="Your email"
                                placeholderTextColor="#828282"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        {/* Password Input */}
                        <View className="flex-col mt-3">
                            <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Create a password</Text>
                            <TextInput
                                className="w-full h-14 border border-gray-300 rounded-md p-5 text-black mt-1.5"
                                placeholder="Password"
                                placeholderClassName={"text-color-black"}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>

                        {/* Confirm Password Input */}
                        <View className="flex-col mt-3">
                            <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Confirm password</Text>
                            <TextInput
                                className={inputClassName} // Use the extracted inputClassName
                                placeholder="Repeat password"
                                placeholderTextColor="#7b7b7b"
                                value={passwordConfirm}
                                onChangeText={setPasswordConfirm}
                                secureTextEntry
                                onFocus={() => setIsFocused(true)} // Set isFocused to true on focus
                                onBlur={() => setIsFocused(false)} // Set isFocused to false on blur
                            />
                        </View>

                        <TouchableOpacity
                            onPress={handleSubmit}
                            className={"bg-[#438eff] rounded-xl w-full py-4 mt-28 h-14 items-center justify-center"}
                        >
                            <Text className="text-white ml-2 font-rubik-semibold">Continue</Text>
                        </TouchableOpacity>
                        <View className={"items-center justify-center mt-4"}>
                            <Text className="w-[263px] text-center">
                                <Text className="text-black/70 text-sm font-normal font-['Inter'] leading-[17.5px]">
                                    By creating an account or signing you agree to our{' '}
                                </Text>
                                <Text className="text-black text-sm font-semibold font-['Inter'] underline leading-[17.5px] touch-auto">
                                    Terms and Conditions
                                </Text>
                            </Text>
                        </View>


                        <TouchableOpacity
                            onPress={handleLogin}
                            className={"bg-white border border-gray-300 rounded-3xl w-full py-4 mt-5 h-14"}
                        >
                            <View className="flex-row items-center justify-center">
                                <Image source={images.google} className="w-5 h-5" resizeMode="contain" />
                                <Text className="text-black ml-2 font-rubik-semibold">Continue with Google</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleLogin}
                            className={"bg-white border border-gray-300 rounded-3xl w-full py-4 mt-5 h-14"}
                        >
                            <View className="flex-row items-center justify-center">
                                <Image source={images.apple} className="w-5 h-5" resizeMode="contain" />
                                <Text className="text-black ml-2 font-rubik-semibold">Continue with Apple</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    );
};

export default SignUp;
