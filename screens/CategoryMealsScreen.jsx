import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

import { Categories } from "../data/dummy-data"

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId")

  const category = Categories.find(cat => cat.id === categoryId)

  return (
    <View>
      <Text>{category.title}</Text>
      <Button
        title="Meal Detail"
        onPress={() =>
          props.navigation.navigate("MealDetail", {
            catId: category.id,
          })
        }
      />

      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = {
  headerTitle: "Category Meals Screen",
}

const styles = StyleSheet.create({})
export default CategoryMealsScreen
