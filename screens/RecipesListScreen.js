import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipesListScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>RecipesListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RecipesListScreen;
