import {View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import { ArrowLeft } from 'lucide-react-native';

import images from '@/constants/images';
import icons from '@/constants/icons';

const Onboarding = () => {

    return (
        <SafeAreaView className={"bg-white h-full "}>

            <View className="w-[400px] h-[420px] flex-col items-center inline-flex mt-36">

                <View className="justify-center flex-1 align-middle">
                    <Image source={images.welcomeCar} className={"align-middle"} resizeMode={"contain"} style={{ width: 320, height: 210}} />
                </View>


                <View className="flex-1 justify-center items-center">
                    <Text className="text-black text-center text-3xl font-bold font-rubik-bold mt-8 px-12">
                        Let's start Your parking journey!
                    </Text>
                    <Text className="text-black text-center text-sm font-rubik-light mt-4 px-6">
                        Simplify your parking with fast, secure, and convenient solutions. Log in to get started!
                    </Text>
                </View>

            </View>
                <></>
            <View>

            </View>
        </SafeAreaView>
    )
}
export default Onboarding
