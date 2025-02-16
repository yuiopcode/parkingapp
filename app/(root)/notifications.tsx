import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeft, Car} from "lucide-react-native"
import {useNavigation} from "@react-navigation/native";



const NotificationCard = ({ id,text,time}) =>  {
    return (
        <View className="bg-white py-4 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] rounded-lg mb-5 flex-row items-center justify-between">
            {/* Иконка слева */}

            <View className="px-[12px]">
                <Car size={32} color="#3F8EFC"/>
            </View>


            {/* Текст уведомления */}
            <View className="flex-1 ml-auto">
                {/* Заголовок уведомления */}
                <View className="flex-row flex-row justify-between items-center mr-3">
                    <Text className="text-black text-lg font-poppins-medium py-1">Parking alert 🚗</Text>
                    <Text className="text-black text-[14px] font-poppins">14:56</Text>
                </View>


                {/* Текст уведомления */}
                <Text className="text-black text-sm font-poppins-light mt-1">{text}</Text>
            </View>

            {/* Время справа */}
            <Text className="text-gray-500 text-sm">{time}</Text>
        </View>
    );
};


const Notifications = () => {

    const navigation = useNavigation();

    const handleArrowClick = () => {
        navigation.goBack();
    };

    return (
            <ScrollView className="h-full bg-[#FFF8F8] " bounces={false}>
                <View className="flex-row w-full h-[150px] pb-4 bg-[#3f8efc] rounded-bl-[18px] pt-[90px] px-2 rounded-br-[18px] items-start ">
                    <TouchableOpacity onPress={handleArrowClick}>
                        <ArrowLeft className={"size-24"} color="#ffffff" />
                    </TouchableOpacity>
                    <Text className={"font-poppins-semibold text-white text-4xl ml-4"}>Notifications</Text>

                </View>

                <View className="flex-col mt-[18px] mx-[14px]">
                    <Text className="
                    my-[12px]
                    text-black
                    text-2xl
                    font-medium
                    font-['Poppins']
                    leading-snug">
                        Today
                    </Text>

                    <NotificationCard text="{A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone!}" />
                    <NotificationCard text="{A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone!}" />
                    <NotificationCard text="{A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone!}" />
                    <NotificationCard text="{A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone!}" />
                    <NotificationCard text="{A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone!}" />
                    <NotificationCard text="{A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone! A parking spot has opened up 200 meters from your location. Book now before it's gone!}" />


                </View>
            </ScrollView>




    )
}
export default Notifications
