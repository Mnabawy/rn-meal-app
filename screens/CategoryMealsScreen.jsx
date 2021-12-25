import React from "react"
import { useSelector } from "react-redux"

import { CATEGORIES } from "../data/dummy-data"
import MealList from "../components/MealList"

const CategoryMealScreen = props => {
  const categoryId = props.navigation.getParam("categoryId")

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  console.log(displayedMeals)

  return <MealList listData={displayedMeals} navigation={props.navigation} />
}

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId")
  const title = CATEGORIES.find(cat => cat.id === categoryId).title
  return {
    headerTitle: title,
  }
}

export default CategoryMealScreen
