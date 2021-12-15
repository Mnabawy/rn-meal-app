import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from "react-navigation"
import CategoriesScreen from "../screens/CategoriesScreen"
import MealDetailcreen from "../screens/MealDetailScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import Colors from "../constants/Colors"
import CategoryMealScreen from "../screens/CategoryMealsScreen"
import { Platform } from "react-native"

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Categories",
        headerStyle: {
          backgroundColor: Platform === "android" ? Colors.primary : "white",
        },
        headerTintColor: Platform === "android" ? "white" : Colors.primary,
      },
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },

    MealDetail: MealDetailcreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform === "android" ? "white" : Colors.primary,
    },
  }
)

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
