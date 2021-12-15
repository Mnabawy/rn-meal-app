import React from "react"
import { Button, StyleSheet, Text, View, FlatList } from "react-native"
import _ from "lodash"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"

const CategoryMealScreen = props => {
  const categoryId = props.navigation.getParam("categoryId")
  const meals = MEALS.filter(m => m.categoryIds).map(
    targetId => targetId === categoryId
  )

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  const renderMealItem = itemData => {
    return (
      <MealItem title={itemData.item.title} navigation={props.navigation}   />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList data={MEALS} renderItem={renderMealItem} />
    </View>
  )
}

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId")
  const title = CATEGORIES.find(cat => cat.id === categoryId).title
  return {
    headerTitle: title,
  }
}

const styles = StyleSheet.create({
  screen: {},
})
export default CategoryMealScreen
