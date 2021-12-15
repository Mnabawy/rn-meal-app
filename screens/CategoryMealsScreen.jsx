import React from "react"
import { Button, Platform, StyleSheet, Text, View } from "react-native"

import { Categories } from "../data/dummy-data"
import Colors from '../constants/Colors'

const CategoryMealScreen = props => {
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

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId")
  const title = Categories.find(cat => cat.id === categoryId).title
  return {
    headerTitle: title,
  }
}

const styles = StyleSheet.create({})
export default CategoryMealScreen
