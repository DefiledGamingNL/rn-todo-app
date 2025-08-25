import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {useAuthStore} from "@/stores/authStore";
import {useRouter} from "expo-router";

const LoginScreen = () => {
    const {logIn} = useAuthStore();
    const router = useRouter();

    const handleLogin = async () => {
        logIn();
        router.replace('/')

    }
    return (
        <View className="flex-1 items-center justify-center dark:bg-bg-dark bg-bg-light">
            <TouchableOpacity onPress={handleLogin}>
                <Text
                    className="text-white dark:text-text-dark py-4 px-6 dark:bg-success-dark bg-success-light rounded">Login</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LoginScreen
