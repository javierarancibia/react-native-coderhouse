import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import axios from "axios";

const OptionScreen = ({ navigation }) => {
  const [allRecipes, setAllRecipes] = useState();
  const [randomRecipe, setRandomRecipe] = useState();

  useEffect(() => {
    const APP_ID = "03b6c229";
    const API_KEY = "eaffd9d455270ea2f35fc2f0e8fe6d14";
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=&app_id=03b6c229&app_key=eaffd9d455270ea2f35fc2f0e8fe6d14&mealType=Lunch`
      )
      .then(function (response) {
        setAllRecipes(response.data.hits);
        //   setRandomRecipe(setAllRecipes[Math.floor(Math.random()*80) + 1]);
        setRandomRecipe(response.data.hits[19]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(randomRecipe);

  return (
    <View style={styles.screen}>
      <Text>{randomRecipe && randomRecipe.recipe.label} </Text>
      <Button
        title="Guardar la Receta"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OptionScreen;
