import React from "react"
import { Platform } from "react-native"
import { createAppContainer } from "react-navigation"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createStackNavigator } from "react-navigation-stack"

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealDetailScreen from "../screens/MealDetailScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import Colors from "../constants/Colors"

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,

      navigationOptions: {
        headerTitle: "Meals Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
)

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          )
        },
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: "Favorites!",
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          )
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accent,
    },
  }
)

export default createAppContainer(MealsFavTabNavigator)
