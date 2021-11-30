import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
const config = require('../config')

const HomeScreen = ({ navigation }) => {
  const APP_ID = "03b6c229";
  const API_KEY = "eaffd9d455270ea2f35fc2f0e8fe6d14";
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/dinner.png")}
        style={{
          width: 190,
          height: 190,
        }}
      />
      <Text style={{ color: "black" }}>¿Que cocinaremos hoy?</Text>

      <View style={styles.button}>
        <Pressable
          onPress={() => {
            navigation.navigate("Option", {
              name: "Breakfast",
              baseURL:
                `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=&app_id=${config.APP_ID}&app_key=${config.API_KEY}&mealType=Breakfast&random=true`,
            });
          }}
        >
          <Text style={{ color: "white" }}> Desayuno</Text>
        </Pressable>
      </View>

      <View style={styles.button}>
        <Pressable
          onPress={() => {
            navigation.navigate("Option", {
              name: "Lunch",
              baseURL:
              `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=&app_id=${APP_ID}&app_key=${API_KEY}&mealType=Lunch&random=true`,
            });
          }}
        >
          <Text style={{ color: "white" }}>Almuerzo</Text>
        </Pressable>
      </View>

      <View style={styles.button}>
        <Pressable
          onPress={() => {
            navigation.navigate("Option", {
              name: "Dinner",
              baseURL:
              `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=&app_id=${APP_ID}&app_key=${API_KEY}&mealType=Dinner&random=true`,
            });
          }}
        >
          <Text style={{ color: "white" }}>Cena</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 22,
    paddingHorizontal: 52,
    elevation: 3,
    borderRadius: 15,
    backgroundColor: "orange",
    marginTop: 30,
    padding: 10,
    fontFamily:'Lato-Regular'
  },
});

export default HomeScreen;
