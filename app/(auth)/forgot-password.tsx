import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeft} from "lucide-react-native"
import images from "@/constants/images";
import {useNavigation} from "@react-navigation/native";



const ForgotPassword = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleArrowClick = () => {
        navigation.goBack();



    };

    return (

        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView className="h-full bg-white">
                <View className="flex-col mx-5 inline-flex my-5 bg-white">
                    <View className="flex-row w-full items-center justify-between">
                        <TouchableOpacity onPress={handleArrowClick}>
                            <ArrowLeft className={"size-24"} color="#000000" />
                        </TouchableOpacity>
                        <Image source={images.logoBlue} className="w-7 h-8 relative overflow-hidden" />
                    </View>
                    <View className="flex-col mt-8">
                        <Text className="text-black text-3xl font-semibold font-['Roboto'] leading-[30px] mb-2">Password recovery</Text>
                        <Text className="text-black text-m font-normal font-['Roboto'] leading-[21px] mt-2">
                            Enter your password and we sent a recovery code{'\n'}to your email!
                        </Text>
                    </View>



                    <View className="flex-col mt-10">
                        <Text className="text-black text-l font-normal font-['Roboto'] leading-[21px]">Email address</Text>
                        <TextInput
                            className="w-full h-14 border border-gray-300 rounded-md p-5 text-black mt-1.5"
                            placeholder="Your email"
                            placeholderTextColor="#7b7b7b"
                            value={email}
                            onChangeText={setEmail}
                            textContentType="emailAddress"
                            keyboardAppearance="dark"

                        />
                    </View>

                    <TouchableOpacity
                        className={"bg-[#438eff] rounded-xl w-full  mt-8 h-14  flex-row items-center justify-center"}
                    >
                        <Text className="text-white ml-2 font-rubik-semibold">Continue</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
                </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}
export default ForgotPassword
