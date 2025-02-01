import {TouchableOpacity, View} from "react-native";
import {Bell, Home, Search, Triangle, User} from "lucide-react-native";
import React from "react";

const BottomMenu = () => {
    return (
        <View className="absolute bottom-0 left-0 right-0 h-[60px] mx-4 mb-6 rounded-[22px] bg-white shadow-md justify-center">
            <View className="flex-row justify-around py-4">
                <TouchableOpacity className="items-center">
                    <Home size={28} color="#438eff" />
                </TouchableOpacity>
                <TouchableOpacity className="items-center">
                    <Search size={28} color="#438eff" />
                </TouchableOpacity>

                <TouchableOpacity className="items-center">
                    <Triangle fill="#438eff" size={28} color="#438eff" />
                </TouchableOpacity>
                <TouchableOpacity className="items-center">
                    <Bell size={28} color="#438eff" />
                </TouchableOpacity>
                <TouchableOpacity className="items-center">
                    <User size={28} color="#438eff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BottomMenu;