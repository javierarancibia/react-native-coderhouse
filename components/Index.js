import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Home from "./Home.js";
import ApartmentProfile from "./ApartmentProfile.js";
import UfApiCall from "./UfApiCall.js";
import * as Progress from "react-native-progress";

const Index = () => {
  const [load, setLoad] = useState(true);
  const [apartment, setApartment] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);
  console.log(load)

  const handleApartment = (finalApartment) => {
    setApartment(finalApartment);
  };

//   let content = (
//     <Progress.CircleSnail progress={0.3} width={200} animated={true} />
//   );

//   if (!load && !apartment) {
    let content = (
      <View>
        <UfApiCall />
        <Home onGetApartment={handleApartment} />
      </View>
    );
//   }

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
};

export default Index

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
