import React, {useEffect} from 'react'
import {useColorScheme} from "nativewind";
import {useThemeStore} from "@/stores/themeStore";


type ThemeProviderProps = {
    children: React.ReactNode
}
const ThemeProvider = ({children}: ThemeProviderProps) => {
    const {isDarkMode} = useThemeStore();
    const {setColorScheme} = useColorScheme();

    useEffect(() => {
        setColorScheme(isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return children;
}
export default ThemeProvider
