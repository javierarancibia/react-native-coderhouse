import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  console.log('Home')
  return (
    <View style={styles.screen}>
      <Text style={{color:'black'}}>HomeScreen</Text>
      <Button title="A la opcion" onPress={() => {
        navigation.navigate('Option')
      }} />
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

export default HomeScreen;
