import {Stack} from "expo-router";

import "../globals.css";
import {StatusBar} from "expo-status-bar";
import AppProvider from "@/components/providers/AppProvider";
import {useAuthStore} from "@/stores/authStore";
import {View} from "react-native";


export default function RootLayout() {
    const {isLoggedIn} = useAuthStore();
    return (
        <View className="flex-1 dark:bg-bg-dark bg-bg-light">
            <AppProvider>
                <Stack screenOptions={{headerShown: false}}>
                    <Stack.Protected guard={isLoggedIn}>
                        <Stack.Screen name="(tabs)"/>
                    </Stack.Protected>
                    <Stack.Screen name="login"/>
                </Stack>
            </AppProvider>
        </View>
    )
}
