import React, { useState } from "react";
import ImageSelector from "../components/ImageSelector";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const allRecipes = useSelector((state) => state.AllRecipes.list);

  const filteredRecipes = allRecipes.find((item) => item.itemId === id);
  return (
    <View style={styles.screen}>
      <Text style={{marginBottom:80}}>{filteredRecipes.name}</Text>
      <ImageSelector imageUrl={filteredRecipes.image} itemId={filteredRecipes.itemId} />
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
