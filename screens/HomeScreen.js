import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { CATEGORIES } from "../data/categories";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={{ marginBottom: 25 }}>
        <Image
          source={require("../assets/cooking.jpg")}
          style={{ resizeMode: "cover", height: 100, width: 200 }}
        />
      </View>

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Option", {
                name: item.name,
                id: item.id,
                baseURL: item.baseURL,
              });
            }}
          >
            <Image
              source={item.image}
              style={styles.image}
            />
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
});

export default HomeScreen;
