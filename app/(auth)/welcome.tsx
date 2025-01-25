import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import { ArrowLeft } from 'lucide-react-native';

import images from '../../constants/images';
import icons from '../../constants/icons';

const Onboarding = () => {

    const handleLogin =() => {};

    return (
        <SafeAreaView className={"bg-white h-full "}>

            <View className="w-[400px] h-[420px] flex-col items-center inline-flex mt-[150px]">

                <View className="justify-center flex-1 align-middle">
                    <Image source={images.welcomeCar} className={"align-middle"} resizeMode={"contain"} style={{ width: 320, height: 210}} />
                </View>


                <View className="flex-1 justify-center items-center ">
                    <Text className="text-black text-center text-3xl font-bold font-poppins-bold mt-6 px-12">
                        Let's start
                    </Text>

                    <Text className="text-blue-500 text-center text-3xl font-bold font-poppins-bold px-12">
                        Your parking journey!
                    </Text>

                    <Text className="text-black text-center text-m font-poppins-light mt-5 px-6">
                        Simplify your parking with fast, secure, and convenient solutions. Log in to get started!
                    </Text>
                </View>

            </View>
                <></>
            <View className="">
                <TouchableOpacity
                    onPress={handleLogin}
                    className={"bg-[#438eff] rounded-xl w-full-40 py-4 mx-5 mt-[110px] h-14 items-center justify-center"}
                >
                    <Text className="text-white ml-2 font-rubik-semibold">Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="border-2 border-blue-500 w-full-40 py-4 mx-5 h-14 mt-2 mb-5 bg-white rounded-lg"
                    onPress={() => console.log('Button Pressed')}
                >
                    <Text className="text-blue-500 text-center font-bold">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Onboarding
