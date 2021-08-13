import React from "react";
import { navigate } from "../../navigation/RootNavigator";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import GrapeWalkthrough from "../../assets/images/walkthrough.png";

const WalktroughController = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.walkImage} source={GrapeWalkthrough} />
      <View style={styles.content}>
        <Text style={styles.walkTitle}>Get Started</Text>
        <Text style={styles.walkDescription}>
          Millions of people use to turn their ideas into reality.
        </Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <Text style={styles.skipOption}>Skip now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextOptionContainer} onPress={() => navigate("SignIn")}>
            <Text style={styles.nextOption}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WalktroughController;
