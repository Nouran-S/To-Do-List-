import React from "react";
import { FlatList } from "react-native"; // Ensure FlatList is imported
import TaskItem from "./TaskItem";
import styles from "../Style_Sheet";

const TaskList = ({ tasks, fadeAnim, handleDeleteTask }) => (
     <FlatList
          style={styles.taskViewer}
          data={tasks}
          renderItem={({ item, index }) => (
               <TaskItem item={item} index={index} fadeAnim={fadeAnim} handleDeleteTask={handleDeleteTask} />
          )}
          keyExtractor={(item, index) => `${item}-${index}`}
          contentContainerStyle={styles.taskListContent}
          showsVerticalScrollIndicator={false}
     />
);

export default TaskList;