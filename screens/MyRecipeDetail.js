import React from "react";
import ImageSelector from "../components/ImageSelector";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const allRecipes = useSelector((state) => state.AllRecipes.list);

  const filteredRecipes = allRecipes.find((item) => item.itemId === id);
//   console.log(filteredRecipes)
  return (
    <View style={styles.screen}>
      <Text>{filteredRecipes.name}</Text>
      <Image
        source={{ uri: filteredRecipes.image }}
        style={{
          width: 320,
          height: 320,
          borderRadius: 25,
        }}
      />
      <ImageSelector imageUrl={filteredRecipes.image} onImage={image => console.log(image)}/>      
      
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
