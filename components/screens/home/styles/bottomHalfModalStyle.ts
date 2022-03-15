import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
    elevation: 1,
    zIndex: 50,
    paddingHorizontal: 20,
  },
  sheetIndicator: {
    position: "absolute",
    top: 10,
    left: Dimensions.get("window").width / 2 - 40,
    width: 80,
    height: 10,
    borderRadius: 30,
    backgroundColor: "#cacaca"
  },
  modalContainer: {
    width: "100%",
    height: "100%",
    marginTop: 35
  },
  modalItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  modalItemIcon: {
    width: 40,
    height: 50,
    textAlignVertical: "center"
  },
  modalItemText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular"
  }
})

export default styles