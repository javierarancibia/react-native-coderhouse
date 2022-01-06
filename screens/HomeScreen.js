import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/categories";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
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
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
      <Image source={require('../assets/header.png')} style={{height:80, width:80}} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20
  },
  image: {
    height: 140,
    width: 300,
    borderRadius: 35,
    marginBottom: 25,
    shadowColor: "black",
  },
  text: {
    color: "white",
    fontSize: 25,
    position: "absolute",
    padding: 10,
  },
});

export default HomeScreen;
