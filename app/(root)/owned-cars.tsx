import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import React from 'react'
import {ArrowLeft, Car} from "lucide-react-native";
import {useNavigation} from "@react-navigation/native";
import images from "@/constants/images";


const CarCard = () =>  {
    return (
        <View className="h-48 w-48 bg-gray-700 rounded-2xl">
                <Image
                    source={images.japan}
                    resizeMode={"cover"}
                    className={"w-48 h-3/5"}
                />

        </View>

    );
};

const OwnedCars = () => {

    const navigation = useNavigation();

    const handleArrowClick = () => {
        navigation.goBack();
    };


    return (
        <ScrollView className="h-full bg-[#FFF8F8] " bounces={true}>
            <View
                className="flex-row w-full h-[145px] pb-4 bg-[#3f8efc] rounded-bl-[18px] pt-[90px] px-2 rounded-br-[18px] items-start ">
                <TouchableOpacity onPress={handleArrowClick}>
                    <ArrowLeft className={"size-24"} color="#ffffff"/>
                </TouchableOpacity>
                <Text className={"font-poppins-semibold text-white text-4xl ml-4"}>Owned cars</Text>

            </View>
            <View className="p-4 flex flex-row flex-wrap gap-4">
                <CarCard/>
                <CarCard/>
            </View>

        </ScrollView>
    )

}
export default OwnedCars
