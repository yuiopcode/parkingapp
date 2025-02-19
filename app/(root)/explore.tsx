import {View, Text, ScrollView, TouchableOpacity, TextInput, Image} from 'react-native';
import React from 'react';
import {
    Bell,
    CircleParking,
    Clock,
    DollarSign,
    Home,
    Leaf,
    MapPin,
    Search,
    Shield, ShieldEllipsis,
    Star,
    User
} from 'lucide-react-native';

import images from '../../constants/images';
import BottomMenu from "@/app/components/BottomMenu";
import {useRouter} from "expo-router";

const ParkingComponent = () => {
    return (

            <View
                className="w-auto h-auto bg-accent-100  rounded-2xl p-4 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] mb-4 mx-5">
                <View className="flex-row overflow-hidden">
                    <View className="w-[100px] h-[100px] bg-gray-700 rounded-2xl overflow-hidden">
                        <Image
                            source={images.japan}
                            resizeMode={"cover"}
                            className={"w-full h-full"}
                        />
                    </View>
                    <View className="flex-col ml-4">
                        <View className="flex-wrap mb-2 max-w-full break-all">
                            <Text className="max-w-full text-black text-lg font-semibold">Galaxy Centrum Parking</Text>
                            <Text className="max-w-full text-gray-500 text-sm break-all">
                                Szczecińska 70, 70-953 Szeczecin
                            </Text>
                        </View>

                        <View className="flex-row flex-wrap mb-2 space-x-2 space-y-2">
                            <Star color="#FBBC05" fill="#FBBC05"/>
                            <Star color="#FBBC05" fill="#FBBC05"/>
                            <Star color="#FBBC05" fill="#FBBC05"/>
                            <Star color="#FBBC05" fill="#FBBC05"/>
                            <Star/>
                        </View>


                    </View>

                </View>
                <View className="max-w-full h-[1px] bg-[#757575]/50 rounded-b mx-2 my-2"/>

                <View className={"flex-row items-center px-3 py-1 justify-center"}>
                    <View className={"px-2 flex-row items-center justify-center"}>
                        <View className="px-1"><Clock size={16}/></View>
                        <Text>4 Minutes</Text>
                    </View>
                    <View className={"px-2 flex-row items-center"}>
                        <View className="px-1"><DollarSign size={16}/></View>
                        <Text>4 Minutes</Text>
                    </View>
                    <View className={"px-2 flex-row items-center"}>

                        <View className="px-1"><CircleParking size={16}/></View>
                        <Text className={"mr-2"}>4 Minutes</Text>
                    </View>
                </View>
            </View>
    );
};

export default function Explore() {

    const router = useRouter();
    return (
            <View className="flex-1 bg-[#FFF8F8]">
                {/* Прокручиваемая часть */}
                <ScrollView className="flex-1" bounces={true}>
                    {/* Верхний синий блок */}
                    <View className="h-[320px] bg-[#3f8efc] px-5">
                        <View className="flex-row justify-between">
                            <TouchableOpacity
                                className="w-44 bg-[#fffcfc]/20 rounded-[24px] mt-24 items-center justify-center flex-row">
                                <MapPin size={20} color="#fff"/>
                                <Text className="text-white text-sm font-poppins leading-snug ml-2">Town, Country</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className="size-12 mt-24 bg-[#fffcfc]/20 rounded-[24px] justify-center items-center" onPress={() => router.push('/notifications')}>
                                <Bell size={20} color="#fff"/>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-8 flex-row">
                            <View className="flex-col">
                                <Text className="text-white text-xl font-poppins-light leading-snug">Your balance</Text>
                                <Text className="text-white text-4xl font-poppins-semibold leading-snug">225.05$</Text>
                            </View>
                        </View>

                        {/* Белый блок с кнопками */}
                        <View className="absolute top-[230px] left-0 right-0 mx-4 bg-white rounded-3xl shadow-lg p-5">
                            <Text className="text-txt-100 text-xl font-semibold">Park easy and safety</Text>

                            {/* Кнопки */}
                            <View className="flex-row justify-between mt-3">
                                <TouchableOpacity className="items-center">
                                    <View className="w-16 h-16 bg-[#ADD7F6] rounded-2xl justify-center items-center">
                                        <User size={28} color="#3f8efc"/>
                                    </View>
                                    <Text className="text-gray-500 text-sm mt-1 text-center">Saved{"\n"}Parkings</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className="items-center">
                                    <View className="w-16 h-16 bg-[#ADD7F6] rounded-2xl justify-center items-center">
                                        <Leaf size={28} color="#3f8efc"/>
                                    </View>
                                    <Text className="text-gray-500 text-sm mt-1"> EV charging</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className="items-center">
                                    <View className="w-16 h-16 bg-[#ADD7F6] rounded-2xl justify-center items-center">
                                        <ShieldEllipsis size={28} color="#3f8efc"/>
                                    </View>
                                    <Text className="text-gray-500 text-sm mt-1">Secured</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className="items-center">
                                    <View className="w-16 h-16 bg-[#ADD7F6] rounded-2xl justify-center items-center">
                                        <Clock size={28} color="#3f8efc"/>
                                    </View>
                                    <Text className="text-gray-500 text-sm mt-1">24/7</Text>
                                </TouchableOpacity>

                            </View>

                            {/* Поисковая строка */}
                            <TextInput
                                className="mt-2 bg-gray-100 rounded-full p-4 flex-row items-center"
                                placeholder="Find parking space... }"
                                placeholderTextColor="#828282"
                            />
                        </View>
                    </View>

                    {/* Nearby parking */}
                    <View className="mt-[140px] px-5 mb-5">
                        <Text className="text-txt-100 text-xl font-poppins mt-1">Nearby parkings</Text>
                        <Text className="text-txt-200 text-s font-poppins-light mt-1">The best parking space near
                            you</Text>
                    </View>

                    {/* Пример нескольких парковочных компонентов */}
                    <View className="pb-[80px]">
                        <ParkingComponent/>
                        <ParkingComponent/>
                        <ParkingComponent/>
                    </View>

                </ScrollView>

                {/* Меню внизу */}
                <BottomMenu/>
            </View>
    );
};

