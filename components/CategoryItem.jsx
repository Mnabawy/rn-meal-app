import React from "react"
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native"

const CategoryItem = props => {
  const { id, color, title, navigation } = props

  let TouchableComponent = TouchableOpacity

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <View
      style={{
        ...styles.itemContainer,
        ...{ backgroundColor: color },
      }}
    >
      <TouchableComponent
        style={{
          height: "100%",
          width: "100%",
          borderColor: "black",
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: id,
            },
          })
        }}
      >
        <View
          style={{
            ...styles.item,
          }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  itemContainer: {
    height: 150,
    width: 150,
    margin: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowRadius: 0.26,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 15,
  },
  item: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1,
    paddingBottom: 10,
    paddingRight: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
})
