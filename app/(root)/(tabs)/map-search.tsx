import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeft, CircleParking, Clock, DollarSign, Search} from "lucide-react-native";

const TagComponent = () => {
    return(
        <View className="w-auto h-auto py-2 px-6 bg-white rounded-2xl mr-3">
            <Text className="text-gray-500">Charge</Text>
        </View>
        )
}

const CardComponent = () => {
    return(
        <View className="w-[330px] h-full bg-white rounded-2xl mx-3 p-4">
            <View>
                <View className="flex-row justify-between mb-2">
                    <View className="flex-col align-items-bottom">
                        <Text className="font-semibold text-lg"> Galaxy Centrum parking </Text>
                        <Text className="font-light text-sm"> Szczecińska 70, 70-953 Szczecin </Text>
                    </View>
                    <View className="w-12 h-12 bg-gray-700 rounded-md">

                    </View>
                </View>

                <View className={"flex-row items-center py-1 justify-between mb-3"}>
                    <View className={"px-1 flex-row items-center justify-center"}>
                        <View className="px-1"><Clock size={16}/></View>
                        <Text className="text-sm font-poppins text-gray-600">4 Minutes</Text>
                    </View >
                    <View className={"px-1 flex-row items-center"}>
                        <View className="px-1"><DollarSign size={16}/></View>
                        <Text className="text-sm font-poppins text-gray-600">4 Minutes</Text>
                    </View>
                    <View className={"px-1 flex-row items-center"}>

                        <View className="px-1"><CircleParking size={16}/></View>
                        <Text className="text-sm font-poppins text-gray-600">4 Minutes</Text>
                    </View>
                </View>
                {/*tags*/}
                <View className="flex-row flex-wrap mb-8">
                    {/* tag component */}
                    <View className="bg-blue-600/70 rounded-2xl items-center px-2 py-1.5 mr-3 mb-1.5">
                        <Text className="text-sm text-white leading-[13px] ">⏱️ 24/7</Text>
                    </View>
                    <View className="bg-blue-600/70 rounded-2xl items-center px-2 py-1.5 mr-3 mb-1.5">
                        <Text className="text-sm text-white leading-[13px]">🚗 Parking Available</Text>
                    </View>
                    <View className="bg-blue-600/70 rounded-2xl items-center px-2 py-1.5 mr-3 mb-1.5">
                        <Text className="text-sm text-white leading-[13px]">🔒 Secure</Text>
                    </View>
                    <View className="bg-blue-600/70 rounded-2xl items-center px-2 py-1.5 mr-3 mb-1.5">
                        <Text className="text-sm text-white leading-[13px]">💰 Affordable</Text>
                    </View>
                </View>

                <TouchableOpacity
                    className={"bg-[#3F8EFC] rounded-3xl w-full py-4  h-14 items-center justify-center"}
                >
                    <Text className="text-white ml-2 font-rubik-semibold">Build route</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const MapSearch = () => {
    return (
        <SafeAreaView className="h-full w-full bg-gray-600 justify-between items-center">
            <View>
                <View className="items-center justify-center px-5 mb-4">
                    <View className="w-full mt-4">
                        <View className="flex-row items-center h-14  rounded-[36px] px-5 bg-white">

                            <TouchableOpacity>
                                <ArrowLeft size={26} color="#757575"/>
                            </TouchableOpacity>


                            <TextInput
                                className="flex-1 text-black mx-3"
                                placeholder="Find location"
                                placeholderTextColor="#828282"
                            />

                            <TouchableOpacity>
                                <Search size={26} color="#757575"/>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <View className={"w-full flex-row items-center px-2"}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <TagComponent/>
                        <TagComponent/>
                        <TagComponent/>
                        <TagComponent/>
                        <TagComponent/>

                    </ScrollView>
                </View>
            </View>

            <View className="flex-row w-full mx-2">
                <ScrollView horizontal>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}
export default MapSearch
