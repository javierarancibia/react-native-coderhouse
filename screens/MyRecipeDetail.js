import React, { useState } from "react";
import ImageSelector from "../components/ImageSelector";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const allRecipes = useSelector((state) => state.AllRecipes.list);

  const filteredRecipes = allRecipes.find((item) => item.itemId === id);
  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <ScrollView style={styles.scrollView} centerContent={true}>
          <Text style={styles.text}>{filteredRecipes.name}</Text>
          <ImageSelector
            imageUrl={filteredRecipes.image}
            itemId={filteredRecipes.itemId}
          />
          {filteredRecipes.ingredients.map((ing) => (
            <View>
              <Text style={styles.list} key={ing}>
                {ing}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 55,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
    padding: 10,
    marginBottom: 30
  },
  list: {
    padding: 3,
  },
});

export default DetailScreen;
