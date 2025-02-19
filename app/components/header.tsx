import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {ArrowLeft} from "lucide-react-native"; // Импорт useNavigation
 // Например, иконка стрелки

// Исправляем тип пропсов: ожидаем объект с полем header типа string
const Header: React.FC<{ header: string }> = ({ header }) => {
    const navigation = useNavigation();

    const handleArrowClick = () => {
        navigation.goBack();
    };

    return (
        <View className="flex-row w-full h-[150px] pb-4 bg-[#3f8efc] rounded-bl-[18px] pt-[90px] px-2 rounded-br-[18px] items-center ">
            <TouchableOpacity onPress={handleArrowClick}>
                <ArrowLeft className={"size-24"} color="#ffffff" />
            </TouchableOpacity>
            <Text className={"font-poppins-semibold text-white text-4xl ml-4"}>{header}</Text>
        </View>
    );
};

export default Header;