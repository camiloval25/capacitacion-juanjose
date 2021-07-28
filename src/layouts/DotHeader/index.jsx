import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Image, Platform } from "react-native";
import styles from "./styles";

import Dot from "../../assets/icons/dot_icon.png";

const DotHeader = ({ children }) => (
  <SafeAreaView style={styles.dotContainer}>
    <View style={styles.header}>
      <Image style={styles.dotIcon} source={Dot} />
    </View>

    <View style={{ flex: 1 }}>{children}</View>

    <StatusBar />
  </SafeAreaView>
);

export default DotHeader;
