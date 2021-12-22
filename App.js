import React, { useState } from "react"
import "react-native-reanimated"
import { StyleSheet } from "react-native"
import AppLoading from "expo-app-loading"
import MealsNavigator from "./Navigation/MealsNavigator"
import * as Font from "expo-font"
import { combineReducers, createStore } from "redux"
import { MealsReducer } from "./store/reducers/meals-reducer"
import { Provider } from "react-redux"

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })
}

const rootReducer = combineReducers({
  meals: MealsReducer,
})

const store = createStore(rootReducer)

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

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
