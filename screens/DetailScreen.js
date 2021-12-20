import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DetailScreen = ({ route }) => {
  const { randomRecipe } = route.params;
  return (
    <View style={styles.screen}>
      <Text>{randomRecipe.recipe.label}</Text>
      <Image
        source={{ uri: randomRecipe.recipe.images.REGULAR.url }}
        style={{
          width: 320,
          height: 320,
          borderRadius: 25,
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

export default DetailScreen;
