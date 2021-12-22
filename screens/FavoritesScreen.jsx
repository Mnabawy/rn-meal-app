import React from "react"
import { StyleSheet } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/CustomHeaderButton"
import MealList from "../components/MealList"
import { useSelector } from "react-redux"

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)

  return <MealList listData={favMeals} navigation={props.navigation} />
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
