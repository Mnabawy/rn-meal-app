import React, { useState } from "react"
import { StyleSheet } from "react-native"
import AppLoading from "expo-app-loading"
import MealsNavigator from "./Navigation/MealsNavigator"
import * as Font from "expo-font"
import { OverflowMenuProvider } from "react-navigation-header-buttons"

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sens": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return <MealsNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
