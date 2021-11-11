import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function IntroText() {
  return (
    <View>
      <View style={{
            justifyContent: "center",
            alignItems: "center",
          }}>
        <Image
          source={require("../assets/header_image.png")}
          style={{
            width: 190,
            height: 190,
          }}
          
        />
      </View>
      <Text style={styles.text}>
        Valoriza tu departamento con nuestro algoritmo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop: 100,
  },
  text: {
    alignItems: "center",
    color: "#24A9EB",
    fontSize: 25,
    marginBottom: 35,
  },
});

export default IntroText;
