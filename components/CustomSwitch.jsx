import React from "react"
import { StyleSheet, Text, View, Switch } from "react-native"
import Colors from "../constants/Colors"
const CustomSwitch = ({ title, value, changeHandler }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{title}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === "android" ? Colors.primary : ""}
        value={value}
        onValueChange={newValue => changeHandler(newValue)}
      />
    </View>
  )
}

export default CustomSwitch

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
})
