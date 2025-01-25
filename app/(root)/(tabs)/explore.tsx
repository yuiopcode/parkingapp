import {View, Text} from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import React from 'react'
import { Button, ButtonText, ButtonSpinner } from "@/components/ui/button"
import colors from "tailwindcss/colors"
import {SafeAreaView} from "react-native-safe-area-context";

const Explore = () => {
    return (
        <SafeAreaView className="bg-black-300 h-full justify-center p-5">
            <OTPInputView pinCount={4} />
        </SafeAreaView>
    )
}
export default Explore
