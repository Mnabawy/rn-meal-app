import { MEALS } from "../../data/dummy-data"
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}

export const MealsReducer = (state = initialState, action) => {
  return state
}
