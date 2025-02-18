import {TouchableOpacity, View} from "react-native";
import {Bell, Home, Map, Search, Triangle, User} from "lucide-react-native";
import React from "react";
import {useRouter} from "expo-router";

const BottomMenu = () => {
    const router = useRouter();

    return (
        <View className="absolute bottom-0 left-0 right-0 h-[60px] mx-4 mb-6 rounded-[22px] bg-white shadow-md justify-center">
            <View className="flex-row justify-around py-4">
                <TouchableOpacity className="items-center" onPress={() => router.push('/(root)/map-search')}>
                    <Map size={28} color="#438eff" />
                </TouchableOpacity>
                <TouchableOpacity className="items-center" onPress={() => router.push('/parking-sessions')}>
                    <Search size={28} color="#438eff" />
                </TouchableOpacity>
                <TouchableOpacity className="items-center" onPress={() => router.push('/explore')}>
                    <Triangle fill="#438eff" size={28} color="#438eff" />
                </TouchableOpacity>
                <TouchableOpacity className="items-center" onPress={() => router.push('/owned-cars')}>
                    <Bell size={28} color="#438eff" />
                </TouchableOpacity>
                <TouchableOpacity className="items-center" onPress={() => router.push('/profile')}>
                    <User size={28} color="#438eff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BottomMenu;