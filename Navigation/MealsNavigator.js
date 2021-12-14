import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from "react-navigation"
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealScreen from "../screens/CategoryMealsScreen"
import MealDetailScreen from "../screens/MealDetailScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import Colors from "../constants/Colors"

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealScreen,
  },
  MealDetail: MealDetailScreen,
})

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: MealsNavigator,
    Favorites: FavoritesScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primary,
    },
  }
)

export default createAppContainer(MealsNavigator)
