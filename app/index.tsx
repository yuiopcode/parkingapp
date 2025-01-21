import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className="font-bold text-lg my-10 text-3xl"> Welcome to Restate </Text>
        <Link href="/sign-in"> Sign in </Link>
        <Link href="/explore"> explore </Link>
        <Link href="/profile"> profile </Link>
        <Link href="/properties/1"> Property </Link>
        <Link href="/(auth)/welcome"> Welcome </Link>
        <Link href="/(auth)/sign-in"> Sign in real </Link>
        <Link href="/(auth)/sign-up"> Sign up real </Link>
    </View>
  );
}
