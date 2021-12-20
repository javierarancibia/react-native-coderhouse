import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

const RecipesListScreen = ({ navigation }) => {
  const categoryId = useSelector((state) => state.Categories.selected);
  const allRecipes = useSelector((state) => state.AllRecipes.list);
  const filteredList = allRecipes.filter(
    (item) => item.categoryID === categoryId
  );

  const onHandleDetailRecipe = (itemId) => {
    navigation.navigate("MyRecipeDetail", {
      id: itemId,
    });
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.itemId}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onHandleDetailRecipe(item.itemId)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
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
