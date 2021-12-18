import React from "react"
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native"
import styles from "./Styles/CategoryItemStyle"
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
        style={styles.touchablContainer}
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
