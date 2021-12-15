import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../data/dummy-data"

const MealDetailScreen = props => {
  const item = props.navigation.getParam("item", {})
  return (
    <View>
      <Text>{item.title}</Text>
      <Button
        title="Go To Categories"
        onPress={() => {
          props.navigation.popToTop()
        }}
      />
    </View>
  )
}

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam("catId")
  const category = CATEGORIES.find(cat => cat.id === catId)
  return {
    headerTitle: category.title,
  }
}

export default MealDetailScreen

const styles = StyleSheet.create({})
