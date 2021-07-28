import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../";

export default StyleSheet.create({
  buttonContainer: {
    height: 50,
    backgroundColor: colors.purple,
    width: "85%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: fontSizes.medium,
  },
});
