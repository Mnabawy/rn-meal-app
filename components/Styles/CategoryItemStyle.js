import { StyleSheet } from "react-native"

export default StyleSheet.create({
  itemContainer: {
    height: 150,
    width: 150,
    margin: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowRadius: 0.26,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 15,
  },
  touchablContainer: {
    height: "100%",
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
  },
  item: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1,
    paddingBottom: 10,
    paddingRight: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
})
