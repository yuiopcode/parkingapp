import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeft} from "lucide-react-native"
import {useNavigation} from "@react-navigation/native";

const ForgetPassword = () => {

    const navigation = useNavigation();

    const handleArrowClick = () => {
        navigation.goBack(); // Navigate to the previous screen
    };

    return (
        <SafeAreaView>
            <View className={" mx-5"}></View>
        </SafeAreaView>
    )
}
export default ForgetPassword
