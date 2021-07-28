import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  walkImage: {
    height: "40%",
    width: "90%",
    resizeMode: "cover",
  },

  content: {
    width: "90%",
  },

  walkTitle: {
    color: colors.grey,
    fontSize: fontSizes.medium,
  },

  walkDescription: {
    color: colors.black,
    fontSize: fontSizes.big,
    fontWeight: "bold",
    width: "80%",
    marginTop: 15,
  },

  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  skipOption: {
      color: colors.grey,
      fontSize: fontSizes.medium
  },

  nextOptionContainer: {
    height: 40,
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purple,
    borderRadius: 15
  },

  nextOption: {
    color: "white",
    fontWeight: "bold"
  }
});
