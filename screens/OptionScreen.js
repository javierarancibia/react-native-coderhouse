import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { saveRecipe } from "../store/actions/recipes.actions";
import axios from "axios";

const OptionScreen = ({ route, navigation }) => {
  const [randomRecipe, setRandomRecipe] = useState();

  const { id, baseURL } = route.params;

  console.log(id);

  const dispatch = useDispatch();

  const handleSaveRecipe = (item) => {
    {
      randomRecipe && dispatch(saveRecipe(item));
      navigation.navigate("Detail");
    }
  };

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

      {randomRecipe && (
        <Pressable style={styles.button} disabled={true}>
          <Text
            style={styles.buttonText}
            onPress={() =>
              handleSaveRecipe({
                categoryID: id,
                itemId: Math.random(3),
                image: randomRecipe.recipe.images.REGULAR.url,
                name: randomRecipe.recipe.label,
              })
              
            }
          >
            Guardar Receta a mi Lista
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 25,
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
  buttonText: {
    color: "white",
    fontSize: 15,
    fontFamily: "Lato-Regular",
  },
});

export default OptionScreen;
