import React from "react";
import { View, Text } from "react-native"; 
import styles from "../Style_Sheet";

const Header = () => (
     <View style={styles.titleView}>
     <Text style={styles.title}>To-Do List</Text>
     </View>
);

export default Header;