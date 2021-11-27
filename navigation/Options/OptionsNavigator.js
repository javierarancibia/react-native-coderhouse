import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import OptionScreen from "../../screens/OptionScreen";
import DetailScreen from "../../screens/DetailScreen";

const Stack = createNativeStackNavigator();

const OptionsNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Option" component={OptionScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
  );
};

export default OptionsNavigator;
