import { Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from '@react-navigation/native';
import images from '@/constants/images';
import {Input} from "postcss";


const SignUp = () => {
    const navigation = useNavigation();

    const handleArrowClick = () => {
        navigation.goBack(); // Навигация к предыдущему экрану
    };

    return (
        <SafeAreaView className={"h-full bg-pink-50"}>
            <View className="flex-col mx-5 inline-flex bg-white">
                {/* Top row with arrow on the left and logo on the right */}
                <View className="flex-row w-full items-center justify-between">
                    <TouchableOpacity onPress={handleArrowClick}>
                        <ArrowLeft size={24} color={"#000000"} />
                    </TouchableOpacity>
                    <Image source={images.logoBlue} className="w-7 h-8 relative overflow-hidden " />
                </View>

                {/* Text section */}
                <View className={"flex-col mt-10"}>
                    <Text className="text-black text-2xl font-medium font-['Roboto'] leading-[21px]">
                        Create Account
                    </Text>
                    <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px] mt-2">
                        Please fill your details
                    </Text>
                </View>

                <View className="flex-col mt-10">
                    <Text className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Email</Text>
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField placeholder="Enter Text here..." />
                    </Input>
                </View>
            </View>
        </SafeAreaView>

    );
};

export default SignUp;
