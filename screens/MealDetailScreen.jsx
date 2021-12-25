import React, { useCallback, useEffect, useState } from "react"
import { ScrollView, StyleSheet, Text, View, Image } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { useSelector, useDispatch } from "react-redux"

import CustomHeaderButton from "../components/CustomHeaderButton"
import DefaultText from "../components/DefaultText"
import CustomList from "../components/List"
import { toggleFavorite } from "../store/actions/meals-actions"

const MealDetailScreen = ({ navigation }) => {
  const MEALS = useSelector(state => state.meals.meals)
  const mealId = navigation.getParam("mealId", {})

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    navigation.setParams({
      toggleFav: toggleFavoriteHandler,
    })
  }, [toggleFavoriteHandler])

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity}</DefaultText>
        <DefaultText>{selectedMeal.affordability}</DefaultText>
      </View>
      <Text style={styles.title}>Ingrediants</Text>
      <CustomList data={selectedMeal.ingredients} />
      <Text style={styles.title}>Steps</Text>
      <CustomList data={selectedMeal.steps} />
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam("title")
  const toggleFavoriteHandler = navigation.getParam("toggleFav")

  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-star"
          title="Favorite"
          onPress={toggleFavoriteHandler}
        />
      </HeaderButtons>
    ),
  }
}

export default MealDetailScreen

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 20,
  },
})
