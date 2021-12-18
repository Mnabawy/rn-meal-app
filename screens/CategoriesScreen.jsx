import React from "react"
import { StyleSheet, FlatList, View } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryItem from "../components/CategoryItem"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/CustomHeaderButton"

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

CategoriesScreen.navigationOptions = navData => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="menu"
          onPress={() => navData.navigation.toggleDrawer()}
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

export default CategoriesScreen
