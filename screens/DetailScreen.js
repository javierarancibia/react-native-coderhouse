import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

const DetailScreen = ({ route }) => {
  const { randomRecipe } = route.params;
  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <ScrollView style={styles.scrollView} centerContent={true}>
          <Text style={styles.text}>{randomRecipe.recipe.label}</Text>
          <Image
            source={{ uri: randomRecipe.recipe.images.REGULAR.url }}
            style={{
              width: 180,
              height: 180,
              borderRadius: 25,
              marginBottom: 5,
            }}
          />
          {randomRecipe.recipe.ingredientLines.map((ing) => (
            <Text key={ing} style={styles.list}>{ing}</Text>
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
