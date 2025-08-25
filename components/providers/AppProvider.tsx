import React from 'react'
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import QueryClientProvider from "@/components/providers/QueryClientProvider";
import AuthProvider from "@/components/providers/AuthProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import {GestureHandlerRootView} from "react-native-gesture-handler";

type AppProviderProps = {
    children: React.ReactNode
}

const AppProvider = ({children}: AppProviderProps) => {


    return (
        <ThemeProvider>
            <AuthProvider>
                <QueryClientProvider>
                    <GestureHandlerRootView>
                        <SafeAreaProvider>
                            {children}
                        </SafeAreaProvider>
                    </GestureHandlerRootView>
                </QueryClientProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}
export default AppProvider