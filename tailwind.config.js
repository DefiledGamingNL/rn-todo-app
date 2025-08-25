/** @type {import('tailwindcss').Config} */
const { lightColors, darkColors } = require("./theme/colors");
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                bg: {
                    light: lightColors.bg,
                    dark: darkColors.bg,
                },
                surface: {
                    light: lightColors.surface,
                    dark: darkColors.surface,
                },
                text: {
                    light: lightColors.text,
                    dark: darkColors.text,
                },
                textMuted: {
                    light: lightColors.textMuted,
                    dark: darkColors.textMuted,
                },
                border: {
                    light: lightColors.border,
                    dark: darkColors.border,
                },
                primary: {
                    light: lightColors.primary,
                    dark: darkColors.primary,
                },
                success: {
                    light: lightColors.success,
                    dark: darkColors.success,
                },
                warning: {
                    light: lightColors.warning,
                    dark: darkColors.warning,
                },
                danger: {
                    light: lightColors.danger,
                    dark: darkColors.danger,
                },
            },
        },
    },
    plugins: [],
};