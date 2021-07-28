import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./styles";

const Input = ({ value, placeholder, onChangeText, onChange, maxLength }) => (
  <TextInput
    value={value}
    style={styles.input}
    placeholder={placeholder}
    onChangeText={onChangeText}
    onChange={onChange}
    maxLength={maxLength}
  />
);

export default Input;
