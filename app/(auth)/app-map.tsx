import {View, Text} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

const AppMap = () => {
    return (
        <View className={"container mt-5 items-center justify-center"}>
            <Text className="font-bold text-lg my-10 text-3xl"> Welcome to Restate </Text>

            <Link href="/explore"> explore </Link>
            <Link href="/map-search"> map-search </Link>
            <Link href="/parking-sessions"> parking sessions </Link>
            <Link href="/profile"> profile </Link>
            <Link href="/properties/1"> Property </Link>
            <Link href="/(auth)/welcome"> Welcome </Link>
        </View>
    )
}
export default AppMap
