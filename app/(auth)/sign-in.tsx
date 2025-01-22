import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native'; // Using icons for eye toggle
import { useNavigation } from '@react-navigation/native';
import images from '@/constants/images';

const SignIn = () => {
    const navigation = useNavigation();

    // Email and Password states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Controls password visibility

    const handleArrowClick = () => {
        navigation.goBack(); // Navigates back to the previous screen
    };

    const handleLogin = () => {
        // Add login logic here
        console.log('Login pressed with email:', email, 'password:', password);
    };

    return (
        <SafeAreaView className="h-full bg-white">
            <View className="flex-col mx-5 inline-flex bg-white">
                {/* Header Section */}
                <View className="flex-row w-full items-center justify-between">
                    <TouchableOpacity onPress={handleArrowClick}>
                        <ArrowLeft size={24} color="#000000" />
                    </TouchableOpacity>
                    <Image source={images.logoBlue} className="w-7 h-8 relative overflow-hidden" />
                </View>

                {/* Title Section */}
                <View className="flex-col mt-7">
                    <Text className="text-black text-2xl font-medium font-['Roboto'] leading-[21px]">Log in</Text>
                    <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px] mt-2">
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
                            <Text className="text-[#535353] text-base font-normal font-['Roboto']">Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Login Button */}
                <TouchableOpacity
                    className="bg-[#438eff] border border-gray-300 rounded-xl w-full py-4 mt-28 h-14 items-center justify-center"
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

export default SignIn;
