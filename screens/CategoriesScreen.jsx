import React from "react"
import {
  StyleSheet,
  FlatList,
  View,
  Platform,
  TouchableNativeFeedback,
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { CATEGORIES } from "../data/dummy-data"
import CategoryItem from "../components/CategoryItem"

const CategoriesScreen = props => {
  const listItem = category => {
    return (
      <CategoryItem
        id={category.item.id}
        color={category.item.color}
        title={category.item.title}
        navigation={props.navigation}
      />
    )
  }
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, key) => item.id}
        data={CATEGORIES}
        renderItem={listItem}
        numColumns={2}
        horizontal={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default CategoriesScreen
