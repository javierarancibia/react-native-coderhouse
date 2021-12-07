import React from "react";
import { StyleSheet, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator.js";
import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from 'react-redux';
import store  from './store'

export default function App() {
  const [loaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato/Lato-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <MainNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop: 40,
  },
  title: {
    alignItems: "center",
    color: "blue",
    fontSize: 30,
  },
});
