import React from "react"
import { StyleSheet, Text, View } from "react-native"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"

const FavoritesScreen = props => {
  const favoriteListData = MEALS.filter(
    meal => meal.id === "m1" || meal.id === "m2"
  )
  return <MealList listData={favoriteListData} navigation={props.navigation} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default FavoritesScreen
