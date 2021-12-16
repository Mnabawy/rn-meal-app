import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/CustomHeaderButton"
import { MEALS } from "../data/dummy-data"

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId", {})

  selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go To Categories"
        onPress={() => {
          navigation.popToTop()
        }}
      />
    </View>
  )
}

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam("title")
  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-star"
          title="Favorite"
          onPress={() => console.log("clicked")}
        />
      </HeaderButtons>
    ),
  }
}

export default MealDetailScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  star: {
    paddingRight: 10,
  },
})
