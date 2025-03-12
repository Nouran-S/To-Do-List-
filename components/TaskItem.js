import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native"; 
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../Style_Sheet";

const TaskItem = ({ item, index, fadeAnim, handleDeleteTask }) => (
     <Animated.View style={[styles.taskItemContainer, { opacity: fadeAnim }]}>
          <Text style={styles.taskItem}>{item}</Text>
          <TouchableOpacity style={styles.deleteIcon} onPress={() => handleDeleteTask(index)}>
               <Icon name="close" size={24} color="white" />
          </TouchableOpacity>
     </Animated.View>
);

export default TaskItem;