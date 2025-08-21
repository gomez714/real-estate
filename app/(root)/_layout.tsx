import { Redirect, Slot, Stack } from "expo-router";
import { useGlobalContext } from "@/lib/global-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";

export default function AppLayout() {
    const { loading, isLogged } = useGlobalContext()

    if (loading) {
        return <SafeAreaView className="bg-white h-full flex justify-center items-center" >
            <ActivityIndicator size="large" color="text-primary-300" />
        </SafeAreaView>
    }

    if (!isLogged) {
        return <Redirect href="/sign-in" />
    }

    return (
        <Slot />
    )

}