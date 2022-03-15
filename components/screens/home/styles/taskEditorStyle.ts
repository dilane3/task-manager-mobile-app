import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80,
    left: 0,
    width: "100%",
    height: "auto",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 7,
  },
  editorTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 14
  },
  editor: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10
  },
  textInput: {
    width: Dimensions.get("window").width - 100,
    height: 35,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#cacaca",
    borderRadius: 5,
    fontFamily: "Poppins-Regular",
    paddingTop: 5
  },
  btn: {
    width: 75,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#3e4bff",
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  btnIcon: {
    marginRight: 5,
    fontSize: 20,
    color: "#fff"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    marginTop: 5
  }
})

export default styles