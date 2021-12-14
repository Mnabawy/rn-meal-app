import React from "react"
import {
  Button,
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  Platform,
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Categories } from "../data/dummy-data"
import Colors from "../constants/Colors"

const CategoriesScreen = props => {
  const listItem = CategoryItem => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: CategoryItem.item.id,
            },
          })
        }}
      >
        <View>
          <Text>{CategoryItem.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <FlatList
      keyExtractor={(item, key) => item.id}
      data={Categories}
      renderItem={listItem}
      numColumns={2}
    />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: "Categories",
  headerStyle: {
    backgroundColor: Platform === "android" ? Colors.primary : "white",
  },
  headerTitleStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTintColor: Platform === "android" ? "white" : Colors.primary,
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    margin: 15,
    height: 150,
  },
})

export default CategoriesScreen
