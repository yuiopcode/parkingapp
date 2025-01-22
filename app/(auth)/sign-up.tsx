import {Text, TouchableOpacity, View, Image, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from '@react-navigation/native';
import images from '@/constants/images';
import icons from "@/constants/icons";




const SignUp = () => {
    const navigation = useNavigation();

    const handleArrowClick = () => {
        navigation.goBack();
    };

    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const handleLogin =() => {}

    const inputClassName = `w-full h-14 border-[#d1d1d1]  border rounded-md p-5 text-black mt-1.5 ${
        isFocused ? 'border-blue-300' : 'border-gray-300'
    }`;

    return (
        <SafeAreaView className={"h-full bg-white"}>
            <View className="flex-col mx-5 inline-flex bg-white">
                {/* Top row with arrow on the left and logo on the right */}
                <View className="flex-row w-full items-center justify-between">
                    <TouchableOpacity onPress={handleArrowClick}>
                        <ArrowLeft className="size-24 color-black"/>
                    </TouchableOpacity>
                    <Image source={images.logoBlue} className="w-7 h-8 relative overflow-hidden" />
                </View>

                {/* Text section */}
                <View className={"flex-col mt-7"}>
                    <Text className="text-black text-2xl font-medium font-['Roboto'] leading-[21px]">
                        Create Account
                    </Text>
                    <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px] mt-2">
                        Please fill your details
                    </Text>
                </View>

                {/* Email Input */}
                <View className="flex-col mt-10">
                    <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Email</Text>
                    <TextInput
                        className="w-full h-14 border border-gray-300 rounded-md p-5 text-black mt-1.5"
                        placeholder="Your email"
                        placeholderTextColor="#7b7b7b"
                        value={value}
                        onChangeText={setValue}
                    />
                </View>

                {/* Password Input */}
                <View className="flex-col mt-3">
                    <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Create a password</Text>
                    <TextInput
                        className="w-full h-14 border border-gray-300 rounded-md p-5 text-black mt-1.5"
                        placeholder="Password"
                        placeholderTextColor="#7b7b7b"
                        value={value1}
                        onChangeText={setValue1}
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
                        value={value2}
                        onChangeText={setValue2}
                        secureTextEntry
                        onFocus={() => setIsFocused(true)} // Set isFocused to true on focus
                        onBlur={() => setIsFocused(false)} // Set isFocused to false on blur
                    />
                </View>

                <TouchableOpacity
                    onPress={handleLogin}
                    className={"bg-[#438eff] border border-gray-300 rounded-xl w-full py-4 mt-28 h-14 items-center justify-center"}
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
    );
};

export default SignUp;

