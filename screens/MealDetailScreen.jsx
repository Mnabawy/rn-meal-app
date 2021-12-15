import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data"

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId", {})

  selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go To Categories"
        onPress={() => {
          navigation.popToTop()
        }}
      />
    </View>
  )
}

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam("title")
  return {
    headerTitle: title,
  }
}

export default MealDetailScreen

const styles = StyleSheet.create({})
