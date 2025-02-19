import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeft, Car, Clock, MapPin, Scroll} from "lucide-react-native";
import {useNavigation} from "@react-navigation/native";
import images from "@/constants/images";
import {Context} from "@/app/_layout";
import {ISessionList} from '../interfaces';
import PrettyDate from "@/app/components/parsing-date";
import Header from "@/app/components/header";

/*carnum*/

const calculateDuration = (startTime: Array<number>, endTime: Array<number>): string => {
    const startDate = new Date(startTime[0], startTime[1] - 1, startTime[2], startTime[3], startTime[4]);
    const endDate = new Date(endTime[0], endTime[1] - 1, endTime[2], endTime[3], endTime[4]);

    const diffInMilliseconds = endDate.getTime() - startDate.getTime();

    if (diffInMilliseconds < 0) {
        return "Invalid time range";
    }

    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60)); // В минутах
    const hours = Math.floor(diffInMinutes / 60); // Часы
    const minutes = diffInMinutes % 60; // Минуты

    return `${hours} h ${minutes} min`;
};

const ActiveSessionComponent = ({sessionList}: { sessionList: ISessionList }) => {

console.log(sessionList);
    return (
        <View className="w-full h-full p-4 bg-white rounded-xl shadow-[0px_0px_14px_0px_rgba(0,0,0,0.15)]">
            <View className={"flex-row items-center justify-between"}>
                <View className="flex-row items-center justify-between">
                    <View className="pr-3">
                        <Car size={32} color={"#000000"}/>
                    </View>

                    <View className={"flex-col items-start pr-4"}>
                        <Text className="font-poppins-light text-lg">Renault Arkana</Text>
                        <Text className="text-2xl font-poppins-medium">{sessionList.plateNumber}</Text>
                    </View>
                </View>
                <View className={"flex-col items-end justify-between"}>
                    <Text className="font-poppins-light text-lg text-right">Duration:</Text>
                    <Text className="text-2xl font-poppins-medium" > {calculateDuration(sessionList.startTime, sessionList.endTime)}</Text>
                </View>
            </View>
            <View className="flex-row items-center justify-between mt-8 mb-4">
                <View>
                    <Text className="font-poppins-light text-sm mb-1">Entry time</Text>
                    <Text className="font-medium" ><PrettyDate timestamp={sessionList.startTime} /></Text>
                </View>
                <View>
                    <Text className="font-poppins-light text-sm mb-1">Leave time</Text>
                    <Text className="font-medium" ><PrettyDate timestamp={sessionList.endTime} /> </Text>
                </View>
            </View>
            <Text className="font-poppins-light text-sm mb-1">Payment status</Text>
            <Text className="font-medium">{sessionList.paymentStatus}</Text>

        </View>
    )
}

/*const FinishedSessionComponent = () => {
    return (
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
                    <Text className="text-xl font-semibold flex-1 flex-wrap mb-4">Galaxy Centrum Parking</Text>

                    <View className=" flex-row items-center mb-1">
                        <Clock size={20} color={"#111111"}/>


                        <View className="items-center">
                            <Text className="font-light ml-2">23:03 15 Jan</Text>
                        </View>
                        <Text> To</Text>
                        <View className="flex-row items-center">
                            <Text className="font-light ml-2">12:03 10 Jan</Text>
                        </View>
                    </View>


                    <View className="pt-2 flex-row items-start flex-wrap">
                        <MapPin size={20} color={"#111111"}/>
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
}*/


const ParkingSessions = () => {
    const {sessionStore, userStore} = useContext(Context);
    const [activeTab, setActiveTab] = useState('active');
    const [userId, setUserId] = useState("");
    const [page, setPage] = useState(sessionStore.page);
    const [sessionList, setSessionList] = useState<ISessionList[]>([]);

    const navigation = useNavigation();
    const handleArrowClick = () => {
        navigation.goBack();
    };

    useEffect(() => {
        if (userId) {
            sessionStore.fetchSessions(userId, page).then(() => {
                setSessionList(sessionStore.sessionPage);
                console.log("Sessionlist result: " + sessionStore.sessionPage);
            })
        }
    }, [userId, page])

    useEffect(() => {
        if (userStore.user == null) {
            userStore.fetchUser().then(() => {
                if (userStore.user != null) {
                    setUserId(userStore.user?.userId);
                }
            })
        } else {
            setUserId(userStore.user?.userId);
        }
    }, [])



    return (
        <ScrollView>
            <Header header={"Parking sessions"}/>

            <View className="mt-1 ml-4">
                <View className="flex-row justify-start mt-4">
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
            </View>

            <ScrollView className="mt-4 px-4">
                {activeTab === 'active' && (
                    <>

                        {sessionList.map((session) => {
                            console.log("SessionList loaded component: " + session.id);
                            console.log("time parked: " + session.endTime);
                            return (
                                <ActiveSessionComponent key={session.id} sessionList={session}/>
                                )

                        })}


                    </>
                )}

                {activeTab === 'completed' && (
                    <>
                        <Text>finished</Text>
                    </>
                )}
            </ScrollView>
        </ScrollView>
    )
}
export default ParkingSessions
