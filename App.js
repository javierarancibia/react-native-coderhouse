import React from "react";
import { StyleSheet, View } from "react-native";
import Index from "./aptComponents/Index.js"

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [loaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato/Lato-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;
  console.log(loaded);

  return <Index />
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
