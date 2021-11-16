import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home.js";
import ApartmentProfile from "./components/ApartmentProfile.js";
import UfApiCall from "./components/UfApiCall.js";
import * as Progress from "react-native-progress";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  // const [load, setLoad] = useState(true);
  const [apartment, setApartment] = useState("");

  const [loaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato/Lato-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;
  console.log(loaded);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(false);
  //   }, 2000);
  // }, []);

  const handleApartment = (finalApartment) => {
    setApartment(finalApartment);
  };

  // let content = (
  //   <Progress.CircleSnail progress={0.3} width={200} animated={true} />
  // );

  // if (load === false && !apartment) {
  let content = (
    <View>
      <UfApiCall />
      <Home onGetApartment={handleApartment} />
    </View>
  );
  // }

  if (apartment) {
    content = (
      <ApartmentProfile
        apartment={apartment}
        onGetApartment={handleApartment}
      />
    );
  }

  return (
    <View style={styles.screen}>
      {content}
      <StatusBar style="auto" />
    </View>
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
