import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: '#c4c4c4',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  containerIn: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff"
  },
  containerBackgroundIcon: {
    height: "100%",
    width: 70,
    justifyContent: "center",
    alignItems: "center"
  },
  leftSection: {
    width: Dimensions.get("window").width - 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 5
  },
  taskText: {
    width: Dimensions.get("window").width - 110,
    fontSize: 14,
    marginLeft: 10,
    color: "#444",
    fontFamily: "Poppins-Regular"
  },
  taskMaked: {
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    color: "#828282"
  },
  taskMenu: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 100
  },
  taskMenuIcon: {
    fontSize: 20,
  }
})

export default styles