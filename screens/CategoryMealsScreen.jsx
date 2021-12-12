import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const CategoryMealsScreen = props => {
  return (
    <View>
      <Text>Category Meals Screen</Text>
      <Button
        title="Meal Details"
        onPress={() => props.navigation.navigate("MealDetail")}
      />
    </View>
  )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({})
