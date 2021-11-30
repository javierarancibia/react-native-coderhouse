import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import axios from "axios";

const OptionScreen = ({ route, navigation }) => {
  const [randomRecipe, setRandomRecipe] = useState();

  const { name, baseURL } = route.params;
  console.log(baseURL);

  useEffect(() => {
    axios
      .get(baseURL)
      .then(function (response) {
        setRandomRecipe(response.data.hits[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.screen}>
      {randomRecipe && (
        <Image
          source={{ uri: randomRecipe.recipe.images.REGULAR.url }}
          style={{
            width: 320,
            height: 320,
            borderRadius: 25,
          }}
        />
      )}
      <Text style={styles.text}>
        {randomRecipe && randomRecipe.recipe.label}{" "}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Detail");
        }}
      >
        <Text style={{color:'white', fontSize:15, fontFamily:'Lato-Regular'}}>Guardar Receta a mi Lista</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop:25
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 45,
    backgroundColor: "orange",
    marginTop: 30,
    padding: 10,
  },
});

export default OptionScreen;
