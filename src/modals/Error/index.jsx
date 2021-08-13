import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const Error = ({ errorMessage }) => {
  return (
    <View style={styles.modalContent}>
      <Text>{errorMessage}</Text>
      <TouchableOpacity onPress={() => alert("Hola")}>
        <Text>¡Ok!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;
