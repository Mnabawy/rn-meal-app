import React from "react"
import { StyleSheet, Text, View } from "react-native"

const CustomList = ({ data }) => {
  return data.map(item => (
    <View style={styles.container}>
      <Text style={styles.item} key={item}>
        {item}
      </Text>
    </View>
  ))
}

export default CustomList

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  item: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 12,
    paddingLeft:10
  },
})
