import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "./MealItem"

const MealList = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        navigation={props.navigation}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUri={itemData.item.imageUrl}
        onSelected={() =>
          props.navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
            title: itemData.item.title,
          })
        }
      />
    )
  }

  return (
    <View>
      <FlatList data={props.listData} renderItem={renderMealItem} />
    </View>
  )
}

export default MealList
