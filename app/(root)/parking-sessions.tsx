import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeft, Clock, MapPin, Scroll} from "lucide-react-native";
import {useNavigation} from "@react-navigation/native";
import images from "@/constants/images";

const ActiveSessionComponent = () => {
    return(
        <View className="w-full h-full p-4 bg-white rounded-xl shadow-[0px_0px_14px_0px_rgba(0,0,0,0.15)]">
            <View className="flex-row ">
                <View className="w-28 h-28">
                    <Image
                        source={images.japan}
                        resizeMode={"cover"}
                        className={"w-full h-full rounded-lg"}
                    />
                </View>
                <View className="flex-col ml-4 ">
                    <Text className="font-light">Parking on</Text>
                    <Text className="text-xl font-semibold flex-1 flex-wrap">Galaxy Centrum Parking</Text>

                    <View className="pt-2 flex-row items-center mb-1 mt-2">
                        <Clock size={20} color={"#111111"}/>
                        <Text className="font-light ml-2">12:03 14.02.2025</Text>
                    </View>
                    <View className="pt-2 flex-row items-start flex-wrap">
                        <MapPin size={20} color={"#111111"} />
                        <Text className="font-light ml-2 flex-1 flex-wrap">
                            Aleja Wyzwolenia 33A, Szczecin, Poland
                        </Text>
                    </View>
                </View>

            </View>
            <View className="flex-row justify-between mt-2">
                <View className="flex-col">
                    <Text className="font-poppins text-lg mt-2">Renault Arkana</Text>
                    <Text className="text-2xl font-poppins-semibold">WW 3090 WW</Text>
                </View>
                <View>
                    <Text className="font-poppins text-lg mt-2">Money spent</Text>
                    <Text className="text-2xl font-poppins-semibold text-right">$10.42</Text>
                </View>
            </View>


        </View>
    )
}

const FinishedSessionComponent = () => {
    return(
        <View>
            <Text>finished hello</Text>
        </View>
    )
}


const ParkingSessions = () => {

    const [activeTab, setActiveTab] = useState('active');

    const navigation = useNavigation();
    const handleArrowClick = () => {
        navigation.goBack();
    };
    return (
        <View>
            <View className="flex-row w-full h-[150px] pb-4 bg-[#3f8efc] rounded-bl-[18px] pt-[90px] px-2 rounded-br-[18px] items-center ">
                <TouchableOpacity onPress={handleArrowClick}>
                    <ArrowLeft className={"size-24"} color="#ffffff" />
                </TouchableOpacity>
                <Text className={"font-poppins-semibold text-white text-4xl ml-4"}>Parking sessions</Text>
            </View>

            <ScrollView className="mt-2">
                <View className="flex-row justify-center mt-4">
                    <TouchableOpacity
                        className={`px-4 py-2 rounded-full ${activeTab === 'active' ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onPress={() => setActiveTab('active')}
                    >
                        <Text className={`text-white text-lg`}>Active</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className={`px-4 py-2 rounded-full ml-4 ${activeTab === 'completed' ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onPress={() => setActiveTab('completed')}
                    >
                        <Text className={`text-white text-lg`}>Finished</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <ScrollView className="mt-4 px-4">
                {activeTab === 'active' && (
                    <>
                        <ActiveSessionComponent />
                    </>
                )}

                {activeTab === 'completed' && (
                    <>
                        <FinishedSessionComponent />
                    </>
                )}
            </ScrollView>
        </View>
    )
}
export default ParkingSessions
