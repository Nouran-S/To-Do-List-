import React, { useState } from "react";
import { View, Text, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import styles, { Theme } from "./Style_Sheet";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [fadeAnim] = useState(new Animated.Value(0));

    const [fontsLoaded, fontError] = useFonts({
        "Roboto-VariableFont": require("./assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
        "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf"),
        // Add "Roboto-Regular" if needed: "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded && !fontError) {
        return (
            <View>
                <Text>Loading fonts...</Text>
            </View>
        );
    }

    if (fontError) {
        console.log("Font loading error:", fontError);
        return (
            <View>
                <Text>Font loading failed: {fontError.message}</Text>
            </View>
        );
    }

    const handleAddTask = () => {
        if (taskText.trim()) {
            const newTasks = [...tasks, taskText];
            setTasks(newTasks);
            setTaskText("");
            console.log(newTasks);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    };

    const handleDeleteTask = (indexToDelete) => {
        const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
        setTasks(updatedTasks);
    };

    return (
        <LinearGradient colors={Theme.colors.gradientColors} style={styles.gradientContainer}>
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Header />
                </View>
                <View style={styles.bodyView}>
                    <TaskInput taskText={taskText} setTaskText={setTaskText} handleAddTask={handleAddTask} />
                    <TaskList tasks={tasks} fadeAnim={fadeAnim} handleDeleteTask={handleDeleteTask} />
                </View>
            </View>
        </LinearGradient>
    );
}