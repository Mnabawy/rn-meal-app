import React from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import styles from "./Styles/MealItemStyle"

const MealItem = props => {
  const { title, duration, complexity, affordability, imageUri, onSelected } =
    props
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelected}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: imageUri }} style={styles.bgImage}>
              <View style={styles.titleContianer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{duration}m</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default MealItem
