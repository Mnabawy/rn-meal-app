import React from "react"
import { CATEGORIES } from "../data/dummy-data"
import MealList from "../components/MealList"
import { useSelector } from "react-redux"

const CategoryMealScreen = props => {
  const categoryId = props.navigation.getParam("categoryId")

  const availableMeals = useSelector(state => state.meals.filterdMeals)

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  const onSelectHandler = props => {
    props.navigation.navigate("MealDetail", {
      mealId: itemData.item.id,
      title: itemData.item.title,
    })
  }

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
