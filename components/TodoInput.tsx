import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import {useThemeStore} from "@/stores/themeStore";
import {createHomeStyles} from "@/theme/home.styles";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {useTodoStore} from "@/stores/todoStore";
import {LinearGradient} from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const TodoInput = () => {
    const {colors} = useThemeStore()
    const homeStyles = createHomeStyles(colors)
    const addTodo = useMutation(api.todos.addTodo)
    const {newTodo, setNewTodo} = useTodoStore();
    const handleAddTodo = async () => {
        if (newTodo.trim()) {
            try {
                const response = await addTodo({text: newTodo.trim()})

                if (response) {
                    setNewTodo('');
                }
            } catch (err) {
                console.error("Failed to add todo:", err);
                Alert.alert("Error", "Er is een fout opgetreden bij het toevoegen van de taak. Probeer het opnieuw.");

            }
        }
    }
    return (
        <View style={homeStyles.inputSection}>
            <View style={homeStyles.inputWrapper}>
                <TextInput style={homeStyles.input} placeholder="Wat moet er gedaan worden?" value={newTodo}
                           onChangeText={setNewTodo} onSubmitEditing={handleAddTodo} multiline
                           placeholderTextColor={colors.textMuted}/>
                <TouchableOpacity onPress={handleAddTodo} activeOpacity={0.8} disabled={!newTodo.trim()}>
                    <LinearGradient colors={newTodo.trim() ? colors.gradients.primary : colors.gradients.muted}
                                    style={[homeStyles.addButton, !newTodo.trim() && homeStyles.addButtonDisabled]}>
                        <Ionicons name="add" size={24} color="#ffffff"/>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default TodoInput
