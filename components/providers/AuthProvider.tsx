import {View, Text, Platform} from 'react-native'
import React, {useEffect} from 'react'
import {Redirect, SplashScreen} from "expo-router";
import {useAuthStore} from "@/stores/authStore";

type AuthProviderProps = {
    children?: React.ReactNode
}
const isWeb = Platform.OS === "web";

if (!isWeb) {
    SplashScreen.preventAutoHideAsync();
}

const AuthProvider = ({children}: AuthProviderProps) => {
    // mock loggedIn state for now.
    const {_hasHydrated} = useAuthStore();

    useEffect(() => {
        if (_hasHydrated) {
            SplashScreen.hideAsync();
        }
    }, [_hasHydrated]);

    if (!_hasHydrated && !isWeb) {
        return null;
    }
    return children
}
export default AuthProvider
