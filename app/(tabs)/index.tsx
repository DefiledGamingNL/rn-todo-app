import {Switch, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useAuthStore} from "@/stores/authStore";
import {useRouter} from "expo-router";
import {createHomeStyles} from "@/theme/home.styles";
import {useThemeStore} from "@/stores/themeStore";
import {LinearGradient} from "expo-linear-gradient";
import Header from "@/components/Header";
import React from "react";
import TodoInput from "@/components/TodoInput";

export default function Index() {
    const {logOut} = useAuthStore();
    const router = useRouter();
    const {colors} = useThemeStore();
    const homeStyles = createHomeStyles(colors);

    const handleLogout = async () => {
        logOut();
        router.replace('/login');
    }

    return (
        <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
            <SafeAreaView style={homeStyles.safeArea}
                          className='dark:bg-bg-dark bg-bg-light'
            >
                <Header/>
                <TodoInput/>
            </SafeAreaView>
        </LinearGradient>
    );
}
