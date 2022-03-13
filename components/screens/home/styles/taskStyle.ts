import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: '#c4c4c4',
    borderTopWidth: 1,
    paddingVertical: 10
  },
  leftSection: {
    width: Dimensions.get("window").width - 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 5
  },
  tastText: {
    width: Dimensions.get("window").width - 110,
    fontSize: 14,
    marginLeft: 10,
    color: "#444",
    fontFamily: "Poppins-Regular"
  },
  taskMenu: {
    marginRight: 10,
    fontSize: 20,
  }
})

export default styles