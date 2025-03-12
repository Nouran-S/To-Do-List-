import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Quote from "./Quote";
import styles, { Theme } from "../Style_Sheet";

const TaskInput = ({ taskText, setTaskText, handleAddTask }) => (
     <View style={styles.addTaskView}>
          <Quote />
          <TextInput
               style={styles.task}
               placeholder="What's on your to-do list? Add a task!"
               placeholderTextColor={Theme.colors.placeholderTextColor} // Fixed reference
               value={taskText}
               onChangeText={setTaskText}
               onSubmitEditing={handleAddTask}
          />
          <TouchableOpacity style={[styles.btn, { alignSelf: "flex-end" }]} onPress={handleAddTask}>
               <Text style={styles.btnText}>New Task</Text>
          </TouchableOpacity>
     </View>
);

export default TaskInput;