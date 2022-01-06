import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../store/actions/category.actions";

const MyRecipesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Categories.Categories);
  console.log(categories)

  const handleSelectCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("RecipesList", {
      categoryID: item.id,
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.screen}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectCategory(item)}>
              <Image
                source={item.image}
                style={styles.image}
              />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
      <Text style={styles.title}>Revisa tus recetas guardadas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
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
    fontFamily: "Lato-Regular",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 120,
    width: 300,
    borderRadius: 25,
    marginBottom: 25,
  },
  text: {
    color: "white",
    fontSize: 20,
    position: "absolute",
  },
  title: {
    fontSize: 20,
    marginHorizontal: 10,
    padding: 10,
    marginBottom: 30
  }
});

export default MyRecipesScreen;
