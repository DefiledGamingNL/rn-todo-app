import {View, Text} from 'react-native'
import React from 'react'
import {ConvexProvider, ConvexReactClient} from "convex/react";

type QueryClientProviderProps = {
    children: React.ReactNode
}
export default function QueryClientProvider({children}: QueryClientProviderProps) {
    const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
        unsavedChangesWarning: false
    });
    return (
        <ConvexProvider client={convex}>
            {children}
        </ConvexProvider>
    )
}
