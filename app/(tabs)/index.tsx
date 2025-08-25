import {Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useAuthStore} from "@/stores/authStore";
import {useRouter} from "expo-router";
import {createHomeStyles} from "@/theme/home.styles";
import {useThemeStore} from "@/stores/themeStore";

export default function Index() {
    const {logOut} = useAuthStore();
    const router = useRouter();
    const {colors} = useThemeStore()

    const homeStyles = createHomeStyles(colors);

    const handleLogout = async () => {
        logOut();
        router.replace('/login');
    }

    return (
        <SafeAreaView style={homeStyles.safeArea}
                      className='dark:bg-bg-dark bg-bg-light'
        >

            <TouchableOpacity onPress={handleLogout}>
                <Text
                    className="text-white dark:text-text-dark py-4 px-6 dark:bg-danger-dark bg-danger-light rounded mt-4">Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
