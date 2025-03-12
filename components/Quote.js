import React from "react";
import { View, Text } from "react-native"; // Ensure Text is imported
import styles from "../Style_Sheet";

const Quote = () => (
     <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
               Small daily improvements are the key to staggering long-term results.
          </Text>
     </View>
);

export default Quote;