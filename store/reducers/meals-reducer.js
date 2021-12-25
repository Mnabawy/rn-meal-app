import { MEALS } from "../../data/dummy-data"
import { TOGGLE_FAVORITE, toggleFavorite } from "../actions/meals-actions"

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}

export const MealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existedMeal = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      )
      if (existedMeal >= 0) {
        let list = [...state.favoriteMeals]
        const updatedFevMeals = list.filter(meal => meal.id !== action.mealId)
        return {
          ...state,
          favoriteMeals: updatedFevMeals,
        }
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId)
        const updatedFevMeals = [...state.favoriteMeals, meal]
        return {
          ...state,
          favoriteMeals: updatedFevMeals,
        }
      }
    default:
      return state
  }

  return state
}
