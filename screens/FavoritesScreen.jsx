import React from "react"
import { Platform, StyleSheet, Text, View } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/CustomHeaderButton"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"

const FavoritesScreen = props => {
  const favList = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2")
  return <MealList listData={favList} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions = navData => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default FavoritesScreen
