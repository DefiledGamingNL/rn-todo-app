import React from "react";
import {View, Text, Switch} from "react-native";
import {useThemeStore} from "@/stores/themeStore";

export default function SettingsScreen() {
    const {isDarkMode, toggleDarkMode} = useThemeStore();

    return (
        <View className="flex-1 items-center justify-center dark:bg-gray-900 bg-gray-500">
            <View className="flex-row justify-center items-center space-x-2">
                <Text className="dark:text-white">Toggle Theme</Text>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode}/>
            </View>
        </View>
    );
}