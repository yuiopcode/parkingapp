import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import images from "../constants/images";
import icons from "../constants/images";

const SignIn = () => {
    const handleLogin =() => {}


    return (
        <SafeAreaView className={"bg-white h-full"}>
            <ScrollView contentContainerClassName={"h-full"}>
                <Image source={images.onboarding} className="w-full h-4" resizeMode={"contain"} />

                <View>
                    <Text className={"text-base text-center uppercase font-rubik text-black-200"}> Welcome to Restate </Text>
                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">Lets Get You closer to {"\n"}
                    <Text className={"text-primary-300"}>Your Ideal Home</Text>
                    </Text>

                    <Text className={"text-lg font-rubik text-black-200 text-center mt-12"}> Login to Restate with Google
                    </Text>
                    <TouchableOpacity
                        onPress={handleLogin}
                        className={"bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"}
                    >
                        <View className="flex-row items-center justify-center">
                            <Image source={images.google} className="w-5 h-5" resizeMode="contain" />
                            <Text className="text-black ml-2 font-rubik-semibold">Sign in with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
