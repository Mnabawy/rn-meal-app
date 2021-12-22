import React, { useState, useEffect, useCallback } from "react"
import { StyleSheet, Switch, Text, View, Platform } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import CustomHeaderButton from "../components/CustomHeaderButton"
import CustomSwitch from "../components/CustomSwitch"
import Colors from "../constants/Colors"

const FilterScreen = props => {
  const { navigation } = props
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    }
    console.log(appliedFilters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filters</Text>
      <CustomSwitch
        changeHandler={setIsGlutenFree}
        title="Gluten-Free"
        value={isGlutenFree}
      />
      <CustomSwitch
        changeHandler={setIsLactoseFree}
        title="Lactose-Free"
        value={isLactoseFree}
      />
      <CustomSwitch changeHandler={setIsVegan} title="Vegan" value={isVegan} />
      <CustomSwitch
        changeHandler={setIsVegetarian}
        title="Vegan"
        value={isVegetarian}
      />
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
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="save"
          iconName="ios-save"
          onPress={() => {
            navData.navigation.getParam("save")
            navData.navigation.navigate("Categories")
          }}
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

export default FilterScreen
