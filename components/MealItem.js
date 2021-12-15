import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

const MealItem = ({ title, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("MealDetail")}>
      <View>
        <View style={styles.mealRow}>
          <Text>{title}</Text>
        </View>
        <View style={styles.mealRow}></View>
      </View>
    </TouchableOpacity>
  )
}

export default MealItem

const styles = StyleSheet.create({
  screen: {},
})
