import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/CustomHeaderButton"

const FilterScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Filter Screen</Text>
    </View>
  )
}

FilterScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="menu"
          onPress={() => navData.navigation.toggleDrawer()}
          color="black"
        />
      </HeaderButtons>
    ),
  }
}

export default FilterScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
