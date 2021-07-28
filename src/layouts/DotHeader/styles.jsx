import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  dotContainer: {
    flex: 1,
    marginTop: Platform.OS === "android" ? "10%" : 0,
  },

  header: {
    paddingHorizontal: 10,
  },

  dotIcon: {
    height: 90,
    width: 90,
    resizeMode: "contain",
  },
});
