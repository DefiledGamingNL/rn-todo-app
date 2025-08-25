import React, {useEffect} from "react";
import {Tabs} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import {TouchableOpacity} from "react-native";
import {useRouter, usePathname} from "expo-router";
import {Text} from "react-native";
import {useThemeStore} from "@/stores/themeStore";
import {Drawer} from "expo-router/drawer";


const TabLayout = () => {
    const router = useRouter();
    const handleSettingsPress = () => {
        console.log("Settings Pressed");
        router.replace('/settings')
    }
    const {colors} = useThemeStore();
    const pathname = usePathname();


    return (
        <Drawer
            screenOptions={{
                headerTintColor: colors.textMuted,
                headerStyle: {backgroundColor: colors.surface},
                drawerStyle: {backgroundColor: colors.surface},
                drawerActiveTintColor: colors.primary,
                drawerInactiveTintColor: colors.textMuted,
                drawerLabelStyle: {fontSize: 16, fontWeight: '500'},
            }}>
            <Drawer.Screen name="index" options={{
                drawerLabel: 'Taken',
                title: 'Taken'
            }}/>
            <Drawer.Screen name="settings" options={{
                drawerLabel: 'Instellingen',
                title: 'Instellingen',
            }}/>
        </Drawer>
    );
};

export default TabLayout;
