import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

const RecipesListScreen = () => {

  const categoryId = useSelector(state => state.Categories.selected)
  const allRecipes = useSelector(state => state.AllRecipes.list)
  const filteredList = allRecipes.filter(item => item.categoryID === categoryId)
  console.log(categoryId)
  console.log(allRecipes)
  console.log(filteredList)
  return (
    <View style={styles.screen}>
      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.itemId}
        renderItem={({ item }) => (
          
            <Text style={styles.text}>{item.name}</Text>
        )}
      ></FlatList>
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

export default RecipesListScreen;
