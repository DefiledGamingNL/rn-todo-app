import React from 'react'
import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import {Platform} from "react-native";

const isWeb = Platform.OS === "web";

type AuthState = {
    isLoggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
    _hasHydrated: boolean;
    setHasHydrated: (value: boolean) => void;
}

export const useAuthStore = create(
    persist<AuthState>(
        (set) => ({
            isLoggedIn: false,
            _hasHydrated: false,
            logIn: () => {
                set((state) => {
                    return {
                        ...state,
                        isLoggedIn: true,
                    };
                });
            },
            logOut: () => {
                set((state) => {
                    return {
                        ...state,
                        isVip: false,
                        isLoggedIn: false,
                    };
                });
            },
            setHasHydrated: (value: boolean) => {
                set((state) => {
                    return {
                        ...state,
                        _hasHydrated: value,
                    };
                });
            },
        }),
        {
            name: "auth-store",
            storage: isWeb
                ? createJSONStorage(() => localStorage)
                : createJSONStorage(() => ({
                    setItem: (key: string, value: string) =>
                        SecureStore.setItemAsync(key, value),
                    getItem: (key: string) => SecureStore.getItemAsync(key),
                    removeItem: (key: string) => SecureStore.deleteItemAsync(key),
                })),
            onRehydrateStorage: () => {
                return (state) => {
                    state?.setHasHydrated(true);
                };
            },
        },
    ),
);
