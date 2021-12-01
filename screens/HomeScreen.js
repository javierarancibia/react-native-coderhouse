import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
const config = require("../config");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={{ marginBottom: 25 }}>
        <Image
          source={require("../assets/cooking.jpg")}
          style={{ resizeMode: "cover", height: 100, width: 200 }}
        />
      </View>
      <View style={styles.screen}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Option", {
              name: "Breakfast",
              baseURL: `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=&app_id=${config.APP_ID}&app_key=${config.API_KEY}&mealType=Breakfast&random=true`,
            });
          }}
        >
          <Image
            source={require("../assets/cooking.jpg")}
            style={{
              height: 120,
              width: 300,
              borderRadius: 25,
              marginBottom: 25,
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              position: "absolute",
              marginBottom: 25,
            }}
          >
            Desayuno
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Option", {
              name: "Lunch",
              baseURL: `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=&app_id=${config.APP_ID}&app_key=${config.API_KEY}&mealType=Lunch&random=true`,
            });
          }}
        >
          <Image
            source={require("../assets/cooking.jpg")}
            style={{
              height: 120,
              width: 300,
              borderRadius: 25,
              marginBottom: 25,
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              position: "absolute",
              marginBottom: 25,
            }}
          >
            Almuerzo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Option", {
              name: "Dinner",
              baseURL: `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=&app_id=${config.APP_ID}&app_key=${config.API_KEY}&mealType=Dinner&random=true`,
            });
          }}
        >
          <Image
            source={require("../assets/cooking.jpg")}
            style={{
              height: 120,
              width: 300,
              borderRadius: 25,
            }}
          />
          <Text style={{ color: "white", fontSize: 20, position: "absolute" }}>
            Cena
          </Text>
        </TouchableOpacity>
      </View>
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
    flex: 1,
    justifyContent: "center",
  },
});

export default HomeScreen;
